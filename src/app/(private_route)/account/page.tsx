'use client';

import AccountContainer from '@/components/AccountContainer';
import FeedNavBar from '@/components/FeedNavBar';
import SideBar from '@/components/SideBar';
import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

const Account = () => {
  return (
    <HStack>
      <HStack height="100vh" alignItems="flex-start" gap={0} overflowY="auto">
        <SideBar />

        <VStack w="100vw" alignItems="flex-start">
          <FeedNavBar />

          <Box ml="1rem" mt="1rem">
            <AccountContainer />
          </Box>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default Account;
