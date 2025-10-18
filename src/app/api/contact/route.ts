import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { Resend } from 'resend';

// Initialize clients with environment variables
const client = new MongoClient(process.env.MONGODB_URI || '');
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // 1. Parse the incoming data
  const { name, email, message } = await request.json();

  // 2. Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  try {
    // 3. Connect to MongoDB and insert the data
    await client.connect();
    const db = client.db('c2_website_db'); // You can name your database anything
    const collection = db.collection('enquiries');
    await collection.insertOne({
      name,
      email,
      message,
      submittedAt: new Date(),
    });

    // 4. Send email notification using Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This is a required sandbox address from Resend
      to: 'YOUR_CLIENTS_EMAIL@example.com', // <-- IMPORTANT: Change this to your client's email address
      subject: `New Enquiry from ${name}`,
      html: `
        <p>You have received a new enquiry from your website:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    });

    // 5. Return a success response
    return NextResponse.json({ message: 'Enquiry submitted successfully!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  } finally {
    // Ensure the client is closed after the operation
    await client.close();
  }
}
