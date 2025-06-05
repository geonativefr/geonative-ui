<template>
  <ShadcnCard :class="twMerge('bg-card', props.class)">
    <ShadcnCardHeader class="p-0">
      <ShadcnCardTitle class="px-4 text-card-foreground">
        <slot name="title" />
      </ShadcnCardTitle>
      <ShadcnCardDescription class="px-4 text-card-foreground/60">
        <slot name="description" />
      </ShadcnCardDescription>
      <ShadcnSeparator />
    </ShadcnCardHeader>

    <ShadcnCardContent class="px-4 text-card-foreground">
      <slot />
    </ShadcnCardContent>

    <ShadcnCardFooter class="p-0 flex-col items-start text-card-foreground">
      <ShadcnSeparator />
      <div class="pt-4 px-4">
        <slot name="footer" />
      </div>
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
import { Separator as ShadcnSeparator } from '@geonative/ui/shadcn/ui/separator';
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  class?: string;
}>();
</script>
