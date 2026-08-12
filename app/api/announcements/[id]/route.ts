import { sanitizeRichText } from "@/app/lib/sanitize";
import { announcementStore } from "@/app/lib/storage";
import { validateAnnouncementInput } from "@/app/lib/validateAnnouncementInput";
import { NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const announcement = await announcementStore.getById(id);
  if (!announcement) {
    return NextResponse.json(
      { error: "Announcement not found." },
      { status: 404 }
    );
  }
  return NextResponse.json({ announcement });
}

export async function PUT(request: Request, { params }: RouteParams) {
  const { id } = await params;

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

  const updated = await announcementStore.update(id, {
    title: result.data.title,
    plainText: result.data.plainText,
    richTextHtml: sanitizeRichText(result.data.richTextHtml),
  });

  if (!updated) {
    return NextResponse.json(
      { error: "Announcement not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ announcement: updated });
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const removed = await announcementStore.remove(id);
  if (!removed) {
    return NextResponse.json(
      { error: "Announcement not found." },
      { status: 404 }
    );
  }
  return NextResponse.json({ success: true });
}