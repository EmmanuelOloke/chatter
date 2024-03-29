import { LoginUserProps } from '@/types/customTypes';
import { signIn } from 'next-auth/react';

export const loginUser = async ({ email, password }: LoginUserProps) => {
  const res = await signIn('credentials', { email, password, redirect: false });

  return res;
};
