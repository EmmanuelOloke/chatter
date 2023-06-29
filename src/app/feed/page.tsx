'use client';

import FeedContainer from '@/components/FeedContainer';
import FeedNavBar from '@/components/FeedNavBar';
import SideBar from '@/components/SideBar';
import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

const Feed = () => {
  return (
    <div>
      <HStack>
        <HStack height="100vh" alignItems="flex-start" gap={0} overflowY="auto">
          <SideBar />

          <VStack w="100vw" alignItems="flex-start">
            <FeedNavBar />

            <Box ml="1rem" mt="1rem">
              <FeedContainer />
            </Box>
          </VStack>
        </HStack>
      </HStack>
    </div>
  );
};

export default Feed;
