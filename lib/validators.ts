import { z } from "zod";
export const quoteSchema = z.object({ name: z.string().trim().min(1).max(100), phone: z.string().trim().min(7).max(30), email: z.string().trim().email().max(254), zip: z.string().trim().regex(/^\d{5}(?:-\d{4})?$/), service: z.string().trim().min(1).max(120), description: z.string().trim().min(1).max(5000), preferredContact: z.enum(["phone", "email"]), consent: z.literal(true), website: z.string().max(0).optional() });
export type QuoteInput = z.infer<typeof quoteSchema>;
