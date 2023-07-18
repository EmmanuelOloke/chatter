import User from '../../../../../../models/user';
import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '../../../../../../lib/mongodb';

interface NewUserRequest {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
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

  await connectToMongoDB();

  const { firstName, lastName, role, email, password } = body;

  const userExists = await User.findOne({ email });

  if (userExists)
    return NextResponse.json({ error: 'A user with this email already exists' }, { status: 409 });

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
