import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD, // Use App Password for Gmail
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL, // Where you want to receive notifications
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting SD Cyclops AI',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We've received your message and will get back to you shortly.</p>
        <p>Best regards,<br>SD Cyclops AI Team</p>
      `,
    });

    // Store in database (we'll implement this next)
    // await prisma.contact.create({ data: { name, email, company, message } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 