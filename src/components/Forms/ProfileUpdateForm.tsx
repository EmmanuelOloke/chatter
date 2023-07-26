import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ErrorAlert from '../ErrorAlert';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const ProfileUpdateForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    role: 'Writer',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const togglePasswordShow = () => setPasswordShow(!passwordShow);
  const toggleConfirmPasswordShow = () => setConfirmPasswordShow(!confirmPasswordShow);

  const [loading, setLoading] = useState(false);

  const [updateError, setUpdateError] = useState('');

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email address'),
        password: Yup.string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string()
          .required('Confirm password is required')
          .oneOf([Yup.ref('password')], 'Passwords must match'),
      })}
      onSubmit={(values, actions) => {
        // handleLogin(values);
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
            Profile Update Form
          </Heading>

          {updateError && <ErrorAlert errorDescription={updateError} />}

          <FormControl>
            <Flex flexDir="column" gap="1.5rem">
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
                    w={{ base: '100%', lg: '24rem' }}
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
                    w={{ base: '100%', lg: '24rem' }}
                    h="3rem"
                  />
                  <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
              </Flex>

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
                    onClick={togglePasswordShow}
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

              <FormControl
                id="confirmPassword"
                isInvalid={Boolean(formik.errors.confirmPassword && formik.touched.confirmPassword)}
              >
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                  <Field
                    as={Input}
                    name="confirmPassword"
                    pr="4.5rem"
                    type={confirmPasswordShow ? 'text' : 'password'}
                    placeholder="**********"
                    h="3rem"
                  />
                  <InputRightElement
                    width="4.5rem"
                    onClick={toggleConfirmPasswordShow}
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

              <Button
                variant="solid"
                backgroundColor="#543EE0"
                color="#FFF"
                size="lg"
                width="100%"
                height="3rem"
                _hover={{ backgroundColor: '#7a67f4' }}
                type="submit"
                isLoading={loading}
                loadingText="Logging you in"
              >
                Update Profile
              </Button>
            </Flex>
          </FormControl>
        </Box>
      )}
    </Formik>
  );
};

export default ProfileUpdateForm;
