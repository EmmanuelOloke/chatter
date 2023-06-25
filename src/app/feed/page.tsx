'use client';

import FeedContainer from '@/components/FeedContainer';
import FeedNavBar from '@/components/FeedNavBar';
import SideBar from '@/components/SideBar';
import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

const Feed = () => {
  return (
    <div>
      <HStack h="100%">
        <HStack alignItems="flex-start" gap={0}>
          {/* <Box pos="sticky" top="0"> */}
          <SideBar />
          {/* </Box> */}

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
