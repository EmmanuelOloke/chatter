'use client';

import { Avatar, HStack } from '@chakra-ui/react';
import SearchChatter from './SearchChatter';
import NotificationsSvg from './SvgComponents/sidebar-svgs/NotificationsSvg';

const FeedNavBar = () => {
  return (
    <HStack
      w="100vw"
      justifyContent="center"
      py="0.56rem"
      borderBottom="1px solid #D0D0D0"
      gap="12rem"
    >
      <SearchChatter />

      <HStack>
        <NotificationsSvg color="#000000" />

        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </HStack>
    </HStack>
  );
};

export default FeedNavBar;
