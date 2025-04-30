<template>
  <AutoForm
    :form="form"
    :schema="props.schema"
    :field-config="props.fieldConfig"
    @submit="(data) => emit('submit', data)"
  >
    <slot />
    <slot name="customAutoForm" />
  </AutoForm>
</template>

<script setup lang="ts">
import { AutoForm } from '@geonative/ui/shadcn/ui/auto-form';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod'
import type { ZodObject } from 'zod';
import * as z from 'zod';
import { onMounted } from 'vue';

const emit = defineEmits(['submit']);

const props = withDefaults(defineProps<{
  schema: ZodObject<z.ZodRawShape>,
  fieldConfig?: Record<any, any>,
  defaultValues?: Record<any, any>,
  dependencies?: object[],
}>(), {
  schema: () => z.object({
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
  }),
  fieldConfig: () => ({
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
        showLabel: false,
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
      label: 'Accept Terms',
      inputProps: {
        placeholder: 'Accept terms and conditions',
      },
      component: 'checkbox',
    },
  }),
});
// Set up the form using Vee-Validate
const form = useForm({
  validationSchema: toTypedSchema(props.schema),
})
onMounted(() => {
  // Check if default values are provided
  if (props.defaultValues) {
    // Set default values for the form fields
    props.defaultValues.map((value: any, key: any) => {
      form.setFieldValue(key, value);
    });
  }
});

</script>
