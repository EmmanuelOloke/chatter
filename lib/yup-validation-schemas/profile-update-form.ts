import * as Yup from 'yup';

export const profileUpdateValidationSchema = Yup.object({
  firstName: Yup.string().required('First name is required').min(2, 'First name is too short'),
  lastName: Yup.string().required('Last name is required').min(2, 'Last name is too short'),
  email: Yup.string().required('Email is required').email('Invalid email address'),
  profession: Yup.string().required('Profession is required').min(2, 'Profession is too short'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});
