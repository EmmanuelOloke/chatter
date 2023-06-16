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
      w="13rem"
      pos="sticky"
      h="100vh"
      borderRight="1px solid #D0D0D0"
      left="0"
      pt={3}
      gap={5}
    >
      <Flex color="#543EE0" fontSize="1.7rem" justifyContent="center">
        CHATTER
      </Flex>

      <Flex justifyContent="center">
        <Flex fontWeight="400" fontSize="1rem" w="7.5rem">
          Overview
        </Flex>
      </Flex>

      <Flex justifyContent="flex-end">
        <VStack w="9.5rem" alignItems="left">
          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <FeedSvg color="red" />
              </Icon>
              <Text>Feed</Text>
            </Flex>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <BookmarkSvg color="red" />
              </Icon>
              <Text>Bookmarks</Text>
            </Flex>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <TeamSvg color="red" />
              </Icon>
              <Text>Team Blogs</Text>
            </Flex>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <DraftsSvg color="red" />
              </Icon>
              <Text>Drafts</Text>
            </Flex>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <AnalyticsSvg color="red" />
              </Icon>
              <Text>Analytics</Text>
            </Flex>
          </NextLink>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default SideBar;
