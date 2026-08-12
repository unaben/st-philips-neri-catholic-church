import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { sendResendEmail } from "@/components/forms/shared/resendSend";
import { RCIAApplicationFormData } from "@/components/forms/RCIAApplication/RCIAApplication.types";
import { validateRCIAApplication } from "@/components/forms/RCIAApplication/RCIAApplication.utils";
import { hasErrors } from "@/components/forms/shared/validation";
import {
  renderCallout,
  renderDetailRow,
  renderDetailTable,
  renderEmailShell,
} from "@/components/forms/shared/emailTemplate";
import { generateReferenceId } from "@/components/forms/shared/submissionId";

// ── TODO: replace with verified domain sender before going live ──────────────
// Once you verify a domain in Resend, set FROM_EMAIL in .env to something like
// "St. Philip Neri <noreply@yourdomain.com>". Resend's shared sandbox domain
// (onboarding@resend.dev) can only send to the account owner's own inbox.
// const FROM_ADDRESS = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';
const FROM_ADDRESS = "onboarding@resend.dev";

// ── TODO: once a domain is verified, PARISH_EMAIL is the real inbox to use ───
// Until then, mail can only land in NEXT_PUBLIC_DEV_EMAIL (the Resend account
// owner's inbox), so that's the fallback here.
// const PARISH_EMAIL =
//   process.env.PARISH_EMAIL ?? process.env.NEXT_PUBLIC_DEV_EMAIL ?? 'stphilip.smethwick@rcaob.org.uk';
const PARISH_EMAIL = "unaben@yahoo.com";

const ACCENT = "#7a1f2b";

export async function POST(req: NextRequest) {
  const body: RCIAApplicationFormData = await req.json();

  // Re-validate server-side - never trust the client alone
  const errors = validateRCIAApplication(body);
  if (hasErrors(errors)) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  const fullName = [body.firstName, body.surname].filter(Boolean).join(" ");

  // A short reference built from this submission's own phone/postcode plus
  // a random suffix - shown back to the applicant and included in both
  // emails, so a specific application can be found again quickly.
  const referenceId = generateReferenceId({
    phone: body.phoneNumber,
    address: body.address,
  });

  const resend = new Resend(process.env.RESEND_API_KEY);

  // 1. Confirmation to the applicant.
  // Best-effort: in Resend's sandbox mode this will fail for anyone other
  // than the account owner's own inbox (unaben@yahoo.com), since no domain
  // is verified yet. That's expected right now, so we log and move on
  // instead of failing the whole submission over it.
  try {
    await sendResendEmail(
      resend,
      {
        from: FROM_ADDRESS,
        to: body.email,
        subject:
          "Your RCIA Programme Application — St. Philip Neri Catholic Church",
        html: renderEmailShell({
          subtitle: "RCIA Programme 2025/2026",
          accentColor: ACCENT,
          bodyHtml: `
          <h2 style="color:${ACCENT};margin-top:0;">Dear ${body.knownAs || body.firstName},</h2>
          <p>Thank you for applying to the RCIA (Rite of Christian Initiation for Adults) Programme. Your application has been received.</p>
          <p>A member of our RCIA team will be in touch shortly with next steps.</p>
          ${renderCallout(
            `<p style="margin:0 0 8px;font-size:13px;color:#6b6255;text-transform:uppercase;letter-spacing:1px;">Your application</p>
             ${renderDetailTable(
               [
                 renderDetailRow("Full name", fullName),
                 renderDetailRow("Which parish", body.whichParish),
                 renderDetailRow("Which Mass", body.whichMass),
                 renderDetailRow("Email", body.email),
                 renderDetailRow("Reference", referenceId),
               ].join("")
             )}`,
            ACCENT
          )}
          <p style="font-size:13px;color:#6b6255;">If you did not submit this application, please contact us immediately.</p>
        `,
        }),
      },
      "rcia-application:confirmation"
    );
  } catch (err) {
    console.error(
      "[rcia-application] confirmation email failed (non-fatal, likely Resend sandbox restriction):",
      err
    );
  }

  // 2. Full application to the parish office. This one matters — if it
  // fails, the parish never sees the application, so it's still a hard error.
  try {
    await sendResendEmail(
      resend,
      {
        from: FROM_ADDRESS,
        to: PARISH_EMAIL,
        subject: `New RCIA Programme Application — ${fullName}`,
        html: renderEmailShell({
          accentColor: ACCENT,
          bodyHtml: `
          <h2 style="color:${ACCENT};margin-top:0;">New RCIA Programme Application (2025/2026)</h2>

          <h3 style="border-bottom:2px solid #e8ddce;padding-bottom:6px;">Personal details</h3>
          ${renderDetailTable(
            [
              renderDetailRow("Reference", referenceId),
              renderDetailRow("Name", fullName),
              renderDetailRow("Known as", body.knownAs),
              renderDetailRow("Gender", body.gender),
              renderDetailRow("Date of birth", body.dateOfBirth),
              renderDetailRow("Marital status", body.maritalStatus),
              renderDetailRow("First marriage", body.isFirstMarriage),
            ].join("")
          )}

          <h3 style="border-bottom:2px solid #e8ddce;padding-bottom:6px;margin-top:24px;">Sacraments</h3>
          ${renderDetailTable(
            [
              renderDetailRow("Baptised", body.isBaptised),
              renderDetailRow("Date of baptism", body.dateOfBaptism),
              renderDetailRow("Place of baptism", body.placeOfBaptism),
              renderDetailRow("Religion", body.religion),
              renderDetailRow(
                "Received First Holy Communion",
                body.receivedFirstHolyCommunion
              ),
              renderDetailRow(
                "Date of First Holy Communion",
                body.dateOfFirstHolyCommunion
              ),
              renderDetailRow(
                "Place of First Holy Communion",
                body.placeOfFirstHolyCommunion
              ),
            ].join("")
          )}

          <h3 style="border-bottom:2px solid #e8ddce;padding-bottom:6px;margin-top:24px;">Contact details</h3>
          ${renderDetailTable(
            [
              renderDetailRow("Address", body.address),
              renderDetailRow("Phone", body.phoneNumber),
              renderDetailRow("Email", body.email),
              renderDetailRow(
                "Which parish attended regularly",
                body.whichParish
              ),
              renderDetailRow("Which Mass", body.whichMass),
            ].join("")
          )}

          <h3 style="border-bottom:2px solid #e8ddce;padding-bottom:6px;margin-top:24px;">Petition to be admitted into the Full Communion of the Catholic Church</h3>
          ${renderDetailTable(
            [
              renderDetailRow("Catechumen / Candidate", body.catechumenName),
              renderDetailRow("Date", body.catechumenDate),
              renderDetailRow("Sponsor", body.sponsorName),
              renderDetailRow("Sponsor date", body.sponsorDate),
            ].join("")
          )}

          <p style="font-size:12px;color:#8a8375;margin-top:24px;">Priest sign-off is completed in person at the parish office.</p>
          <p style="font-size:12px;color:#8a8375;">Submitted: ${new Date().toLocaleString("en-GB")}</p>
        `,
        }),
      },
      "rcia-application:notification"
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[rcia-application] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send this application." },
      { status: 500 }
    );
  }
}
