import User from '../../../../../../models/user';
import { connectToMongoDB } from '../../../../../../lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import bycrypt from 'bcrypt';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  await connectToMongoDB();

  const id = context.params.id;

  if (request.method !== 'GET')
    return NextResponse.json({ error: 'Method is not allowed' }, { status: 405 });

  const user = await User.findById(id);

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, role, password } = body;

    await connectToMongoDB();

    const userId = context.params.id;

    const salt = await bycrypt.genSalt(12);
    const hashedPassword = await bycrypt.hash(password, salt);

    const filter = { _id: userId };
    const update = { $set: { firstName, lastName, email, role, password: hashedPassword } };

    const updated = await User.updateOne(filter, update);

    return NextResponse.json(
      { message: 'User details updated successfully', updated },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error updating your profile', error);
  }
}
