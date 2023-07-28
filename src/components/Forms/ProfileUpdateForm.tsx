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
  Text,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useEffect, useState } from 'react';
import ErrorAlert from '../ErrorAlert';
import { EditIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import FormSubmitButton from '../Buttons/FormSubmitButton';
import axios, { AxiosResponse } from 'axios';
import { useSearchParams } from 'next/navigation';
import { profileUpdateValidationSchema } from '../../../lib/yup-validation-schemas/profile-update-form';

const ProfileUpdateForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const togglePasswordShow = () => setPasswordShow(!passwordShow);
  const toggleConfirmPasswordShow = () => setConfirmPasswordShow(!confirmPasswordShow);

  const [loading, setLoading] = useState(false);

  const [updateError, setUpdateError] = useState('');

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  type UserProps = {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    password: string;
    confirmPassword: string;
    profileImage: string;
    _v: number;
  };

  const [user, setUser] = useState<UserProps>({
    _id: '',
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: '',
    _v: 0,
  });

  const fetchData = async (id: string | null) => {
    const response = await axios.get(`/api/user/${id}`);
    const userData = response.data;
    setUser(userData);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = (values: any) => {
    console.log('we will make some updates here');
  };

  console.log(user);

  return (
    <Formik
      initialValues={user}
      enableReinitialize={true}
      validationSchema={profileUpdateValidationSchema}
      onSubmit={(values) => {
        handleUpdate(values);
        console.log('Are you there?');
      }}
    >
      {(formik) => (
        <Box as="form" onSubmit={formik.handleSubmit}>
          {updateError && <ErrorAlert errorDescription={updateError} />}

          <FormControl>
            <Flex flexDir="column" gap="1.5rem" alignItems="center">
              <HStack alignItems="flex-end" gap={0} position="relative">
                <Avatar
                  size="2xl"
                  name={`${user.firstName} ${user.lastName}`}
                  src={user.profileImage}
                />
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
                    value={user.firstName}
                    onChange={handleInputChange}
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
                    value={user.lastName}
                    onChange={handleInputChange}
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
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="ironman@jarvis.com"
                  h="3rem"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl id="role">
                <FormLabel>Role</FormLabel>
                <Select value={user.role} h="3rem" name="role" onChange={handleSelectChange}>
                  <option value="Writer">Writer</option>
                  <option value="Reader">Reader</option>
                </Select>
              </FormControl>

              <FormControl
                id="login-password"
                isInvalid={Boolean(formik.errors.password && formik.touched.password)}
              >
                <FormLabel>Reset Password</FormLabel>
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
