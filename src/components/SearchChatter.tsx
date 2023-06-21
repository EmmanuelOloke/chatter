'use client';

import { HStack, Input } from '@chakra-ui/react';
import SearchSvg from './SvgComponents/feed-navbar-svgs/SearchSvg';

const SearchChatter = () => {
  return (
    <HStack height="3rem" border="1px solid #D0D0D0" borderRadius="0.5rem" gap="1.5rem" p={3}>
      <SearchSvg color="#000000" />

      <Input variant="unstyled" placeholder="search chatter" w="28rem" />
    </HStack>
  );
};

export default SearchChatter;
