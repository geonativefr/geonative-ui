<template>
  <FormBuilder
    :schema="schema"
    :field-config="fieldConfig"
    :default-values="defaultValues"
    :dependencies="dependencies"
    @submit="handleSubmit"
  >
    <Button type="submit" variant="primary"> Submit </Button>
  </FormBuilder>
</template>

<script setup lang="ts">
import { Button, FormBuilder } from '@geonative/ui/components';
import * as z from 'zod';

const schema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(1, {
    message: 'Name must be at least 1 character long',
  }).max(20, {
    message: 'Name must be at most 20 characters long',
  }),
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  }).email(),
  age: z.number({
    required_error: 'Age is required',
    invalid_type_error: 'Age must be a number',
  }).min(18, {
    message: 'You must be at least 18 years old',
  }).max(99, {
    message: 'You must be under 100 years old',
  }).default(18).optional(),
  acceptTerms: z.boolean().refine(value => value, {
    message: 'You must accept the terms and conditions.',
    path: ['acceptTerms'],
  }),
  sendMeMails: z.boolean().optional(),
  birthday: z.coerce.date().optional(),
  color: z.enum(['red', 'green', 'blue']).optional(),
});
const fieldConfig = {
  name: {
    label: 'Name',
    inputProps: {
      type: 'text',
      placeholder: 'Enter your name',
    },
  },
  email: {
    label: 'Email',
    inputProps: {
      type: 'email',
      placeholder: 'Enter your email',
    },
  },
  age: {
    label: 'Age',
    inputProps: {
      type: 'number',
      placeholder: 'Enter your age',
    },
  },
  acceptTerms: {
    label: 'Accept Terms and Conditions',
    inputProps: {
      type: 'checkbox',
    },
  },
};
const defaultValues = {
  name: '',
  email: '',
  age: null,
  acceptTerms: false,
};
const dependencies = [
  {
    name: 'age',
    dependsOn: ['acceptTerms'],
    condition: (values: any) => values.acceptTerms,
  },
]
const handleSubmit = (data: any) => {
  console.log('Form submitted with values:', data);
};
</script>
