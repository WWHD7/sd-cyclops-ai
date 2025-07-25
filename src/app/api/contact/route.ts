import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
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

    // Try to connect to database if configured
    const db = await dbConnect();
    
    // Store in database if available
    if (db) {
      try {
        await Contact.create({
          name,
          email,
          company,
          message,
        });
      } catch (error) {
        console.error('Database storage error:', error);
        // Continue execution even if database storage fails
      }
    }

    // If email configuration is available, send emails
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD && process.env.NOTIFICATION_EMAIL) {
      try {
        // Send email notification
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.NOTIFICATION_EMAIL,
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
      } catch (error) {
        console.error('Email sending error:', error);
        // Continue execution even if email sending fails
      }
    }

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 