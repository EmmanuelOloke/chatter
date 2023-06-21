'use client';

import FeedNavBar from '@/components/FeedNavBar';
import SideBar from '@/components/SideBar';
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Feed = () => {
  return (
    <div>
      <HStack h="100vh">
        <HStack alignItems="flex-start" gap={0}>
          <SideBar />

          <VStack>
            <FeedNavBar />
          </VStack>
        </HStack>
      </HStack>
    </div>
  );
};

export default Feed;
