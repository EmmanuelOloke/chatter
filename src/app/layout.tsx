'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import AuthProvider from '@/components/AuthProvider';
import { UserContextProvider } from '@/contexts/UserContext';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Chatter: A Haven for Text-Based Content',
//   description: 'Unleash the power of words, Connect with Like-minded Readers and Writers',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <CacheProvider>
          <ChakraProvider>
            <AuthProvider>
              <UserContextProvider>
                {children} <Analytics />
              </UserContextProvider>
            </AuthProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
