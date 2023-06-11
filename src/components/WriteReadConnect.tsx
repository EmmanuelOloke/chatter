'use client';

import { Avatar, Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const WriteReadConnect = () => {
  return (
    <Box w="100vw" display="flex" justifyContent="center" py="5rem">
      <Flex
        gap={{ base: '3rem', lg: '7.5rem' }}
        w={{ base: '85%', lg: '80%', '2xl': '60%' }}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Box w={{ lg: '22rem' }} margin="0 auto">
          <HStack gap="2.5rem" alignItems="center">
            <VStack gap="6rem">
              <Avatar size="2xl" name="a human female" src="./assets/avatars/avatar1.jpeg" />
              <Avatar
                size="2xl"
                name="a middle-aged human male"
                src="./assets/avatars/avatar2.jpeg"
              />
            </VStack>

            <Avatar size="2xl" name="a young human male" src="./assets/avatars/avatar3.jpeg" />
          </HStack>
        </Box>

        <Flex gap="2rem" flexDir="column" w={{ base: '23rem', lg: '40rem' }}>
          <VStack gap="1rem">
            <Text
              fontSize={{ base: '1.5rem', lg: '2.9rem' }}
              fontWeight="700"
              lineHeight={{ base: '2.5rem', lg: '4.5rem' }}
            >
              Write, read and connect with great minds on chatter
            </Text>

            <Text fontSize={{ base: '1rem', lg: '1.1rem' }} fontWeight="400" lineHeight="1.6rem">
              Share people your great ideas, and also read write-ups based on your interests.
              Connect with people of same interests and goals{' '}
            </Text>
          </VStack>

          <Flex justifyContent={{ base: 'center', lg: 'left' }}>
            <Button
              variant="solid"
              backgroundColor="#543EE0"
              color="#FFF"
              size="lg"
              width="9rem"
              height="3rem"
              _hover={{ backgroundColor: '#7a67f4' }}
            >
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};