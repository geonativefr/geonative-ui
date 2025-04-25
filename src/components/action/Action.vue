<template>
  <component
    :is="getComponentType"
    v-bind="getComponentProps"
    :disabled="disabled"
    class="flex justify-between items-center w-full"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  actionClick: string | (() => void) | Promise<void> | null;
  disabled?: boolean;
}>();

const isInternalLink = typeof props.actionClick === 'string';
const isExternalLink = typeof props.actionClick === 'string' && props.actionClick.startsWith('http');
const isFunctionLink = typeof props.actionClick === 'function';

const getComponentType = computed(() => {
  if (isFunctionLink) {
    return 'button';
  }
  if (isExternalLink) {
    return 'a';
  }
  if (isInternalLink) {
    return 'router-link';
  }
  return 'button';
});

const getComponentProps = computed(() => {
  if (isFunctionLink) return { onClick: props.actionClick };
  if (isExternalLink) return { href: props.actionClick };
  if (isInternalLink) return { to: props.actionClick };
  return {};
});
</script>
