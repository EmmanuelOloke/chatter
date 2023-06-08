'use client';

import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  return (
    <Box width="100vw">
      <HStack>
        <Flex
          h="100vh"
          background="url('./assets/images/signup-image/chatter-signup-image.jpeg')"
          bgPos="center"
          bgSize="cover"
          alignItems="center"
        >
          <VStack color="#FFF">
            <Text textTransform="uppercase">chatter</Text>
            <Text>Unleash the Power of Words, Connect with Like-minded Readers and Writers</Text>
          </VStack>
        </Flex>

        <Box>This is where the form is going to be</Box>
      </HStack>
    </Box>
  );
};

export default Signup;
