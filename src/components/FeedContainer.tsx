'use client';

import {
  HStack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import PrimaryButton from './PrimaryButton';

const FeedContainer = () => {
  return (
    <VStack border="1px solid #D0D0D0" width="70rem" gap={10}>
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

      <Tabs pos="relative" variant="unstyled" width="79%">
        <TabList gap="18rem" border="1px solid #D0D0D0" pl="1rem" py="0.5rem" borderRadius="0.5rem">
          <Tab fontWeight="500">For you</Tab>
          <Tab fontWeight="500">Featured</Tab>
          <Tab fontWeight="500">Recent</Tab>
        </TabList>

        <TabIndicator mt="-0.3rem" height="0.3rem" bg="#543EE0" borderRadius="1px" />

        <TabPanels border="1px solid #D0D0D0" borderRadius="0.5rem">
          <TabPanel>
            <p>One</p>
          </TabPanel>
          <TabPanel>
            <p>Two</p>
          </TabPanel>
          <TabPanel>
            <p>Three</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default FeedContainer;
