<template>
  <FormBuilder :schema="schema" :field-config="fieldConfig" :default-values="defaultValues" @submit="handleSubmit">
    <Button type="submit" variant="primary"> Submit </Button>
  </FormBuilder>
</template>

<script setup lang="ts">
import { Button, FormBuilder } from '@geonative/ui/components';
import * as z from 'zod';

const schema = z.object({
  firstname: z
    .string({
      required_error: 'Firstname is required',
      invalid_type_error: 'Firstname must be a string',
    })
    .min(1, {
      message: 'Firstname must be at least 1 character long',
    })
    .max(20, {
      message: 'Firstname must be at most 20 characters long',
    }),
  lastname: z
    .string({
      required_error: 'Lastname is required',
      invalid_type_error: 'Lastname must be a string',
    })
    .min(1, {
      message: 'Lastname must be at least 1 character long',
    })
    .max(20, {
      message: 'Lastname must be at most 20 characters long',
    }),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email()
    .optional(),
  age: z
    .number({
      required_error: 'Age is required',
      invalid_type_error: 'Age must be a number',
    })
    .min(18, {
      message: 'You must be at least 18 years old',
    })
    .max(99, {
      message: 'You must be under 100 years old',
    })
    .default(18)
    .optional(),
  acceptTerms: z.boolean().refine((value) => value, {
    message: 'You must accept the terms and conditions.',
    path: ['acceptTerms'],
  }),
  color: z.enum(['red', 'green', 'blue']).optional(),
});
const fieldConfig = {
  firstname: {
    label: 'What is your first name?',
    inputProps: {
      type: 'text',
      placeholder: 'Enter your name',
    },
  },
  lastname: {
    label: 'What is your last name?',
    inputProps: {
      type: 'text',
      placeholder: 'Enter your last name',
    },
  },
  email: {
    label: 'Do you have an email?',
    inputProps: {
      type: 'email',
      placeholder: 'Enter email if you want to receive emails',
    },
  },
  age: {
    label: 'How old are you?',
    inputProps: {
      type: 'number',
      placeholder: "If it's not too personal",
    },
  },
  acceptTerms: {
    label: 'Accept Terms and Conditions',
    inputProps: {
      type: 'checkbox',
    },
  },
  color: {
    label: 'What is your favorite color?',
    inputProps: {
      type: 'select',
      options: [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' },
      ],
    },
  },
};
const defaultValues = {
  firstname: 'Lounis',
  lastname: 'Bouchentouf',
};

const handleSubmit = (data: any) => {
  alert(JSON.stringify(data, null, 2));
};
</script>
