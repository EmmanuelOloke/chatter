'use client';

import { Flex, Icon, Image, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

import FeedSvg from '@/components/SvgComponents/sidebar-svgs/FeedSvg';
import BookmarkSvg from './SvgComponents/sidebar-svgs/BookmarkSvg';
import TeamSvg from './SvgComponents/sidebar-svgs/TeamSvg';
import DraftsSvg from './SvgComponents/sidebar-svgs/DraftsSvg';
import AnalyticsSvg from './SvgComponents/sidebar-svgs/AnalyticsSvg';
import TrendingSvg from './SvgComponents/sidebar-svgs/TrendingSvg';

const SideBar = () => {
  return (
    <Flex
      flexDir="column"
      w="16rem"
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
        <Flex fontWeight="400" fontSize="1rem" w="8.5rem" pl={2}>
          Overview
        </Flex>
      </Flex>

      <Flex justifyContent="flex-end">
        <VStack w="9.5rem" alignItems="left">
          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22">
                <FeedSvg color="#543EE0" />
              </Icon>
              <Text color="#543EE0">Feed</Text>
            </Flex>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <BookmarkSvg color="#626262" />
              </Icon>
              <Text color="#626262">Bookmarks</Text>
            </Flex>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <TeamSvg color="#626262" />
              </Icon>
              <Text color="#626262">Team Blogs</Text>
            </Flex>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <DraftsSvg color="#626262" />
              </Icon>
              <Text color="#626262">Drafts</Text>
            </Flex>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Flex justifyContent="left" alignItems="center" gap={3}>
              <Icon viewBox="0 0 22 22" color="red.500">
                <AnalyticsSvg color="#626262" />
              </Icon>
              <Text color="#626262">Analytics</Text>
            </Flex>
          </NextLink>
        </VStack>
      </Flex>

      <Flex justifyContent="center">
        <Flex w="8.5rem" alignItems="center" gap={3} ml={2}>
          <Text fontWeight="400" fontSize="1rem">
            Trending Tags
          </Text>

          <Icon viewBox="0 0 22 22" color="red.500" mt={2}>
            <TrendingSvg color="#626262" />
          </Icon>
        </Flex>
      </Flex>

      <Flex justifyContent="flex-end">
        <VStack w="9.5rem" alignItems="left">
          <NextLink href="/feed" passHref>
            <Text color="#626262">Programming</Text>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Text color="#626262">Data Science</Text>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Text color="#626262">Technology</Text>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Text color="#626262">Machine Learning</Text>
          </NextLink>

          <NextLink href="/feed" passHref>
            <Text color="#626262">Politics</Text>
          </NextLink>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default SideBar;
