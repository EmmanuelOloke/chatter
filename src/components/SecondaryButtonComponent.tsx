import React from 'react';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

import { ButtonComponentProps } from '@/types/button-types';

const SecondaryButtonComponent = ({ text, link, width, height }: ButtonComponentProps) => {
  return (
    <NextLink href={link} passHref>
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

export default SecondaryButtonComponent;
