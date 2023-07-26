'use client';

import {
  Avatar,
  HStack,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import PrimaryButton from './PrimaryButton';
import { ForYouFeedCards } from '../../public/data/ForYouFeedCards';
import { FeaturedFeedCards } from '../../public/data/FeaturedFeedCards';
import ReadSvg from './SvgComponents/feed-cards-svgs/ReadSvg';
import CommentSvg from './SvgComponents/feed-cards-svgs/CommentSvg';
import LikeSvg from './SvgComponents/feed-cards-svgs/LikeSvg';
import AnalyticsSvg from './SvgComponents/sidebar-svgs/AnalyticsSvg';
import { RecentFeedCards } from '../../public/data/RecentFeedCards';

const AccountContainer = () => {
  return (
    <VStack border="1px solid #D0D0D0" width="70rem" gap={10} pb="3rem" mb="3rem">
      <HStack w="79%">
        <VStack gap="0.75rem" alignItems="flex-start">
          <Text fontSize="2rem" fontWeight="500" lineHeight="3rem" color="#111">
            Account
          </Text>
          <Text color="#626262" fontSize="1.125rem">
            Edit Profile
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default AccountContainer;
