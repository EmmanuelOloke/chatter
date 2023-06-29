'use client';

import FeedNavBar from '@/components/FeedNavBar';
import PostContainer from '@/components/PostContainer';
import SideBar from '@/components/SideBar';
import { Box, Flex, HStack, Heading, VStack } from '@chakra-ui/react';

const Post = () => {
  return (
    <HStack>
      <HStack height="100vh" alignItems="flex-start" gap={0} overflowY="auto">
        <SideBar />

        <VStack w="100vw" alignItems="flex-start">
          <FeedNavBar />

          <PostContainer />
        </VStack>
      </HStack>
    </HStack>
  );
};

export default Post;
