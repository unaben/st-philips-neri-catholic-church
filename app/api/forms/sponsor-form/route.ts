import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { sendResendEmail } from "@/components/forms/shared/resendSend";
import { SponsorFormData } from "@/components/forms/SponsorForm/SponsorForm.types";
import {
  validateSponsorForm,
  SACRAMENT_LABEL,
} from "@/components/forms/SponsorForm/SponsorForm.utils";
import { hasErrors } from "@/components/forms/shared/validation";
import {
  renderCallout,
  renderDetailRow,
  renderDetailTable,
  renderEmailShell,
} from "@/components/forms/shared/emailTemplate";
import { registrationStore } from "@/lib/storage/registrationStore";
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

// This form serves both Confirmation and First Holy Communion - it's the
// same "Godparent/Sponsor" role and paperwork either way, just linked back
// to a different kind of enrolment.
export async function POST(req: NextRequest) {
  const body: SponsorFormData = await req.json();

  // Re-validate server-side - never trust the client alone
  const errors = validateSponsorForm(body);
  if (hasErrors(errors)) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  const sacrament = body.sacrament as "confirmation" | "firstHolyCommunion";
  const sacramentLabel = SACRAMENT_LABEL[sacrament];

  // If this submission came in via the enrolment flow (rather than someone
  // finding the form on its own), link it back to that enrolment for
  // reconciliation. An enrolmentId that doesn't match anything - or that
  // matches a different sacrament than the one selected - is treated as a
  // bad/stale link rather than silently accepted.
  if (body.enrolmentId) {
    const enrolment = await registrationStore.getEnrolmentById(
      body.enrolmentId
    );
    if (!enrolment || enrolment.sacrament !== sacrament) {
      return NextResponse.json(
        {
          error:
            "We couldn't match this to an enrolment. Please check the link and try again.",
        },
        { status: 404 }
      );
    }
  }

  const referenceId = generateReferenceId({
    phone: body.phoneNumberOfGodparent,
    address: body.godparentChurchAddress,
  });

  if (body.enrolmentId) {
    await registrationStore.createSponsorForm({
      id: referenceId,
      enrolmentId: body.enrolmentId,
      sacrament,
      sponsorName: body.sponsorName,
      source: "online",
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // 1. Confirmation to the Godparent/Sponsor.
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
        subject: `Godparent/Sponsor Form — St. Philip Neri Catholic Church`,
        html: renderEmailShell({
          subtitle: "Smethwick, Birmingham",
          accentColor: ACCENT,
          bodyHtml: `
          <h2 style="color:${ACCENT};margin-top:0;">Dear ${body.sponsorName},</h2>
          <p>Thank you for completing the Godparent/Sponsor form for <strong>${body.candidateName}</strong>'s ${sacramentLabel}. We have received it.</p>
          ${renderCallout(
            `<p style="margin:0 0 8px;font-size:13px;color:#6b6255;text-transform:uppercase;letter-spacing:1px;">Summary</p>
             ${renderDetailTable(
               [
                 renderDetailRow("Registration", sacramentLabel),
                 renderDetailRow("Candidate", body.candidateName),
                 renderDetailRow("Signed by", body.signature),
                 renderDetailRow("Reference", referenceId),
               ].join("")
             )}`,
            ACCENT
          )}
          <p style="font-size:13px;color:#6b6255;">If you did not submit this form, please contact the parish office directly.</p>
        `,
        }),
      },
      "sponsor-form:confirmation"
    );
  } catch (err) {
    console.error(
      "[sponsor-form] confirmation email failed (non-fatal, likely Resend sandbox restriction):",
      err
    );
  }

  // 2. Full form to the parish office. This one matters — if it fails, the
  // parish never sees the form, so it's still a hard error.
  try {
    await sendResendEmail(
      resend,
      {
        from: FROM_ADDRESS,
        to: PARISH_EMAIL,
        subject: `New Godparent/Sponsor Form (${sacramentLabel}) — ${body.candidateName}`,
        html: renderEmailShell({
          accentColor: ACCENT,
          bodyHtml: `
          <h2 style="color:${ACCENT};margin-top:0;">New Godparent/Sponsor Form</h2>
          ${renderDetailTable(
            [
              renderDetailRow("Reference", referenceId),
              renderDetailRow("Registration", sacramentLabel),
              renderDetailRow(
                "Enrolment reference",
                body.enrolmentId || "(submitted standalone)"
              ),
              renderDetailRow("Candidate", body.candidateName),
              renderDetailRow("Sponsor name", body.sponsorName),
              renderDetailRow("Sponsor email", body.email),
              renderDetailRow(
                "Meets eligibility requirements",
                body.confirmsEligibility
              ),
              renderDetailRow("Accepts the role", body.acceptsRole),
              renderDetailRow(
                "Godparent church address",
                body.godparentChurchAddress
              ),
              renderDetailRow(
                "Church telephone number",
                body.churchTelephoneNumber
              ),
              renderDetailRow(
                "Phone number of Godparent",
                body.phoneNumberOfGodparent
              ),
              renderDetailRow("Signed", body.signature),
              renderDetailRow("Date", body.date),
            ].join("")
          )}
          <p style="font-size:12px;color:#8a8375;margin-top:24px;">Submitted: ${new Date().toLocaleString("en-GB")}</p>
        `,
        }),
      },
      "sponsor-form:notification"
    );

    return NextResponse.json({ success: true, referenceId }, { status: 200 });
  } catch (err) {
    console.error("[sponsor-form] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send this form." },
      { status: 500 }
    );
  }
}
