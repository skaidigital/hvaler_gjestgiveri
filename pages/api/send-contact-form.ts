import { sendContactFormNotification } from "@/src/features/email/actions/send-contact-form-notification";
import type { NextApiRequest, NextApiResponse } from "next";

const test = false;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (test) {
    return res.status(200).json({ success: true, data: "Test" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;
    // Optionally validate data here

    // Call your server function
    const response = await sendContactFormNotification(data);

    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Unknown error" });
  }
}
