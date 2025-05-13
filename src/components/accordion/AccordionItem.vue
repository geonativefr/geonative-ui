<template>
  <ShadcnAccordionItem :value="generateRandomKey()">
    <ShadcnAccordionTrigger>
      <slot name="title" />
    </ShadcnAccordionTrigger>
    <ShadcnAccordionContent>
      <slot />
    </ShadcnAccordionContent>
  </ShadcnAccordionItem>
</template>

<script setup lang="ts">
import {
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
  AccordionContent as ShadcnAccordionContent,
} from '@geonative/ui/shadcn/ui/accordion';
import { generateRandomKey } from '@geonative/ui/helpers';
</script>
