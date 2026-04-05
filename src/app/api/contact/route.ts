import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Shree Shyam Enterprise Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "shreeshyam.enterprise22@gmail.com",
      subject: `New Enquiry from ${data.name} — Shree Shyam Enterprise`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 4px; overflow: hidden; }
              .header { background: #0E1B2E; color: white; padding: 24px; }
              .header h1 { margin: 0; font-size: 22px; }
              .header p { margin: 4px 0 0; color: #8BA3BF; font-size: 13px; }
              .accent { color: #E05A1E; }
              .body { padding: 24px; }
              .field { margin-bottom: 16px; }
              .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8BA3BF; margin-bottom: 4px; }
              .value { font-size: 15px; color: #0E1B2E; font-weight: 500; }
              .message-box { background: #f4f1ec; padding: 16px; border-left: 3px solid #E05A1E; margin-top: 8px; }
              .footer { background: #0E1B2E; color: #8BA3BF; padding: 16px 24px; font-size: 12px; text-align: center; }
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
                  <div class="value">${data.company || "Not provided"}</div>
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
                  <div class="value">${data.product || "Not specified"}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${data.message}</div>
                </div>
              </div>
              <div class="footer">
                This enquiry was submitted via www.shreeshyam-enterprise.com
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: "Enquiry sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
