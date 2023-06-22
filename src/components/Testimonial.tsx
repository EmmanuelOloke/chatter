'use client';

import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PrimaryButton from './PrimaryButton';

export const Testimonial = () => {
  return (
    <Box w="100vw" display="flex" justifyContent="center" py="5rem" background="#FFEDCC80">
      <VStack
        w={{ base: '85%', lg: '80%', '2xl': '60%' }}
        flexDir={{ base: 'column', lg: 'row' }}
        gap="4rem"
        align={{ base: 'center', lg: 'left' }}
      >
        <Image
          src="./assets/images/landing-page-images/testimonial/adebola-muhydeen.jpeg"
          alt="Adebola Muhydeen"
          borderRadius="50%"
          w="17rem"
        />

        <Flex gap="1.5rem" w={{ base: '22rem', lg: '53rem' }} flexDir="column">
          <Flex flexDir="column" gap="3rem">
            <Text fontWeight="400" fontSize="1rem" lineHeight="1.6rem">
              <q>
                Chatter has become an integral part of my online experience. As a user of this
                incredible blogging platform, I have discovered a vibrant community of individuals
                who are passionate about sharing their ideas and engaging in thoughtful discussions.
              </q>
            </Text>

            <Flex flexDir={{ base: 'column' }} alignItems={{ base: 'center', lg: 'flex-start' }}>
              <Box fontSize="1.5rem" fontWeight="500">
                Adebobola Muhydeen,{' '}
                <Text display={{ lg: 'inline' }} fontSize="1rem" fontWeight="400">
                  Software developer at Apple
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex justifyContent={{ base: 'center', lg: 'flex-start' }}>
            <PrimaryButton text="Join Chatter" link="/signup" width="9rem" height="3rem" />
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};
