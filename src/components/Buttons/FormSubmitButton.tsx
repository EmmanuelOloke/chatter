import { Button } from '@chakra-ui/react';

type FormSubmitButtonProps = {
  text: string;
  loading: boolean;
  loadingText: string;
};

const FormSubmitButton = ({ text, loading, loadingText }: FormSubmitButtonProps) => {
  return (
    <Button
      variant="solid"
      backgroundColor="#543EE0"
      color="#FFF"
      size="lg"
      width="100%"
      height="3rem"
      _hover={{ backgroundColor: '#7a67f4' }}
      type="submit"
      isLoading={loading}
      loadingText={loadingText}
    >
      {text}
    </Button>
  );
};

export default FormSubmitButton;
