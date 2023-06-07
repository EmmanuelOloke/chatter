'use client';

import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const Hero = () => {
  return (
    <Flex
      h={{ base: '47rem', '2xl': '64rem' }}
      w={{ base: '100vw', lg: '90rem', '2xl': '100vw' }}
      background={`linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/chatter-hero.jpeg')`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition={{ base: 'left', lg: 'center' }}
      justifyContent="center"
      alignItems="center"
    >
      <VStack width={{ base: '90vw', lg: '61.5rem' }} gap="1.5rem" alignItems="left">
        <Text
          fontSize={{ base: '1.7rem', lg: '3rem' }}
          lineHeight={{ base: '1.5', lg: '4.5rem' }}
          fontWeight="700"
          color="#FFFFFF"
        >
          Welcome to Chatter: A Haven for Text-Based Content
        </Text>
        <Text
          fontSize={{ base: '1rem', lg: '1.45rem' }}
          lineHeight={{ base: '2', lg: '1.5' }}
          fontWeight="500"
          color="#FFFFFF"
          w={{ base: '20rem', lg: '46rem' }}
        >
          Unleash the Power of Words, Connect with Like-minded Readers and Writers
        </Text>
        <Button
          variant="solid"
          backgroundColor="#543EE0"
          color="#FFF"
          size="lg"
          w="9rem"
          h="3rem"
          _hover={{ backgroundColor: '#7a67f4' }}
        >
          Get Started
        </Button>
      </VStack>
    </Flex>
  );
};
