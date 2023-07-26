import { Button } from '@chakra-ui/react';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import useLogOut from '../../lib/useLogOut';

export const LogOutButton = () => {
  const { logOut } = useLogOut();
  return (
    <Button
      p={0}
      color="#626262"
      rightIcon={<FiLogOut />}
      background="none"
      _hover={{ color: '#543EE0' }}
      onClick={logOut}
    >
      Log out
    </Button>
  );
};
