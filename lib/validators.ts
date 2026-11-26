import { z } from "zod";
export const quoteSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().pipe(z.union([z.literal(""), z.string().min(7).max(30)])).optional(),
  email: z.string().trim().pipe(z.union([z.literal(""), z.string().email().max(254)])).optional(),
  zip: z.string().trim().regex(/^\d{5}(?:-\d{4})?$/),
  service: z.string().trim().min(1).max(120),
  city: z.string().trim().max(100).optional(),
  sourcePage: z.string().trim().max(300).refine(value => value === "" || /^\/(?!\/)[a-zA-Z0-9/_-]*$/.test(value), "Invalid source page.").optional(),
  description: z.string().trim().max(5000).optional(),
  preferredContact: z.enum(["phone", "email"]),
  consent: z.literal(true),
  website: z.string().max(0).optional(),
}).superRefine((quote, context) => {
  if (!quote[quote.preferredContact]) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: [quote.preferredContact],
      message: quote.preferredContact === "phone" ? "Enter a phone number." : "Enter an email address.",
    });
  }
});
export type QuoteInput = z.infer<typeof quoteSchema>;
