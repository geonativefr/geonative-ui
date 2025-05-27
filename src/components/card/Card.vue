<template>
  <ShadcnCard :class="`w-[350px ]`">
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

const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {
    class: ''
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
