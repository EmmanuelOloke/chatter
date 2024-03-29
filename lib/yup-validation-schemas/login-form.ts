import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
