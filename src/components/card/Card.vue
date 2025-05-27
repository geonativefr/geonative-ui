<template>
  <ShadcnCard :class="twMerge('w-full h-full justify-between', props.class)">
    <ShadcnCardHeader>
      <ShadcnCardTitle>
        <slot name="title" />
      </ShadcnCardTitle>
      <ShadcnCardDescription>
        <slot name="description" />
      </ShadcnCardDescription>
    </ShadcnCardHeader>

    <ShadcnCardContent class="flex items-center justify-center">
      <slot />
    </ShadcnCardContent>

    <ShadcnCardFooter class="flex items-start ">
      <slot name="footer" />
    </ShadcnCardFooter>
  </ShadcnCard>
</template>

<script setup lang="ts">
import {
  Card as ShadcnCard,
  CardHeader as ShadcnCardHeader,
  CardContent as ShadcnCardContent,
  CardFooter as ShadcnCardFooter,
  CardTitle as ShadcnCardTitle,
  CardDescription as ShadcnCardDescription,
} from '@geonative/ui/shadcn/ui/card';
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  class?: string;
}>();
</script>
