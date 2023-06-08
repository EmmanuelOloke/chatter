'use client';

import React from 'react';
import { Box, Flex, Image, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

import chatterLogo from '../../public/images/chatter.png';

export const Footer = () => {
  return (
    <Box
      w="100vw"
      display="flex"
      justifyContent={{ base: 'left', lg: 'center' }}
      pl={{ base: '3rem', lg: '0' }}
      py="5rem"
      background="#FFEDCC80"
    >
      <Flex gap={{ base: '5rem', lg: '10rem' }} flexDir={{ base: 'column', lg: 'row' }}>
        <Image
          src={chatterLogo.src}
          alt="Chatter Logo"
          width={{ base: '120px', lg: '180px' }}
          h={{ lg: '30px' }}
        />

        <VStack alignItems="left">
          <Text mb="1.5rem" fontSize="1.2rem" fontWeight="500">
            Explore
          </Text>
          <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecor: 'underline' }}>
            Home
          </Link>
          <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecor: 'underline' }}>
            Trending blogs
          </Link>
          <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecor: 'underline' }}>
            Chatter for teams
          </Link>
        </VStack>

        <VStack alignItems="left">
          <Text mb="1.5rem" fontSize="1.2rem" fontWeight="500">
            Support
          </Text>
          <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecor: 'underline' }}>
            Support docs
          </Link>
          <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecor: 'underline' }}>
            Join slack
          </Link>
          <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecor: 'underline' }}>
            Contact
          </Link>
        </VStack>

        <VStack alignItems="left">
          <Text mb="1.5rem" fontSize="1.2rem" fontWeight="500">
            Official Blog
          </Text>
          <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecor: 'underline' }}>
            Official blog
          </Link>
          <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecor: 'underline' }}>
            Engineering blog
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};
