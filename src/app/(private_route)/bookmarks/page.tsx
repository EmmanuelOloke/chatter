'use client';

import FeedNavBar from '@/components/FeedNavBar';
import SideBar from '@/components/SideBar';
import { HStack, Heading, VStack } from '@chakra-ui/react';

const Bookmarks = () => {
  return (
    <HStack>
      <HStack height="100vh" alignItems="flex-start" gap={0} overflowY="auto">
        <SideBar />

        <VStack w="100vw" alignItems="center">
          <FeedNavBar />

          <Heading>Bookmarks Here!</Heading>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default Bookmarks;
