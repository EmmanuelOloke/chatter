import * as Yup from 'yup';

export const signupValidationSchema = Yup.object({
  firstName: Yup.string().required('First name is required').min(2, 'First name is too short'),
  lastName: Yup.string().required('Last name is required').min(2, 'Last name is too short'),
  email: Yup.string().required('Email is required').email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});
