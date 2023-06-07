'use client';

import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const AboutChatter = () => {
  return (
    <Box w="100vw" display="flex" justifyContent="center" my="5rem">
      <Flex w={{ base: '85%', lg: '90%', '2xl': '60%' }} flexDir={{ base: 'column' }} gap="5.25rem">
        <VStack gap="2rem" alignItems="left">
          <Text
            fontSize={{ base: '2rem', lg: '3rem' }}
            fontWeight="700"
            color="#111111"
            lineHeight="4.5rem"
          >
            About Chatter
          </Text>
          <Text
            fontSize={{ base: '0.8rem', lg: '1rem' }}
            fontWeight="400"
            lineHeight="1.688rem"
            w={{ base: '22rem', lg: '39rem' }}
          >
            Chatter is a multi-functional platform where authors and readers can have access to
            their own content. It aims to be a traditional bookworm’s heaven and a blog to get
            access to more text based content. Our vision is to foster an inclusive and vibrant
            community where diversity is celebrated. We encourage open-mindedness and respect for
            all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and
            understanding, we strive
          </Text>
        </VStack>

        <Box>
          <Image
            src="./images/about-chatter.jpeg"
            alt="young people reading in a theatre"
            borderRadius="0.5rem"
          />
        </Box>
      </Flex>
    </Box>
  );
};
