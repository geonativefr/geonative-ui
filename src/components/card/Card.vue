<template>
  <ShadcnCard :class="props.class">
    <ShadcnCardHeader class="p-0">
      <ShadcnCardTitle class="px-4">
        <slot name="title" />
      </ShadcnCardTitle>
      <ShadcnCardDescription class="px-4">
        <slot name="description" />
      </ShadcnCardDescription>
      <ShadcnSeparator />
    </ShadcnCardHeader>

    <ShadcnCardContent class="px-4">
      <slot />
    </ShadcnCardContent>

    <ShadcnCardFooter class="p-0 flex flex-col items-start">
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

const props = defineProps<{
  class?: string;
}>();
</script>
