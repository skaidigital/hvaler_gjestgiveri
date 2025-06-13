import { EMAILS } from "@/src/features/email/email-constants";
import ContactFormTemplate from "@/src/features/email/emails/contact-form-template";
import { ContactFormSchema } from "@/src/features/email/schema/contact-form-schema";
import type { ReactElement } from "react";
import { Resend } from "resend";

const isProduction = process.env.NODE_ENV === "production";

export async function sendContactFormNotification({
  name,
  work,
  email,
  phone,
  message,
}: ContactFormSchema) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const toAddress = isProduction ? EMAILS.HG.EMAIL : EMAILS.SKAI.EMAIL;

    const { error } = await resend.emails.send({
      from: EMAILS.SKAI.FROM_ADDRESS,
      replyTo: email,
      to: toAddress,
      subject: `Ny kontaktskjema fra ${name}`,
      react: ContactFormTemplate({
        name,
        work,
        email,
        phone,
        message,
      }) as ReactElement<unknown>,
    });

    if (error) {
      console.error(error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
