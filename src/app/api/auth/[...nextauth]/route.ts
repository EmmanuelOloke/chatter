import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToMongoDB } from '../../../../../lib/mongodb';
import User from '../../../../../models/user';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await connectToMongoDB().catch((err) => {
          console.log('cannot connect to database');
          throw new Error(err);
        });

        const user = await User.findOne({ email })
          .select('+password')
          .catch((err) => console.log(err));

        if (!user) throw Error('Email or Password Invalid');

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) throw Error('Email or Password Invalid');

        return {
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          email: user.email,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
      }
      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
