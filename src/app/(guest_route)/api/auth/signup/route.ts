import User from '../../../../../../models/user';
import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '../../../../../../lib/mongodb';

interface NewUserRequest {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface NewUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export async function POST(req: NextRequest, res: NextResponse): Promise<NewResponse> {
  const body = (await req.json()) as NewUserRequest;

  if (Object.keys(body).length === 0)
    return NextResponse.json({ error: 'Data is missing' }, { status: 400 });

  await connectToMongoDB();

  const { firstName, lastName, role, email, password, confirmPassword } = body;

  const userExists = await User.findOne({ email });

  if (userExists)
    return NextResponse.json({ error: 'A user with this email already exist' }, { status: 409 });

  if (password.length < 8)
    return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 409 });

  if (password !== confirmPassword)
    return NextResponse.json(
      { error: 'Password and Confirm Password must match' },
      { status: 409 }
    );

  const user = await User.create({ ...body });

  return NextResponse.json({
    user: {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
    },
  });
}
