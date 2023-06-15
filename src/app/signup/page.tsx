'use client';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { FcGoogle, FcHome } from 'react-icons/fc';
import FgLinkedIn from './assets/icons/linkedin-icon.png';

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box width="100vw">
      <HStack gap="15rem">
        <Flex
          h="100vh"
          background={`linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('./assets/images/signup-image/chatter-signup-image.jpeg')`}
          bgPos="center"
          bgSize="cover"
          w="32rem"
        >
          <Flex flexDir="column" color="#FFF" alignItems="center" justifyContent="center" gap={8}>
            <Text textTransform="uppercase" fontSize="2.5rem" fontWeight="700">
              chatter
            </Text>
            <Text
              textTransform="capitalize"
              fontSize="1.2rem"
              fontWeight="500"
              lineHeight="2.25rem"
              w="90%"
            >
              unleash the power of words, connect with like-minded readers and writers
            </Text>
          </Flex>
        </Flex>

        <Box w="32.5rem">
          <Tabs isFitted>
            <TabList mb="1em">
              <Tab
                textTransform="uppercase"
                sx={{ borderBottom: '5px solid #D9D9D9' }}
                _selected={{ borderBottom: '5px solid #543EE0' }}
                fontWeight="700"
              >
                register
              </Tab>
              <Tab
                textTransform="uppercase"
                sx={{ borderBottom: '5px solid #D9D9D9' }}
                _selected={{ borderBottom: '5px solid #543EE0' }}
                fontWeight="700"
              >
                login
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel padding={0}>
                <Text fontSize="2rem" fontWeight="500" textAlign="center">
                  Register as a Writer/Reader
                </Text>

                <FormControl gap="5rem">
                  <Flex gap={2}>
                    <Box>
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="John" w="16rem" />
                    </Box>
                    <Box>
                      <FormLabel>Last name</FormLabel>
                      <Input placeholder="Doe" w="16rem" />
                    </Box>
                  </Flex>

                  <FormLabel>You are joining as?</FormLabel>
                  <Select defaultValue="option1">
                    <option value="option1">Writer</option>
                    <option value="option2">Reader</option>
                  </Select>

                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Johndoe@gmail.com" />

                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <Button
                    variant="solid"
                    backgroundColor="#543EE0"
                    color="#FFF"
                    size="lg"
                    width="100%"
                    height="3rem"
                    _hover={{ backgroundColor: '#7a67f4' }}
                  >
                    Create account
                  </Button>

                  <Button
                    leftIcon={<FcGoogle />}
                    variant="outline"
                    size="lg"
                    width="100%"
                    height="3rem"
                    fontWeight="normal"
                  >
                    Sign up with Google
                  </Button>

                  <Button
                    leftIcon={
                      <Image
                        src={'./assets/icons/linkedin-icon.png'}
                        alt="linkedin icon"
                        width="1.2rem"
                      />
                    }
                    variant="outline"
                    size="lg"
                    width="100%"
                    height="3rem"
                    fontWeight="normal"
                  >
                    Sign up with Linkedin
                  </Button>
                </FormControl>
              </TabPanel>

              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </HStack>
    </Box>
  );
};

export default Signup;
