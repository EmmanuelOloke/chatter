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
import { useUserContext } from '@/contexts/UserContext';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PostDocument } from '../../models/post';
import { formatDate } from '../../lib/formatDate';

const FeedContainer = () => {
  const { data: session } = useSession();
  const { setUser } = useUserContext();

  const [posts, setPosts] = useState([]);

  const userId = session?.user?.id as string;

  const fetchUserInfo = async (id: string) => {
    const response = await axios.get(`/api/user/${id}`);
    const userData = response.data;
    setUser(userData);
  };

  const fetchAllPosts = async () => {
    const response = await axios.get(`/api/post`);
    const allPosts = response.data;
    setPosts(allPosts);
  };

  useEffect(() => {
    fetchUserInfo(userId);
    fetchAllPosts();
  }, []);

  return (
    <VStack border="1px solid #D0D0D0" width="70rem" gap={10} pb="3rem" mb="3rem">
      <HStack gap="24rem" pt="1.38rem">
        <VStack alignItems="flex-start" gap="0.75rem">
          <Text fontSize="2rem" fontWeight="500" lineHeight="3rem" color="#111">
            FEED
          </Text>
          <Text color="#626262" fontSize="1.125rem">
            Explore different content you&apos;d love
          </Text>
        </VStack>

        <PrimaryButton text="Post a content" link="/post" width="12rem" height="3.5rem" hasIcon />
      </HStack>

      <Tabs pos="relative" variant="unstyled" width="79%">
        <TabList gap="18rem" border="1px solid #D0D0D0" pl="1rem" py="0.5rem" borderRadius="0.5rem">
          <Tab fontWeight="500">For you</Tab>
          <Tab fontWeight="500">Featured</Tab>
          <Tab fontWeight="500">Recent</Tab>
        </TabList>

        <TabIndicator mt="-0.3rem" height="0.3rem" bg="#543EE0" borderRadius="1px" />

        <TabPanels>
          <TabPanel p={0}>
            {posts.map((post: PostDocument) => (
              <VStack
                key={post._id}
                border="1px solid #D0D0D0"
                _first={{ borderRadius: '0.5rem 0.5rem 0 0' }}
                _last={{ borderRadius: '0 0 0.5rem 0.5rem' }}
                alignItems="flex-start"
                pl="2rem"
                pt="2rem"
                pb="2rem"
              >
                <HStack>
                  <Avatar src={post.authorImage} name={post.author} size="lg" />

                  <VStack alignItems="flex-start">
                    <Text fontWeight="500" fontSize="1.5rem">
                      {post.author}
                    </Text>
                    <HStack color="#626262" fontSize="0.9rem">
                      <Text> {post.authorProfession}. </Text>
                      <Text>{formatDate(post.datePosted)}</Text>
                    </HStack>
                  </VStack>
                </HStack>

                <VStack alignItems="flex-start">
                  <VStack alignItems="flex-start">
                    <Text fontWeight="500" fontSize="2rem">
                      {post.title}
                    </Text>

                    <HStack>
                      <ReadSvg color="black" />

                      <Text fontSize="0.9rem" color="#626262">
                        {post.timeToRead > 1
                          ? `${post.timeToRead} minutes read`
                          : `${post.timeToRead} minute read`}
                      </Text>
                    </HStack>
                  </VStack>

                  <Text color="#626262" w="38rem" noOfLines={5}>
                    {post.content}
                  </Text>

                  <Image src={post.coverImage} alt={post.title} />

                  <HStack w="38rem" justifyContent="space-between">
                    <HStack>
                      <CommentSvg color="black" />
                      <Text color="#626262">{post.comments.length}</Text>
                    </HStack>

                    <HStack>
                      <LikeSvg color="black" />
                      <Text color="#626262">{post.likes}</Text>
                    </HStack>

                    <HStack>
                      <AnalyticsSvg color="black" />
                      <Text color="#626262">{post.views}</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </VStack>
            ))}
          </TabPanel>

          <TabPanel p={0}>
            {FeaturedFeedCards.map((FeaturedFeedCard) => (
              <VStack
                key={FeaturedFeedCard.id}
                border="1px solid #D0D0D0"
                _first={{ borderRadius: '0.5rem 0.5rem 0 0' }}
                _last={{ borderRadius: '0 0 0.5rem 0.5rem' }}
                alignItems="flex-start"
                pl="2rem"
                pt="2rem"
                pb="2rem"
              >
                <HStack>
                  <Avatar
                    src={FeaturedFeedCard.authorAvatar}
                    name={FeaturedFeedCard.authorName}
                    size="lg"
                  />

                  <VStack alignItems="flex-start">
                    <Text fontWeight="500" fontSize="1.5rem">
                      {FeaturedFeedCard.authorName}
                    </Text>
                    <HStack color="#626262" fontSize="0.9rem">
                      <Text> {FeaturedFeedCard.authorJob}, </Text>
                      <Text> {FeaturedFeedCard.datePublished} </Text>
                    </HStack>
                  </VStack>
                </HStack>

                <VStack alignItems="flex-start">
                  <VStack alignItems="flex-start">
                    <Text fontWeight="500" fontSize="2rem">
                      {FeaturedFeedCard.articleTitle}
                    </Text>

                    <HStack>
                      <ReadSvg color="black" />

                      <Text fontSize="0.9rem" color="#626262">
                        {FeaturedFeedCard.articleDuration}
                      </Text>
                    </HStack>
                  </VStack>

                  <Text color="#626262" w="38rem">
                    {FeaturedFeedCard.articleExcerpt}
                  </Text>

                  <Image src={FeaturedFeedCard.articleImage} alt={FeaturedFeedCard.articleTitle} />

                  <HStack w="38rem" justifyContent="space-between">
                    <HStack>
                      <CommentSvg color="black" />
                      <Text color="#626262">{FeaturedFeedCard.articleComments}</Text>
                    </HStack>

                    <HStack>
                      <LikeSvg color="black" />
                      <Text color="#626262">{FeaturedFeedCard.articleLikes}</Text>
                    </HStack>

                    <HStack>
                      <AnalyticsSvg color="black" />
                      <Text color="#626262">{FeaturedFeedCard.articleViews}</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </VStack>
            ))}
          </TabPanel>

          <TabPanel p={0}>
            {RecentFeedCards.map((RecentFeedCard) => (
              <VStack
                key={RecentFeedCard.id}
                border="1px solid #D0D0D0"
                _first={{ borderRadius: '0.5rem 0.5rem 0 0' }}
                _last={{ borderRadius: '0 0 0.5rem 0.5rem' }}
                alignItems="flex-start"
                pl="2rem"
                pt="2rem"
                pb="2rem"
              >
                <HStack>
                  <Avatar
                    src={RecentFeedCard.authorAvatar}
                    name={RecentFeedCard.authorName}
                    size="lg"
                  />

                  <VStack alignItems="flex-start">
                    <Text fontWeight="500" fontSize="1.5rem">
                      {RecentFeedCard.authorName}
                    </Text>
                    <HStack color="#626262" fontSize="0.9rem">
                      <Text> {RecentFeedCard.authorJob}, </Text>
                      <Text> {RecentFeedCard.datePublished} </Text>
                    </HStack>
                  </VStack>
                </HStack>

                <VStack alignItems="flex-start">
                  <VStack alignItems="flex-start">
                    <Text fontWeight="500" fontSize="2rem">
                      {RecentFeedCard.articleTitle}
                    </Text>

                    <HStack>
                      <ReadSvg color="black" />

                      <Text fontSize="0.9rem" color="#626262">
                        {RecentFeedCard.articleDuration}
                      </Text>
                    </HStack>
                  </VStack>

                  <Text color="#626262" w="38rem">
                    {RecentFeedCard.articleExcerpt}
                  </Text>

                  <Image src={RecentFeedCard.articleImage} alt={RecentFeedCard.articleTitle} />

                  <HStack w="38rem" justifyContent="space-between">
                    <HStack>
                      <CommentSvg color="black" />
                      <Text color="#626262">{RecentFeedCard.articleComments}</Text>
                    </HStack>

                    <HStack>
                      <LikeSvg color="black" />
                      <Text color="#626262">{RecentFeedCard.articleLikes}</Text>
                    </HStack>

                    <HStack>
                      <AnalyticsSvg color="black" />
                      <Text color="#626262">{RecentFeedCard.articleViews}</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </VStack>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default FeedContainer;
