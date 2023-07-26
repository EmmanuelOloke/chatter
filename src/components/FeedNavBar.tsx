'use client';

import {
  Avatar,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import SearchChatter from './SearchChatter';
import NotificationsSvg from './SvgComponents/sidebar-svgs/NotificationsSvg';
import { LogOutButton } from './LogOutButton';

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

        <Popover>
          <PopoverTrigger>
            <Avatar name="Username" src="./assets/avatars/adebobola-muhydeen.jpeg" />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Hello name</PopoverHeader>
            <PopoverBody>
              <Text>Email</Text>
              <LogOutButton />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </HStack>
  );
};

export default FeedNavBar;
