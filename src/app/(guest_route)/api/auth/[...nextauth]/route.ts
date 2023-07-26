import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import { connectToMongoDB } from '../../../../../../lib/mongodb';
import User from '../../../../../../models/user';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        // console.log({ req, credentials });
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await connectToMongoDB().catch((err) => {
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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt(params) {
      await connectToMongoDB();

      let user = await User.findOne({ email: params.token.email });

      if (!user) {
        user = await User.create({
          email: params.token.email,
          firstName: params.token.name!.split(' ')[0],
          lastName: params.token.name!.split(' ')[1],
          role: 'Writer',
          password: 'pleasechangeme',
        });
      }

      if (user) {
        params.token.role = user.role;
        params.token.id = user.id;
        params.token.email = user.email;
        params.token.firstName = user.firstName;
        params.token.lastName = user.lastName;
        params.token.picture = user.profileImage;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
        (session.user as { email: string }).email = token.email as string;
        (session.user as { firstName: string }).firstName = token.firstName as string;
        (session.user as { lastName: string }).lastName = token.lastName as string;
        (session.user as { profileImage: string }).profileImage = token.picture as string;
      }
      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
