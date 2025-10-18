import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // This is a placeholder.
  // We will add logic here later to save data to MongoDB.
  
  return NextResponse.json(
    { message: "Success: Endpoint is active." }, 
    { status: 200 }
  );
}
