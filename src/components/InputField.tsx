// import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
// import { Field, FieldHookConfig, useField } from 'formik';
// import React from 'react';

// type FieldProps = {
//   label: string;
//   props: FieldHookConfig<any>;
// };

// const InputField = ({ label, ...props }: FieldProps) => {
//   const [field, meta] = useField(props.name);
//   return (
//     <FormControl id="firstName" isInvalid={Boolean(meta.error && meta.touched)}>
//       <FormLabel>{label}</FormLabel>
//       <Field as={Input} w={{ base: '100%', lg: '16rem' }} h="3rem" {...field} {...props} />
//       <FormErrorMessage>{meta.error}</FormErrorMessage>
//     </FormControl>
//   );
// };

// export default InputField;
