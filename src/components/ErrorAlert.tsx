import { WarningIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

type ErrorProps = {
  errorDescription: string;
};

const ErrorAlert = ({ errorDescription }: ErrorProps) => {
  return (
    <Box color="white" borderRadius={4} backgroundColor="#e53e3e" px={2} py={2}>
      <HStack gap={3}>
        <WarningIcon />
        <Text fontWeight="bold">{errorDescription}</Text>
      </HStack>
    </Box>
  );
};

export default ErrorAlert;
