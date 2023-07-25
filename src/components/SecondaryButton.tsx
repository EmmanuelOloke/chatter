import React from 'react';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

import { ButtonComponentProps } from '@/types/button-types';

const SecondaryButton = ({ text, link, width, height, tab }: ButtonComponentProps) => {
  return (
    <NextLink
      passHref
      href={{
        pathname: link,
        query: { tab },
      }}
    >
      <Button
        variant="outline"
        borderColor="#543EE0"
        color="#111"
        size="lg"
        width={width}
        height={height}
        _hover={{ backgroundColor: '#f0eeff' }}
      >
        {text}
      </Button>
    </NextLink>
  );
};

export default SecondaryButton;
