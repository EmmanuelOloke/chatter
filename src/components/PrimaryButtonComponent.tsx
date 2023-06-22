import React from 'react';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

import { ButtonComponentProps } from '@/types/button-types';

const PrimaryButtonComponent = ({ text, link, width, height }: ButtonComponentProps) => {
  return (
    <NextLink href={link} passHref>
      <Button
        variant="solid"
        backgroundColor="#543EE0"
        color="#FFF"
        size="lg"
        width={width}
        height={height}
        _hover={{ backgroundColor: '#7A67F4' }}
      >
        {text}
      </Button>
    </NextLink>
  );
};

export default PrimaryButtonComponent;
