'use client';

import { Avatar, HStack } from '@chakra-ui/react';
import SearchChatter from './SearchChatter';
import NotificationsSvg from './SvgComponents/sidebar-svgs/NotificationsSvg';

const FeedNavBar = () => {
  return (
    <HStack
      p="0.5625rem 8.0625rem 0.5625rem 19.375rem"
      borderBottom="1px solid #D0D0D0"
      gap="12rem"
    >
      <SearchChatter />

      <HStack gap={3}>
        <NotificationsSvg color="#000000" />

        <Avatar name="Username" src="./assets/avatars/adebola-muhydeen.jpeg" />
      </HStack>
    </HStack>
  );
};

export default FeedNavBar;
