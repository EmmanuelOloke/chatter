import { CopyIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React, { MouseEvent } from 'react';

type CopyButtonProps = {
  text: string;
  icon: React.ReactElement;
  handleClick: (event: MouseEvent) => void;
};

export const CopyButton = ({ text, icon, handleClick }: CopyButtonProps) => {
  return (
    <Button
      onClick={handleClick}
      size="md"
      aria-label="Upload Post Image"
      leftIcon={icon}
      variant="outline"
      color="#543EE0"
      colorScheme="#543EE0"
      _hover={{ backgroundColor: '#EBF1FF' }}
    >
      {text}
    </Button>
  );
};
