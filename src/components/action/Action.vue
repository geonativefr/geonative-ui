<template>
  <component :is="getComponentType" v-bind="getComponentProps" :disabled="disabled">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { startsWithHttp } from '@geonative/ui/helpers';

const props = defineProps<{
  actionClick: string | (() => void) | Promise<void> | null;
  disabled?: boolean;
}>();

const isInternalLink = typeof props.actionClick === 'string';
const isExternalLink = typeof props.actionClick === 'string' && startsWithHttp(props.actionClick);
const isFunctionLink = typeof props.actionClick === 'function';

const getComponentType = computed(() => {
  if (isFunctionLink) {
    return 'span';
  }
  if (isExternalLink) {
    return 'a';
  }
  if (isInternalLink) {
    return 'router-link';
  }
  return 'span';
});

const getComponentProps = computed(() => {
  if (isFunctionLink) return { onClick: props.actionClick };
  if (isExternalLink) return { href: props.actionClick };
  if (isInternalLink) return { to: props.actionClick };
  return {};
});
</script>
