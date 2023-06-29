'use client';

import { Button, HStack, VStack } from '@chakra-ui/react';
import PrimaryButton from './PrimaryButton';

const PostContainer = () => {
  return (
    <VStack
      border="1px solid #D0D0D0"
      w="70rem"
      h="40rem"
      borderRadius=".5rem"
      mt="1.87rem"
      ml="1.5rem"
    >
      <HStack w="50rem" justifyContent="flex-end" mt="3rem">
        <PrimaryButton text="Publish" link="" width="12rem" height="3.5rem" disabled />
      </HStack>
    </VStack>
  );
};

export default PostContainer;
