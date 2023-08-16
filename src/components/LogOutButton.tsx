import { Button } from '@chakra-ui/react';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import useLogOut from '../../lib/custom-hooks/useLogOut';

export const LogOutButton = () => {
  const { logOut } = useLogOut();
  return (
    <Button
      px={3}
      w="7rem"
      color="#626262"
      fontWeight="bold"
      rightIcon={<FiLogOut />}
      background="none"
      _hover={{ color: '#543EE0', border: '1px solid #543EE0' }}
      border="1px solid #626262"
      onClick={logOut}
    >
      Log out
    </Button>
  );
};
