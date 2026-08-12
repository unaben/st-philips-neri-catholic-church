import { sanitizeRichText } from "@/app/lib/sanitize";
import { announcementStore } from "@/app/lib/storage";
import { validateAnnouncementInput } from "@/app/lib/validateAnnouncementInput";
import { NextResponse } from "next/server";

export async function GET() {
  const announcements = await announcementStore.getAll();
  return NextResponse.json({ announcements });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const result = validateAnnouncementInput(body as Record<string, unknown>);
  if (!result.valid || !result.data) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  const announcement = await announcementStore.create({
    title: result.data.title,
    plainText: result.data.plainText,
    richTextHtml: sanitizeRichText(result.data.richTextHtml),
  });

  return NextResponse.json({ announcement }, { status: 201 });
}
