'use client';

import { Flex, Icon, Image, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

import FeedSvg from '@/components/SvgComponents/sidebar-svgs/FeedSvg';
import BookmarkSvg from './SvgComponents/sidebar-svgs/BookmarkSvg';
import TeamSvg from './SvgComponents/sidebar-svgs/TeamSvg';
import DraftsSvg from './SvgComponents/sidebar-svgs/DraftsSvg';
import AnalyticsSvg from './SvgComponents/sidebar-svgs/AnalyticsSvg';

const SideBar = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      w="13rem"
      pos="sticky"
      h="100vh"
      borderRight="1px solid #D0D0D0"
      left="0"
      pt={3}
    >
      <Text color="#543EE0" fontSize="1.7rem">
        CHATTER
      </Text>

      <Text fontWeight="400" fontSize="1rem">
        Overview
      </Text>

      <VStack>
        <NextLink href="/feed" passHref>
          <Flex>
            <Icon viewBox="0 0 22 22" color="red.500">
              <FeedSvg color="red" />
            </Icon>
            <Text>Feed</Text>
          </Flex>
        </NextLink>
        <NextLink href="/feed" passHref>
          <Flex>
            <Icon viewBox="0 0 22 22" color="red.500">
              <BookmarkSvg color="red" />
            </Icon>
            <Text>Bookmarks</Text>
          </Flex>
        </NextLink>
        <NextLink href="/feed" passHref>
          <Flex>
            <Icon viewBox="0 0 22 22" color="red.500">
              <TeamSvg color="red" />
            </Icon>
            <Text>Team Blogs</Text>
          </Flex>
        </NextLink>
        <NextLink href="/feed" passHref>
          <Flex>
            <Icon viewBox="0 0 22 22" color="red.500">
              <DraftsSvg color="red" />
            </Icon>
            <Text>Drafts</Text>
          </Flex>
        </NextLink>
        <NextLink href="/feed" passHref>
          <Flex>
            <Icon viewBox="0 0 22 22" color="red.500">
              <AnalyticsSvg color="red" />
            </Icon>
            <Text>Analytics</Text>
          </Flex>
        </NextLink>
      </VStack>
    </Flex>
  );
};

export default SideBar;
