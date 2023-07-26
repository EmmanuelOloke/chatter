import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      firstName: string;
      lastName: string;
      profileImage: string;
      email: string;
      id: string;
      role: string;
    };
  }
}
