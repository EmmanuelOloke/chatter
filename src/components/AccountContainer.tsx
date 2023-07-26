'use client';

import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import ProfileUpdateForm from './Forms/ProfileUpdateForm';

const AccountContainer = () => {
  return (
    <VStack border="1px solid #D0D0D0" width="70rem" gap={10} pb="3rem" mb="3rem">
      <HStack w="70%">
        <VStack gap="0.75rem" alignItems="flex-start">
          <Text fontSize="2rem" fontWeight="500" lineHeight="3rem" color="#111">
            Account
          </Text>
          <Text color="#626262" fontSize="1.125rem">
            Edit Profile
          </Text>
        </VStack>
      </HStack>

      <Box w="70%">
        <ProfileUpdateForm />
      </Box>
    </VStack>
  );
};

export default AccountContainer;
