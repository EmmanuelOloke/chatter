'use client';

import { Box, HStack, VStack } from '@chakra-ui/react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import PrimaryButton from './PrimaryButton';
import { useState } from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

// const Markdown = dynamic(() => import('@uiw/react-markdown-preview').then((mod) => mod.default), {
//   ssr: false,
// });

const PostContainer = () => {
  const [value, setValue] = useState<string | undefined>('');

  return (
    <VStack
      border="1px solid #D0D0D0"
      w="70rem"
      h="full"
      borderRadius=".5rem"
      mt=".5rem"
      ml="1.5rem"
    >
      <HStack w="60rem" justifyContent="flex-end" mt="3rem">
        <PrimaryButton text="Publish" link="" width="12rem" height="3.5rem" disabled={!value} />
      </HStack>

      <Box
        overflowY="auto"
        minHeight="37rem"
        mx="3rem"
        my="2rem"
        w="67rem"
        border="1px solid #D0D0D0"
      >
        <MDEditor
          textareaProps={{
            placeholder: 'Write your post here in markdown',
          }}
          height={600}
          value={value}
          onChange={setValue}
        />
      </Box>
    </VStack>
  );
};

export default PostContainer;
