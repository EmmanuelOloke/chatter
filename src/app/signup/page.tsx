'use client';

import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  return (
    <Box width="100vw">
      <HStack>
        <Flex
          h="100vh"
          background={`linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('./assets/images/signup-image/chatter-signup-image.jpeg')`}
          bgPos="center"
          bgSize="cover"
          alignItems="center"
        >
          <VStack color="#FFF" alignItems="flex-end">
            <Text textTransform="uppercase" fontSize="3rem" fontWeight="700" lineHeight="4.5rem">
              chatter
            </Text>
            <Text fontSize="1.2rem" fontWeight="500" lineHeight="2.25rem" w="32rem">
              Unleash the Power of Words, Connect with Like-minded Readers and Writers
            </Text>
          </VStack>
        </Flex>

        <Box>This is where the form is going to be</Box>
      </HStack>
    </Box>
  );
};

export default Signup;
