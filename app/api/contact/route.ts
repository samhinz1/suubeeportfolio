import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, turnstileToken } = body;

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, message: 'Turnstile verification required' },
        { status: 400 }
      );
    }

    // Verify with Cloudflare Turnstile
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      console.error('TURNSTILE_SECRET_KEY is not set');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const verifyResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: secretKey,
          response: turnstileToken,
        }),
      }
    );

    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success) {
      return NextResponse.json(
        { success: false, message: 'Turnstile verification failed' },
        { status: 400 }
      );
    }

    // If verification passes, submit to FormSubmit.co
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message || 'No message provided');
    formData.append('_subject', 'New contact form submission from Suubee');
    formData.append('_captcha', 'false');

    const formSubmitResponse = await fetch(
      `https://formsubmit.co/ajax/${process.env.CONTACT_EMAIL || 'info@suubee.com'}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const formSubmitResult = await formSubmitResponse.json();

    if (formSubmitResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully',
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred' },
      { status: 500 }
    );
  }
}

