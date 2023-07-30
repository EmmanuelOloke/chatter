import User from '../../../../../../models/user';
import { connectToMongoDB } from '../../../../../../lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  await connectToMongoDB();

  const id = context.params.id;

  if (request.method !== 'GET')
    return NextResponse.json({ error: 'Method is not allowed' }, { status: 405 });

  const user = await User.findById(id);

  return NextResponse.json(user);
}
