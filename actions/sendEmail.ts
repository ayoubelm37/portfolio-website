"use server"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"

// Add validation for the API key
const resendApiKey = process.env.RESEND_API_KEY

if (!resendApiKey) {
  throw new Error("RESEND_API_KEY environment variable is not set. Please add it to your .env.local file.")
}

const resend = new Resend(resendApiKey)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string
  const message = formData.get("message") as string
  const subject = formData.get("subject") as string

  // Validate required fields
  if (!senderEmail || !message) {
    return {
      error: "Missing required fields",
    }
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["your-email@example.com"], // Replace with your email
      subject: subject || "New Contact Form Message",
      reply_to: senderEmail,
      react: ContactFormEmail({
        message: message,
        senderEmail: senderEmail,
      }),
    })

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      error: "Failed to send email",
    }
  }
}
