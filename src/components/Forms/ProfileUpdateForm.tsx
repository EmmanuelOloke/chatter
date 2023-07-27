import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ErrorAlert from '../ErrorAlert';
import { EditIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import FormSubmitButton from '../Buttons/FormSubmitButton';

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
        firstName: Yup.string()
          .required('First name is required')
          .min(2, 'First name is too short'),
        lastName: Yup.string().required('Last name is required').min(2, 'Last name is too short'),
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
          {updateError && <ErrorAlert errorDescription={updateError} />}

          <FormControl>
            <Flex flexDir="column" gap="1.5rem" alignItems="center">
              <HStack alignItems="flex-end" gap={0} position="relative">
                <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                <Box borderRadius="50%" position="absolute" right="0" backgroundColor="#543EE0">
                  <IconButton
                    size="md"
                    borderRadius="50%"
                    aria-label="Edit Profile Image"
                    icon={<EditIcon />}
                    color="#FFF"
                    background="none"
                    _hover={{ backgroundColor: '#7a67f4' }}
                  />
                </Box>
              </HStack>

              <Flex gap={2} flexDir={{ base: 'column', lg: 'row' }}>
                <FormControl
                  id="firstName"
                  isInvalid={Boolean(formik.errors.firstName && formik.touched.firstName)}
                >
                  <FormLabel>First Name</FormLabel>
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
                  <FormLabel>Last Name</FormLabel>
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
                <FormLabel>Email Address</FormLabel>
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  placeholder="ironman@jarvis.com"
                  h="3rem"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl id="role">
                <FormLabel>Role</FormLabel>
                <Select defaultValue="Writer" h="3rem" name="role" onChange={formik.handleChange}>
                  <option value="Writer">Writer</option>
                  <option value="Reader">Reader</option>
                </Select>
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

              <FormSubmitButton
                text="Update Profile"
                loading={loading}
                loadingText="Updating your profile"
              />
            </Flex>
          </FormControl>
        </Box>
      )}
    </Formik>
  );
};

export default ProfileUpdateForm;
