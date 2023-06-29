import React from 'react';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

import PenSvg from './SvgComponents/PenSvg';

import { ButtonComponentProps } from '@/types/button-types';

const PrimaryButton = ({ text, link, width, height, hasIcon, disabled }: ButtonComponentProps) => {
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
        leftIcon={hasIcon ? <PenSvg color="white" /> : <></>}
        isDisabled={disabled}
      >
        {text}
      </Button>
    </NextLink>
  );
};

export default PrimaryButton;
