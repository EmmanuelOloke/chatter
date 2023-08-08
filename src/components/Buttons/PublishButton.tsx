import { Button } from '@chakra-ui/react';
import { MouseEvent } from 'react';

type PublishButtonProps = {
  text: string;
  handleClick: () => void;
  disabled: boolean;
};

const PublishButton = ({ text, handleClick, disabled }: PublishButtonProps) => {
  return (
    <Button
      onClick={handleClick}
      variant="solid"
      width="12rem"
      height="3.5rem"
      backgroundColor="#543EE0"
      color="#FFF"
      size="lg"
      _hover={{ backgroundColor: '#7A67F4' }}
      isDisabled={disabled}
    >
      {text}
    </Button>
  );
};

export default PublishButton;
