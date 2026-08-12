import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { sendResendEmail } from "@/components/forms/shared/resendSend";
import {
  HouseholdMember,
  ParishRecordFormData,
} from "@/components/forms/ParishRecord/ParishRecord.types";
import {
  hasParishRecordErrors,
  validateParishRecord,
} from "@/components/forms/ParishRecord/ParishRecord.utils";
import { escapeHtml } from "@/components/forms/shared/validation";
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
// const FROM_ADDRESS = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
const FROM_ADDRESS = "onboarding@resend.dev";

// ── TODO: once a domain is verified, PARISH_EMAIL is the real inbox to use ───
// Until then, mail can only land in NEXT_PUBLIC_DEV_EMAIL (the Resend account
// owner's inbox), so that's the fallback here.
// const PARISH_EMAIL =
//   process.env.PARISH_EMAIL ?? process.env.NEXT_PUBLIC_DEV_EMAIL ?? 'stphilip.smethwick@rcaob.org.uk';
const PARISH_EMAIL = "unaben@yahoo.com";

const ACCENT = "#7a1f2b";

function renderHouseholdTable(
  title: string,
  members: HouseholdMember[]
): string {
  const header = `<tr>
    <th style="text-align:left;padding:8px;border-bottom:2px solid #e8ddce;">Name</th>
    <th style="text-align:left;padding:8px;border-bottom:2px solid #e8ddce;">Date of birth</th>
    <th style="text-align:left;padding:8px;border-bottom:2px solid #e8ddce;">Relationship</th>
    <th style="text-align:left;padding:8px;border-bottom:2px solid #e8ddce;">Religion</th>
  </tr>`;

  const rows =
    members.length === 0
      ? '<tr><td colspan="4" style="padding:8px;color:#8a8375;">None listed</td></tr>'
      : members
          .map(
            (member) => `<tr>
              <td style="padding:8px;border-bottom:1px solid #efe6d9;">${escapeHtml(member.name)}</td>
              <td style="padding:8px;border-bottom:1px solid #efe6d9;">${escapeHtml(member.dateOfBirth)}</td>
              <td style="padding:8px;border-bottom:1px solid #efe6d9;">${escapeHtml(member.relationshipToYou)}</td>
              <td style="padding:8px;border-bottom:1px solid #efe6d9;">${escapeHtml(member.religion)}</td>
            </tr>`
          )
          .join("");

  return `
    <h3 style="color:${ACCENT};margin:24px 0 8px;border-top:2px solid #e8ddce;padding-top:16px;">${escapeHtml(
      title
    )} (${members.length})</h3>
    <table style="font-size:13px;border-collapse:collapse;width:100%;">${header}${rows}</table>
  `;
}

export async function POST(req: NextRequest) {
  const body: ParishRecordFormData = await req.json();

  // Re-validate server-side - never trust the client alone
  const errors = validateParishRecord(body);
  if (hasParishRecordErrors(errors)) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  // A short reference built from this submission's own phone/postcode
  // plus a random suffix - shown back to the person and included in both
  // emails, so a specific submission can be found again quickly.
  const referenceId = generateReferenceId({ phone: body.mobile || body.telNo, postcode: body.postcode });

  const resend = new Resend(process.env.RESEND_API_KEY);

  // 1. Confirmation to the person who submitted their details.
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
        subject: "Your Parish Record — St. Philip Neri Catholic Church",
        html: renderEmailShell({
          subtitle: "Smethwick, Birmingham",
          accentColor: ACCENT,
          bodyHtml: `
          <h2 style="color:${ACCENT};margin-top:0;">Dear ${escapeHtml(body.yourName)},</h2>
          <p>Thank you for sending us your details for St. Philip's parish records. Your submission has been received.</p>
          ${renderCallout(
            `<p style="margin:0 0 8px;font-size:13px;color:#6b6255;text-transform:uppercase;letter-spacing:1px;">What you told us</p>
             ${renderDetailTable(
               [
                 renderDetailRow(
                   "Address",
                   `${body.address}, ${body.postcode}`
                 ),
                 renderDetailRow("Email", body.email),
                 renderDetailRow(
                   "Other adults listed",
                   String(body.otherAdults.length)
                 ),
                 renderDetailRow(
                   "Children listed",
                   String(body.children.length)
                 ),
                 renderDetailRow("Reference", referenceId),
               ].join("")
             )}`,
            ACCENT
          )}
          <p style="font-size:13px;color:#6b6255;">If you did not submit this, please contact the parish office directly.</p>
        `,
        }),
      },
      "parish-record:confirmation"
    );
  } catch (err) {
    console.error(
      "[parish-record] confirmation email failed (non-fatal, likely Resend sandbox restriction):",
      err
    );
  }

  // 2. Full submission to the parish office. This one matters — if it
  // fails, the parish never sees the submission, so it's still a hard error.
  try {
    await sendResendEmail(
      resend,
      {
        from: FROM_ADDRESS,
        to: PARISH_EMAIL,
        subject: `New Parish Record — ${body.yourName}`,
        html: renderEmailShell({
          accentColor: ACCENT,
          bodyHtml: `
          <h2 style="color:${ACCENT};margin-top:0;">New Parish Record submission</h2>
          ${renderDetailTable(
            [
              renderDetailRow("Reference", referenceId),
              renderDetailRow("Name", body.yourName),
              renderDetailRow("Address", body.address),
              renderDetailRow("Postcode", body.postcode),
              renderDetailRow("Religion", body.religion),
              renderDetailRow("Tel", body.telNo),
              renderDetailRow("Mobile", body.mobile),
              renderDetailRow("Email", body.email),
              renderDetailRow("Nationality", body.nationality),
              renderDetailRow("First language", body.firstLanguage),
              renderDetailRow("Signed", body.signature),
              renderDetailRow("Date", body.date),
            ].join("")
          )}
          ${renderHouseholdTable("Other adults in household", body.otherAdults)}
          ${renderHouseholdTable("Children under 16", body.children)}
          <p style="font-size:12px;color:#8a8375;margin-top:16px;">
            This information is used by St. Philip's parish for administrative purposes only and is not shared with third parties.
          </p>
        `,
        }),
      },
      "parish-record:notification"
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[parish-record] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send this form." },
      { status: 500 }
    );
  }
}