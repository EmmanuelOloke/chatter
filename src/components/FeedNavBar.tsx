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

import { useUserContext } from '@/contexts/UserContext';

const FeedNavBar = () => {
  const { user } = useUserContext();

  const boldText = {
    color: '#626262',
    fontWeight: 'bold',
  };

  return (
    <HStack
      p="0.5625rem 8.0625rem 0.5625rem 19.375rem"
      borderBottom="1px solid #D0D0D0"
      gap="12rem"
    >
      <SearchChatter />

      <HStack gap={3}>
        <NotificationsSvg color="#000000" />

        <Popover placement="top-end">
          <PopoverTrigger>
            <Avatar _hover={{ cursor: 'pointer' }} name="Profile Image" src={user?.profileImage} />
          </PopoverTrigger>
          <PopoverContent _focus={{ outline: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              Hey there, <i style={boldText}>{user?.firstName}</i>
            </PopoverHeader>
            <PopoverBody>
              <Text>
                Signed in as: <i style={boldText}>{user?.email}</i>
              </Text>

              <LogOutButton />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </HStack>
  );
};

export default FeedNavBar;
