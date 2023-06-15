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

import { FcGoogle } from 'react-icons/fc';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Signup = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  const handlePasswordShow = () => setPasswordShow(!passwordShow);
  const handleConfirmPasswordShow = () => setConfirmPasswordShow(!confirmPasswordShow);

  return (
    <Box width="100vw">
      <HStack gap="15rem" alignItems="flex-start">
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
                <Text fontSize="2rem" fontWeight="500" textAlign="center" mb={5}>
                  Register as a Writer/Reader
                </Text>

                <FormControl>
                  <Flex flexDir="column" gap="0.9rem">
                    <Flex gap={2}>
                      <Box>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder="John" w="16rem" h="3rem" />
                      </Box>
                      <Box>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder="Doe" w="16rem" h="3rem" />
                      </Box>
                    </Flex>

                    <Flex flexDir="column">
                      <FormLabel>You are joining as?</FormLabel>
                      <Select defaultValue="option1" h="3rem">
                        <option value="option1">Writer</option>
                        <option value="option2">Reader</option>
                      </Select>
                    </Flex>

                    <Flex flexDir="column">
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" placeholder="Johndoe@gmail.com" h="3rem" />
                    </Flex>

                    <Flex flexDir="column">
                      <FormLabel>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={passwordShow ? 'text' : 'password'}
                          placeholder="Enter password"
                          h="3rem"
                        />
                        <InputRightElement
                          width="4.5rem"
                          onClick={handlePasswordShow}
                          cursor="pointer"
                          display="flex"
                          alignItems="center"
                          mt="0.2rem"
                        >
                          {passwordShow ? <ViewOffIcon /> : <ViewIcon />}
                        </InputRightElement>
                      </InputGroup>
                    </Flex>

                    <Flex flexDir="column">
                      <FormLabel>Confirm Password</FormLabel>
                      {/* <Flex alignItems="center"> */}
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={confirmPasswordShow ? 'text' : 'password'}
                          placeholder="Confirm password"
                          h="3rem"
                        />
                        <InputRightElement
                          width="4.5rem"
                          onClick={handleConfirmPasswordShow}
                          cursor="pointer"
                          display="flex"
                          alignItems="center"
                          mt="0.2rem"
                        >
                          {confirmPasswordShow ? <ViewOffIcon /> : <ViewIcon />}
                        </InputRightElement>
                      </InputGroup>
                      {/* </Flex> */}
                    </Flex>

                    <Flex>
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
                    </Flex>

                    <Flex>
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
                    </Flex>

                    <Flex>
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
                    </Flex>
                  </Flex>
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
