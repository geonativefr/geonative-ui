<template>
  <ShadcnCard :class="`w-[${cardSize}]`">
    <ShadcnCardHeader>
      <slot name="header" />
    </ShadcnCardHeader>

    <ShadcnCardContent>
      <slot />
    </ShadcnCardContent>

    <ShadcnCardFooter class="flex justify-between px-6 pb-6">
      <slot name="footer" />
    </ShadcnCardFooter>
  </ShadcnCard>
</template>

<script setup lang="ts">
import { Card as ShadcnCard, CardHeader as ShadcnCardHeader, CardContent as ShadcnCardContent, CardFooter as ShadcnCardFooter } from '@geonative/ui/shadcn/ui/card';
import { computed } from 'vue';
import type { CustomSize } from '@geonative/ui/types';

const props = withDefaults(
  defineProps<{
    size?: CustomSize;
  }>(),
  {
    size: 'md',
  }
);

const cardSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return '300px';
    case 'md':
      return '350px';
    case 'lg':
      return '400px';
    default:
      return '';
  }
});

console.log(`w-${cardSize.value}`);
</script>
