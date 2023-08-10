'use client';

import { Box, HStack, Input, VStack } from '@chakra-ui/react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import ImageUploadButton from './Buttons/ImageUploadButton';
import { CopyIcon } from '@chakra-ui/icons';
import { CopyButton } from './Buttons/CopyButton';
import useCopy from '../../lib/custom-hooks/useCopy';
import PublishButton from './Buttons/PublishButton';

import {
  extractMetadataFromMarkdown,
  markdownWithoutMetadata,
  getTags,
} from '../../lib/markdownUtilityFunctions';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

// const Markdown = dynamic(() => import('@uiw/react-markdown-preview').then((mod) => mod.default), {
//   ssr: false,
// });

const PostContainer = () => {
  const [value, setValue] = useState<string | undefined>(`---
  title:
  cover_image: https://direct_url_to_image.jpg
  tags:
  ---`);
  const [postImageUrl, setPostImageUrl] = useState<string>('');
  const postImageMarkdownFormat = `![Image description](${postImageUrl})`;

  const { copyFormattedMdImageLink, isCopied } = useCopy();

  const handleSubmit = (postContent: string | undefined): void => {
    console.log(postContent);
  };

  const extractedMetadata = extractMetadataFromMarkdown(value);
  console.log(extractedMetadata);

  const rawMarkdownWithoutMetadata = markdownWithoutMetadata(value);
  console.log(rawMarkdownWithoutMetadata);

  const tags = getTags(extractedMetadata);
  console.log(tags);

  return (
    <VStack
      border="1px solid #D0D0D0"
      w="70rem"
      h="full"
      borderRadius=".5rem"
      mt=".5rem"
      ml="1.5rem"
    >
      <VStack alignItems="flex-start">
        <HStack w="60rem" justifyContent="space-between" alignItems="center" mt="3rem">
          <ImageUploadButton setImageUrl={setPostImageUrl} />
          <PublishButton handleClick={() => handleSubmit(value)} disabled={!value} text="Publish" />
        </HStack>

        <HStack>
          {postImageUrl ? (
            <>
              <Input type="text" value={postImageMarkdownFormat} w="30rem" />
              <CopyButton
                handleClick={() => copyFormattedMdImageLink(postImageMarkdownFormat)}
                text={isCopied ? 'Copied!' : 'Copy...'}
                icon={<CopyIcon />}
              />
            </>
          ) : null}
        </HStack>
      </VStack>

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
