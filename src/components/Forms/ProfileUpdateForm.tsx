import {
  Avatar,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik, FormikValues } from 'formik';
import { useState } from 'react';
import ErrorAlert from '../ErrorAlert';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import FormSubmitButton from '../Buttons/FormSubmitButton';
import axios from 'axios';
import { profileUpdateValidationSchema } from '../../../lib/yup-validation-schemas/profile-update-form';
import ImageUploadButton from '../Buttons/ImageUploadButton';

import { UserProps, useUserContext } from '@/contexts/UserContext';

const ProfileUpdateForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const togglePasswordShow = () => setPasswordShow(!passwordShow);
  const toggleConfirmPasswordShow = () => setConfirmPasswordShow(!confirmPasswordShow);

  const [loading, setLoading] = useState(false);

  const [updateError, setUpdateError] = useState('');

  const [imageUrl, setImageUrl] = useState<string>('');

  const { user, setUser } = useUserContext();

  const id = user?._id;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(
      (prevUser) =>
        ({
          ...prevUser,
          [name]: value,
        } as UserProps)
    );
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUser(
      (prevUser) =>
        ({
          ...prevUser,
          [name]: value,
        } as UserProps)
    );
  };

  const handleImageChange = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = event.target as HTMLImageElement;
    const imgSrc = imgElement.src;
    const name = imgElement.alt;
    setUser(
      (prevUser) =>
        ({
          ...prevUser,
          [name]: imgSrc,
        } as UserProps)
    );
  };

  const handleUpdate = async (values: any) => {
    setLoading(true);

    try {
      const response = await axios.put(`/api/user/${id}`, JSON.stringify(values));

      if (response.status === 200) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    console.log('we will make some updates here', values);
  };

  return (
    <Formik
      initialValues={user as FormikValues}
      enableReinitialize={true}
      validationSchema={profileUpdateValidationSchema}
      onSubmit={(values) => {
        handleUpdate(values);
      }}
    >
      {(formik) => (
        <Box as="form" onSubmit={formik.handleSubmit}>
          {updateError && <ErrorAlert errorDescription={updateError} />}

          <FormControl>
            <Flex flexDir="column" gap="1.5rem" alignItems="center">
              <VStack gap={5}>
                <Avatar
                  size="2xl"
                  name="profileImage"
                  onLoad={handleImageChange}
                  src={imageUrl ? imageUrl : user?.profileImage}
                />

                <ImageUploadButton setImageUrl={setImageUrl} />
              </VStack>

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
                    value={user?.firstName}
                    onChange={handleInputChange}
                    w={{ base: '100%', lg: '24rem' }}
                    h="3rem"
                  />
                  <FormErrorMessage>{formik.errors.firstName as string}</FormErrorMessage>
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
                    value={user?.lastName}
                    onChange={handleInputChange}
                    w={{ base: '100%', lg: '24rem' }}
                    h="3rem"
                  />
                  <FormErrorMessage>{formik.errors.lastName as string}</FormErrorMessage>
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
                  value={user?.email}
                  onChange={handleInputChange}
                  placeholder="ironman@jarvis.com"
                  h="3rem"
                />
                <FormErrorMessage>{formik.errors.email as string}</FormErrorMessage>
              </FormControl>

              <FormControl id="role">
                <FormLabel>Role</FormLabel>
                <Select value={user?.role} h="3rem" name="role" onChange={handleSelectChange}>
                  <option value="Writer">Writer</option>
                  <option value="Reader">Reader</option>
                </Select>
              </FormControl>

              <FormControl
                id="profession"
                isInvalid={Boolean(formik.errors.profession && formik.touched.profession)}
              >
                <FormLabel>Profession</FormLabel>
                <Field
                  as={Input}
                  name="profession"
                  type="text"
                  value={user?.profession}
                  onChange={handleInputChange}
                  placeholder="Profession"
                  h="3rem"
                />
                <FormErrorMessage>{formik.errors.profession as string}</FormErrorMessage>
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
                <FormErrorMessage>{formik.errors.password as string}</FormErrorMessage>
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
                <FormErrorMessage>{formik.errors.confirmPassword as string}</FormErrorMessage>
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
