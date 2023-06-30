'use client';

import { Button, HStack, Textarea, VStack } from '@chakra-ui/react';
import PrimaryButton from './PrimaryButton';

const PostContainer = () => {
  return (
    <VStack
      border="1px solid #D0D0D0"
      w="70rem"
      h="full"
      borderRadius=".5rem"
      mt="1.87rem"
      ml="1.5rem"
    >
      <HStack w="50rem" justifyContent="flex-end" mt="3rem">
        <PrimaryButton text="Publish" link="" width="12rem" height="3.5rem" disabled />
      </HStack>

      <Textarea
        resize="vertical"
        overflowY="auto"
        minHeight="37rem"
        mx="3rem"
        my="2rem"
        w="67rem"
        border="none"
      >
        The editor will go here The editor will go here The editor will go here The editor will go
        here The editor will go here The editor will go here The editor will go here The editor will
        go here The editor will go here The editor will go here The editor will go here The editor
        will go here The editor will go here The editor will go here The editor will go here The
        editor will go here The editor will go here The editor will go here The editor will go here
        The editor will go here The editor will go here
      </Textarea>
    </VStack>
  );
};

export default PostContainer;
