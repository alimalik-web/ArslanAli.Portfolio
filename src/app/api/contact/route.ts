import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key. If not present, it will log instead (for dev purposes).
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (resend) {
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "arslana084@gmail.com", // Replace with your actual receiving email
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
    } else {
      console.log("No RESEND_API_KEY found. Mocking email send:");
      console.log({ name, email, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
