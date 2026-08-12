import { escapeHtml } from "./validation";

interface EmailShellOptions {
  subtitle?: string;
  bodyHtml: string;
  accentColor?: string;
}

const DEFAULT_ACCENT = "#7a1f2b";
const PARISH_ADDRESS_HTML =
  "Messenger Road, Smethwick, Birmingham B66 3DU<br/>Tel: 0121 558 1065";

export function renderEmailShell({
  subtitle,
  bodyHtml,
  accentColor = DEFAULT_ACCENT,
}: EmailShellOptions): string {
  return `
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2c2c2c;">
      <div style="background: ${accentColor}; padding: 24px 32px;">
        <h1 style="color: #fff; margin: 0; font-size: 20px; letter-spacing: 1px;">
          ST. PHILIP NERI CATHOLIC CHURCH
        </h1>
        ${
          subtitle
            ? `<p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">${escapeHtml(
                subtitle
              )}</p>`
            : ""
        }
      </div>
      <div style="padding: 32px; background: #fdf6ef;">
        ${bodyHtml}
        <p style="font-size: 12px; color: #8a8375; margin-top: 32px; border-top: 1px solid #e8ddce; padding-top: 16px;">
          <strong>St. Philip Neri Catholic Church</strong><br/>
          ${PARISH_ADDRESS_HTML}
        </p>
      </div>
    </div>
  `;
}

/** One label/value row for a detail table. Skips rendering entirely if value is empty. */
export function renderDetailRow(
  label: string,
  value: string | boolean
): string {
  const display = typeof value === "boolean" ? (value ? "Yes" : "No") : value;
  if (!display) return "";
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:#6b6255;width:180px;vertical-align:top;">${escapeHtml(
      label
    )}</td>
    <td style="padding:6px 0;">${escapeHtml(String(display)).replace(
      /\n/g,
      "<br/>"
    )}</td>
  </tr>`;
}

/** Wraps a set of renderDetailRow() strings in a table. */
export function renderDetailTable(rows: string): string {
  return `<table style="font-size:14px;border-collapse:collapse;width:100%;">${rows}</table>`;
}

export function renderCallout(
  innerHtml: string,
  accentColor = DEFAULT_ACCENT
): string {
  return `<div style="background:#fff;border-left:4px solid ${accentColor};padding:16px 20px;margin:24px 0;border-radius:4px;">${innerHtml}</div>`;
}
