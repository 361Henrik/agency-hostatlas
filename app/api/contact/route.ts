import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, message } = body

    // Basic server-side validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: "The Host Atlas <onboarding@resend.dev>",
      to: "connect@hostatlas.guide",
      replyTo: email,
      subject: `New contact from ${name} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1C2B1E;">
          <div style="border-bottom: 2px solid #C9A962; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="margin: 0; font-size: 20px; color: #1F3528;">New enquiry via The Host Atlas</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(28,43,30,0.5); width: 100px;">Name</td>
              <td style="padding: 8px 0; font-size: 16px; color: #1C2B1E;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(28,43,30,0.5);">Email</td>
              <td style="padding: 8px 0; font-size: 16px;"><a href="mailto:${email}" style="color: #C9A962;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(28,43,30,0.5);">Company</td>
              <td style="padding: 8px 0; font-size: 16px; color: #1C2B1E;">${company}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(28,43,30,0.5); vertical-align: top;">Message</td>
              <td style="padding: 8px 0; font-size: 16px; color: #1C2B1E; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(201,169,98,0.3); font-size: 12px; color: rgba(28,43,30,0.4);">
            Submitted via hostatlas.guide — reply directly to this email to reach ${name}.
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("[v0] Contact route error:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    )
  }
}
