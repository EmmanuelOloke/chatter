'use client';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
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
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  const handlePasswordShow = () => setPasswordShow(!passwordShow);
  const handleConfirmPasswordShow = () => setConfirmPasswordShow(!confirmPasswordShow);

  return (
    <Box width="100vw" h="full">
      <HStack gap="15rem" alignItems="stretch">
        <Flex
          h="100vh"
          background={`linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('./assets/images/signup-image/chatter-signup-image.jpeg')`}
          bgPos="center"
          bgSize="cover"
          w="32rem"
          display={{ base: 'none', lg: 'flex' }}
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

        <Box w={{ base: '90vw', lg: '32.5rem' }} margin={{ base: '0 auto', lg: '0' }}>
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
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    role: 'Writer',
                    email: '',
                    password: '',
                    confirmPassword: '',
                  }}
                  validationSchema={Yup.object({
                    firstName: Yup.string()
                      .required('First name is required')
                      .min(2, 'First name is too short'),
                    lastName: Yup.string()
                      .required('Last name is required')
                      .min(2, 'Last name is too short'),
                    email: Yup.string()
                      .required('Email is required')
                      .email('Invalid email address'),
                    password: Yup.string()
                      .required('Password is required')
                      .min(8, 'Password must be at least 8 characters'),
                    confirmPassword: Yup.string()
                      .oneOf([Yup.ref('password')], 'Passwords must match')
                      .required('Confirm password is required'),
                  })}
                  onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 2));
                    actions.resetForm();
                  }}
                >
                  {(formik) => (
                    <Box as="form" onSubmit={formik.handleSubmit}>
                      <Heading
                        fontSize={{ base: '1.5rem', lg: '2rem' }}
                        fontWeight="500"
                        textAlign="center"
                        mb={5}
                      >
                        Register as a Writer/Reader
                      </Heading>

                      <Flex flexDir="column" gap="0.9rem">
                        <Flex gap={2} flexDir={{ base: 'column', lg: 'row' }}>
                          <FormControl
                            id="firstName"
                            isInvalid={Boolean(formik.errors.firstName && formik.touched.firstName)}
                          >
                            <FormLabel>First name</FormLabel>
                            <Field
                              as={Input}
                              name="firstName"
                              placeholder="Tony"
                              w={{ base: '100%', lg: '16rem' }}
                              h="3rem"
                            />
                            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                          </FormControl>
                          <FormControl
                            id="lastName"
                            isInvalid={Boolean(formik.errors.lastName && formik.touched.lastName)}
                          >
                            <FormLabel>Last name</FormLabel>
                            <Field
                              as={Input}
                              name="lastName"
                              placeholder="Stark"
                              w={{ base: '100%', lg: '16rem' }}
                              h="3rem"
                            />
                            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                          </FormControl>
                        </Flex>

                        <Flex flexDir="column">
                          <FormControl id="role">
                            <FormLabel>You are joining as?</FormLabel>
                            <Select
                              defaultValue="Writer"
                              h="3rem"
                              name="role"
                              onChange={formik.handleChange}
                            >
                              <option value="Writer">Writer</option>
                              <option value="Reader">Reader</option>
                            </Select>
                          </FormControl>
                        </Flex>

                        <Flex flexDir="column">
                          <FormControl
                            id="email"
                            isInvalid={Boolean(formik.errors.email && formik.touched.email)}
                          >
                            <FormLabel>Email address</FormLabel>
                            <Field
                              as={Input}
                              name="email"
                              type="email"
                              placeholder="ironman@jarvis.com"
                              h="3rem"
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                          </FormControl>
                        </Flex>

                        <Flex flexDir="column">
                          <FormControl
                            id="password"
                            isInvalid={Boolean(formik.errors.password && formik.touched.password)}
                          >
                            <FormLabel>Password</FormLabel>
                            <InputGroup size="md">
                              <Field
                                as={Input}
                                name="password"
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
                            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                          </FormControl>
                        </Flex>

                        <Flex flexDir="column">
                          <FormControl
                            id="confirmPassword"
                            isInvalid={Boolean(
                              formik.errors.confirmPassword && formik.touched.confirmPassword
                            )}
                          >
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup size="md">
                              <Field
                                as={Input}
                                name="confirmPassword"
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
                            <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
                          </FormControl>
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
                            type="submit"
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
                    </Box>
                  )}
                </Formik>
              </TabPanel>

              <TabPanel>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .required('Email is required')
                      .email('Invalid email address'),
                    password: Yup.string()
                      .required('Password is required')
                      .min(8, 'Password must be at least 8 characters'),
                  })}
                  onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 2));
                    actions.resetForm();
                  }}
                >
                  {(formik) => (
                    <Box as="form" onSubmit={formik.handleSubmit}>
                      <Heading
                        fontSize={{ base: '1.5rem', lg: '2rem' }}
                        fontWeight="500"
                        textAlign="center"
                        mb={5}
                      >
                        Welcome back
                      </Heading>

                      <FormControl>
                        <Flex flexDir="column" gap="1.5rem">
                          <FormControl
                            id="login-email-address"
                            isInvalid={Boolean(formik.errors.email && formik.touched.email)}
                          >
                            <FormLabel>Email address</FormLabel>
                            <Field
                              as={Input}
                              name="email"
                              type="email"
                              placeholder="ironman@jarvis.com"
                              h="3rem"
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                          </FormControl>

                          <FormControl
                            id="login-password"
                            isInvalid={Boolean(formik.errors.password && formik.touched.password)}
                          >
                            <FormLabel>Password</FormLabel>
                            <InputGroup size="md">
                              <Field
                                as={Input}
                                name="password"
                                pr="4.5rem"
                                type={passwordShow ? 'text' : 'password'}
                                placeholder="**********"
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
                            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                          </FormControl>

                          <Button
                            variant="solid"
                            backgroundColor="#543EE0"
                            color="#FFF"
                            size="lg"
                            width="100%"
                            height="3rem"
                            _hover={{ backgroundColor: '#7a67f4' }}
                            type="submit"
                          >
                            Login
                          </Button>
                        </Flex>
                      </FormControl>
                    </Box>
                  )}
                </Formik>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </HStack>
    </Box>
  );
};

export default Signup;
