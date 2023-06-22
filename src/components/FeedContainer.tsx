'use client';

import { HStack, Text, VStack } from '@chakra-ui/react';
import PrimaryButton from './PrimaryButton';

const FeedContainer = () => {
  return (
    <VStack border="1px solid #D0D0D0" width="70rem">
      <HStack gap="24rem" pt="1.38rem">
        <VStack alignItems="flex-start" gap="0.75rem">
          <Text
            fontSize="2rem"
            fontWeight="500"
            lineHeight="3rem"
            color="#111"
            textTransform="uppercase"
          >
            feed
          </Text>
          <Text color="#626262" fontSize="1.125rem">
            Explore different content you&apos;d love
          </Text>
        </VStack>

        <PrimaryButton text="Post a content" link="" width="12rem" height="3.5rem" hasIcon />
      </HStack>
    </VStack>
  );
};

export default FeedContainer;
