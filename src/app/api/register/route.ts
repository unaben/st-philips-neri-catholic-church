import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { RegistrationFormData } from "@/components/RegistrationForm/RegistrationForm.types";
import {
  validateRegistrationForm,
  hasErrors,
} from "@/components/RegistrationForm/RegistrationForm.utils";

// const PARISH_EMAIL = process.env.NEXT_PUBLIC_DEV_EMAIL ?? "unaben@yahoo.com";
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
  const body: RegistrationFormData = await req.json();

  // Re-validate server-side — never trust the client alone
  const errors = validateRegistrationForm(body);
  if (hasErrors(errors)) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  const fullName = [body.firstName, body.middleName, body.lastName]
    .filter(Boolean)
    .join(" ");
  const dob = new Date(body.dateOfBirth).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  try {
    // 1. Confirmation to the registrant
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: body.email,
      subject: "Your Parish Registration — St. Philip Neri Catholic Church",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2c2c2c;">
          <div style="background: #c8823a; padding: 24px 32px;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; letter-spacing: 1px;">
              ST. PHILIP NERI CATHOLIC CHURCH
            </h1>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 13px;">
              Smethwick, Birmingham
            </p>
          </div>
          <div style="padding: 32px; background: #fdf5ec;">
            <h2 style="color: #c8823a; margin-top: 0;">Dear ${
              body.firstName
            },</h2>
            <p>
              Thank you for registering with St. Philip Neri Catholic Church.
              We are delighted to welcome you to our parish family.
            </p>
            <p>
              A member of our team will be in touch shortly to complete your
              registration and welcome you personally.
            </p>
            <div style="background: #fff; border-left: 4px solid #c8823a; padding: 16px 20px; margin: 24px 0; border-radius: 4px;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #6b6b6b; text-transform: uppercase; letter-spacing: 1px;">Your registration details</p>
              <table style="font-size: 14px; border-collapse: collapse; width: 100%;">
                <tr><td style="padding: 4px 0; color: #6b6b6b; width: 140px;">Full name</td><td><strong>${fullName}</strong></td></tr>
                <tr><td style="padding: 4px 0; color: #6b6b6b;">Date of birth</td><td>${dob}</td></tr>
                <tr><td style="padding: 4px 0; color: #6b6b6b;">Email</td><td>${
                  body.email
                }</td></tr>
                <tr><td style="padding: 4px 0; color: #6b6b6b;">Phone</td><td>${
                  body.phone
                }</td></tr>
                <tr><td style="padding: 4px 0; color: #6b6b6b;">Address</td><td>${
                  body.addressLine1
                }${
        body.addressLine2 ? ", " + body.addressLine2 : ""
      }, ${body.postCode.toUpperCase()}</td></tr>
                <tr><td style="padding: 4px 0; color: #6b6b6b;">Already Catholic</td><td>${
                  body.alreadyCatholic ? "Yes" : "No"
                }</td></tr>
                ${
                  body.previousParish
                    ? `<tr><td style="padding: 4px 0; color: #6b6b6b;">Previous parish</td><td>${body.previousParish}</td></tr>`
                    : ""
                }
              </table>
            </div>
            <p style="font-size: 13px; color: #6b6b6b;">
              If you did not submit this registration, please contact us immediately.<br/><br/>
              <strong>St. Philip Neri Catholic Church</strong><br/>
              Messenger Road, Smethwick, Birmingham B66 3DU<br/>
              Tel: 0121 558 1065
            </p>
          </div>
        </div>
      `,
    });

    // 2. Full registration details to the parish
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: PARISH_EMAIL,
      subject: `New Parish Registration — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
          <h2 style="color: #c8823a;">New Parish Registration</h2>
          <p>A new registration has been submitted via the website.</p>

          <h3 style="border-bottom: 2px solid #f5d9bf; padding-bottom: 6px;">Personal Details</h3>
          <table style="font-size: 14px; border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 0; color: #6b6b6b; width: 180px;">First name</td><td>${
              body.firstName
            }</td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">Middle name</td><td>${
              body.middleName || "—"
            }</td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">Last name</td><td>${
              body.lastName
            }</td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">Date of birth</td><td>${dob}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">Nationality</td><td>${
              body.nationality
            }</td></tr>
          </table>

          <h3 style="border-bottom: 2px solid #f5d9bf; padding-bottom: 6px; margin-top: 24px;">Contact Details</h3>
          <table style="font-size: 14px; border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 0; color: #6b6b6b; width: 180px;">Email</td><td><a href="mailto:${
              body.email
            }">${body.email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">Phone</td><td>${
              body.phone
            }</td></tr>
          </table>

          <h3 style="border-bottom: 2px solid #f5d9bf; padding-bottom: 6px; margin-top: 24px;">Address</h3>
          <table style="font-size: 14px; border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 0; color: #6b6b6b; width: 180px;">Line 1</td><td>${
              body.addressLine1
            }</td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">Line 2</td><td>${
              body.addressLine2 || "—"
            }</td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">Post code</td><td>${body.postCode.toUpperCase()}</td></tr>
          </table>

          <h3 style="border-bottom: 2px solid #f5d9bf; padding-bottom: 6px; margin-top: 24px;">Parish Information</h3>
          <table style="font-size: 14px; border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 0; color: #6b6b6b; width: 180px;">Already Catholic</td><td>${
              body.alreadyCatholic ? "Yes" : "No"
            }</td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">Previous parish</td><td>${
              body.previousParish || "—"
            }</td></tr>
            <tr><td style="padding: 6px 0; color: #6b6b6b;">How they heard</td><td>${
              body.heardAboutUs
            }</td></tr>
          </table>

          <h3 style="border-bottom: 2px solid #f5d9bf; padding-bottom: 6px; margin-top: 24px;">Reason for Registering</h3>
          <p style="font-size: 14px; background: #fdf5ec; padding: 12px 16px; border-radius: 4px;">
            ${body.reasonForRegistering}
          </p>

          <p style="font-size: 12px; color: #999; margin-top: 32px;">
            Submitted: ${new Date().toLocaleString("en-GB")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[register] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send registration email." },
      { status: 500 }
    );
  }
}
