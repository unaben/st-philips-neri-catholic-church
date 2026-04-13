import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Onboarding <onboarding@resend.dev>", // replace in prod
      to: email,
      subject: "You're subscribed! 🙌",
      html: `
        <h2>Thanks for subscribing!</h2>
        <p>You'll be the first to hear about our latest updates and news.</p>
        <p>God bless you.</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
