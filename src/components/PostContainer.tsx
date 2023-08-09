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

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

// const Markdown = dynamic(() => import('@uiw/react-markdown-preview').then((mod) => mod.default), {
//   ssr: false,
// });

type MarkdownMetadata = {
  [key: string]: string;
};

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

  const extractMetadataFromMarkdown = (markdown: string | undefined) => {
    const charactersBetweenGroupedHyphens = /^---([\s\S]*?)---/;
    const metadataMatched = markdown!.match(charactersBetweenGroupedHyphens);

    if (!metadataMatched) {
      return { error: `Wrong metadata format` };
    }

    const metadata = metadataMatched[1];

    const metadataLines = metadata.split('\n');
    const metadataObject = metadataLines.reduce((accumulator: MarkdownMetadata, line) => {
      const [key, ...value] = line.split(':').map((part) => part.trim());

      if (key) accumulator[key] = value[1] ? value.join(':') : value.join('');
      return accumulator;
    }, {});

    return metadataObject;
  };

  const markdownWithoutMetadata = (markdown: string | undefined) => {
    const withoutMetadata = markdown!.replace(/^---([\s\S]*?)---/gm, '');
    return withoutMetadata.trim();
  };

  const extractedMetadata = extractMetadataFromMarkdown(value);
  console.log(extractedMetadata);
  const metaDataRemoved = markdownWithoutMetadata(value);
  console.log(metaDataRemoved);

  const getTags = (metaData: MarkdownMetadata) => {
    const tagsArray = metaData.tags.split(', ');
    return tagsArray;
  };

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
