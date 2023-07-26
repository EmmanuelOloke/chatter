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

import { useSession } from 'next-auth/react';

const FeedNavBar = () => {
  const { data: session } = useSession();

  const firstName = session?.user.firstName;
  const email = session?.user.email;
  const image = session?.user.image;

  // const { firstName, email, image } = session?.user!;

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
            <Avatar name="Username" src={image} />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              Hey there, <i style={boldText}>{firstName}</i>
            </PopoverHeader>
            <PopoverBody>
              <Text>
                Signed in as: <i style={boldText}>{email}</i>
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
