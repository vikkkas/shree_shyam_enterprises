import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  product: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await resend.emails.send({
      from: "Shree Shyam Enterprise <hello@update.shreeshyam-enterprise.com>",
      to: [process.env.CONTACT_EMAIL || "shreeshyam.enterprise22@gmail.com"],
      replyTo: data.email,
      subject: `New Enquiry from ${data.name} — Shree Shyam Enterprise`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; overflow: hidden; }
              .header { background: #0E1B2E; color: white; padding: 28px 24px; border-top: 3px solid #E05A1E; }
              .header h1 { margin: 0 0 4px; font-size: 20px; font-weight: 700; }
              .header p { margin: 0; color: #8BA3BF; font-size: 12px; }
              .accent { color: #E05A1E; }
              .body { padding: 28px 24px; }
              .field { margin-bottom: 18px; }
              .label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #8BA3BF; margin-bottom: 5px; }
              .value { font-size: 15px; color: #0E1B2E; font-weight: 500; }
              .value a { color: #E05A1E; text-decoration: none; }
              .divider { height: 1px; background: #eee; margin: 20px 0; }
              .message-box { background: #f4f1ec; padding: 16px; border-left: 3px solid #E05A1E; font-size: 14px; color: #333; line-height: 1.6; }
              .footer { background: #070F1A; color: #8BA3BF; padding: 16px 24px; font-size: 11px; text-align: center; }
              .badge { display: inline-block; background: #E05A1E; color: white; font-size: 10px; padding: 2px 8px; margin-left: 8px; vertical-align: middle; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Enquiry <span class="accent">Received</span></h1>
                <p>Shree Shyam Enterprise — Website Contact Form</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${data.company || "—"}</div>
                </div>
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Product of Interest</div>
                  <div class="value">${data.product || "—"}</div>
                </div>
                <div class="divider"></div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${data.message.replace(/\n/g, "<br/>")}</div>
                </div>
              </div>
              <div class="footer">
                Submitted via www.shreeshyam-enterprise.com &nbsp;·&nbsp; Reply directly to this email to respond to ${data.name}
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Resend error:", message);
    return NextResponse.json(
      { error: "Failed to send email.", detail: message },
      { status: 500 }
    );
  }
}
