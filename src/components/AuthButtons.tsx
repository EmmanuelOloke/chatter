'use client';

import { Button, Image } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

export const GoogleSignInButton = () => {
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
      Continue with Google
    </Button>
  );
};

export const LinkedInSignInButton = () => {
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
      Continue with LinkedIn
    </Button>
  );
};
