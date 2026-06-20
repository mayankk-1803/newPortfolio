import { NextResponse } from "next/server";
import { Resend } from "resend";

const contactEmail = process.env.CONTACT_EMAIL || "mayankmathur183@gmail.com";
const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Form <onboarding@resend.dev>";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const senderEmail = String(email).trim();
    if (!emailPattern.test(senderEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY for contact form delivery.");
      return NextResponse.json(
        { error: "Email delivery is not configured yet." },
        { status: 500 }
      );
    }

    const plainSubject = String(subject || "General Inquiry").trim();
    const safeName = escapeHtml(String(name).trim());
    const safeEmail = escapeHtml(senderEmail);
    const safeSubject = escapeHtml(plainSubject);
    const safeMessage = escapeHtml(String(message).trim());

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: senderEmail,
      subject: `[Portfolio Inquiry] ${plainSubject}`,
      html: `
        <h3>New Portfolio Inquiry</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 8px;">${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend delivery failed:", error);
      return NextResponse.json(
        { error: "Failed sending message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("API Error in Contact endpoint:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}