'use client';

import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { whyJoinChatterCards } from '../../public/data/whyJoinChatterCardsData';

export const WhyJoinChatter = () => {
  return (
    <Box w="100vw" display="flex" justifyContent="center" my="5rem">
      <VStack gap="3.375rem" w={{ base: '85%', lg: '65rem' }}>
        <VStack gap="1.5rem">
          <Text fontSize="3rem" fontWeight="700" lineHeight="4.5rem">
            Why you should join chatter
          </Text>

          <Text fontSize="1rem" lineHeight="1.688rem" fontWeight="400" w="58rem">
            Our goal is to make writers and readers see our platform as their next heaven for
            blogging, ensuring ease in interactions, connecting with like-minded peers, have access
            to favorite content based on interests and able to communicate your great ideas with
            people
          </Text>
        </VStack>

        <Flex flexDir={{ base: 'column', lg: 'row' }} gap="3rem">
          {whyJoinChatterCards.map((whyJoinChatterCard) => (
            <VStack
              key={whyJoinChatterCard.id}
              border="1px solid #D0D0D0"
              borderRadius="0.5rem"
              gap="0.75rem"
              alignItems="left"
              p="15px 18px"
            >
              <Image
                src={whyJoinChatterCard.cardIcon}
                alt={whyJoinChatterCard.cardIconAlt}
                w="5rem"
              />

              <Text fontSize="1.3rem" lineHeight="2.25rem" fontWeight="500">
                {whyJoinChatterCard.cardTitle}
              </Text>

              <Text
                fontSize="0.9rem"
                lineHeight="1.688rem"
                fontWeight="400"
                color="#626262"
                w="15rem"
              >
                {whyJoinChatterCard.cardText}
              </Text>
            </VStack>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};
