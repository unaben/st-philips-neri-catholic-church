import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/components/Contact/contact.types";
import {
  validateContactForm,
  hasContactErrors,
} from "@/components/Contact/contactValidation";

// const PARISH_EMAIL =
//   process.env.PARISH_EMAIL ?? "stphilip.smethwick@rcaob.org.uk";
// const FROM_ADDRESS =
//   process.env.FROM_EMAIL ?? "St. Philip Neri <onboarding@resend.dev>";

// ── TODO: replace with verified domain sender before going live ──────────────
// Once you verify a domain in Resend dashboard, update FROM_ADDRESS to:
// "St. Philip Neri <noreply@yourdomain.com>"
const FROM_ADDRESS = "onboarding@resend.dev";

// ── TODO: restore to parish email before going live ──────────────────────────
// const PARISH_EMAIL = process.env.PARISH_EMAIL ?? "stphilip.smethwick@rcaob.org.uk";
const PARISH_EMAIL = "unaben@yahoo.com";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body: ContactFormData = await req.json();

  const errors = validateContactForm(body);
  if (hasContactErrors(errors)) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  try {
    // 1. Auto-reply to the sender
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: body.email,
      subject: "Thank you for contacting St. Philip Neri Catholic Church",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2c2c2c;">
          <div style="background: #1a3a6b; padding: 24px 32px;">
            <h1 style="color: #fff; margin: 0; font-size: 20px; letter-spacing: 1px;">
              ST. PHILIP NERI CATHOLIC CHURCH
            </h1>
            <p style="color: rgba(255,255,255,0.75); margin: 4px 0 0; font-size: 13px;">
              Smethwick, Birmingham
            </p>
          </div>
          <div style="padding: 32px; background: #f8faff;">
            <h2 style="color: #1a3a6b; margin-top: 0;">Dear ${body.fullName},</h2>
            <p>Thank you for getting in touch with us. We have received your message and a member of our team will respond as soon as possible.</p>
            <p>May God bless you.</p>
            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #d0ddf2; font-size: 13px; color: #5a6a7a;">
              <strong>St. Philip Neri Catholic Church</strong><br/>
              Messenger Road, Smethwick, Birmingham B66 3DU<br/>
              Tel: 0121 558 1065
            </div>
          </div>
        </div>
      `,
    });

    // 2. Notification to the parish with full message
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: PARISH_EMAIL,
      subject: `New Contact Form Message — ${body.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #2c2c2c;">
          <h2 style="color: #1a3a6b;">New Contact Form Submission</h2>
          <table style="font-size: 14px; border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 0; color: #5a6a7a; width: 120px;">Name</td><td><strong>${
              body.fullName
            }</strong></td></tr>
            <tr><td style="padding: 6px 0; color: #5a6a7a;">Email</td><td><a href="mailto:${
              body.email
            }">${body.email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #5a6a7a;">Phone</td><td>${
              body.phone || "—"
            }</td></tr>
          </table>
          <h3 style="color: #1a3a6b; margin-top: 24px; border-top: 2px solid #e8eef8; padding-top: 16px;">Message</h3>
          <p style="background: #f8faff; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.7;">
            ${body.message.replace(/\n/g, "<br/>")}
          </p>
          <p style="font-size: 12px; color: #999; margin-top: 24px;">
            Submitted: ${new Date().toLocaleString("en-GB")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
