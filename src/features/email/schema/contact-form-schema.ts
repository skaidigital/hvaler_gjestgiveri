import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1),
  work: z.string().min(1).optional().nullable(),
  email: z.string().email(),
  phone: z.string().min(1).optional().nullable(),
  message: z.string().min(1).optional().nullable(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
