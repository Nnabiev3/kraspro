import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validators";
import { services } from "@/data/services";

export const runtime = "nodejs";
const attempts = new Map<string, { count: number; expires: number }>();
const windowMs = 10 * 60 * 1000;
const maximumBody = 2 * 1024 * 1024;

/** Accepts quote requests; rate limits are local to each server instance. */
export async function POST(request: Request) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const previous = attempts.get(address);
  if (previous && previous.count >= 5) return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
  attempts.set(address, { count: (previous?.count || 0) + 1, expires: previous?.expires || now + windowMs });

  const size = Number(request.headers.get("content-length"));
  if (size > maximumBody) return NextResponse.json({ message: "Request is too large." }, { status: 413 });
  try {
    if (!request.body) return NextResponse.json({ message: "Request body is missing." }, { status: 400 });
    const reader = request.body.getReader();
    const chunks: Uint8Array[] = [];
    let received = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      received += value.byteLength;
      if (received > maximumBody) {
        await reader.cancel();
        return NextResponse.json({ message: "Request is too large." }, { status: 413 });
      }
      chunks.push(value);
    }
    const body = Buffer.concat(chunks.map(chunk => Buffer.from(chunk)));
    const data = await new Request(request.url, { method: "POST", headers: request.headers, body }).formData();
    if (data.get("company_website")) return NextResponse.json({ message: "Your request was submitted." });
    const parsed = quoteSchema.safeParse({
      name: data.get("name"), phone: data.get("phone"), email: data.get("email"), zip: data.get("zip"),
      service: data.get("service"), description: data.get("description"), preferredContact: data.get("preferredContact"),
      consent: data.get("consent") === "on", website: ""
    });
    if (!parsed.success || !services.some(service => service.slug === parsed.data.service)) return NextResponse.json({ message: "Please check your contact and project details." }, { status: 400 });
    const photo = data.get("photo");
    if (photo instanceof File && (photo.size > 1024 * 1024 || (photo.size > 0 && !["image/jpeg", "image/png", "image/webp"].includes(photo.type)))) return NextResponse.json({ message: "Choose a JPEG, PNG or WebP image no larger than 1 MB." }, { status: 400 });
    // TODO: integrate Resend/SMTP using server-side environment variables and attach the photo.
    if (process.env.NODE_ENV === "production" || process.env.RESEND_API_KEY || process.env.SMTP_HOST) {
      return NextResponse.json({ message: "Quote delivery is not configured. Please contact us another way." }, { status: 503 });
    }
    const attachment = photo instanceof File && photo.size ? { name: photo.name, type: photo.type, data: Buffer.from(await photo.arrayBuffer()).toString("base64") } : undefined;
    console.info("Quote submission (development only):", { ...parsed.data, photo: attachment });
    return NextResponse.json({ message: "Your request was recorded for testing. Delivery is not yet configured." });
  } catch {
    return NextResponse.json({ message: "We could not process your request. Please try again." }, { status: 400 });
  }
}
