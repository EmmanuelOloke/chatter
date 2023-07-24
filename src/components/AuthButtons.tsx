'use client';

import { Button, Image } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import NextLink from 'next/link';

type ButtonText = {
  text: string;
};

export const GoogleSignInButton = ({ text }: ButtonText) => {
  const handleClick = () => {
    signIn('google');
  };

  return (
    <Button
      onClick={handleClick}
      leftIcon={<FcGoogle />}
      variant="outline"
      size="lg"
      width="100%"
      height="3rem"
      fontWeight="bold"
      backgroundColor="#e9effe"
    >
      {text}
    </Button>
  );
};

export const LinkedInSignInButton = ({ text }: ButtonText) => {
  const handleClick = () => {
    signIn('linkedin');
  };

  return (
    <Button
      onClick={handleClick}
      leftIcon={
        <Image src={'./assets/icons/linkedin-icon.png'} alt="linkedin icon" width="1.2rem" />
      }
      variant="outline"
      size="lg"
      width="100%"
      height="3rem"
      fontWeight="bold"
      backgroundColor="#e9effe"
    >
      {text}
    </Button>
  );
};
