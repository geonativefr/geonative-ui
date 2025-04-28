<template>
  <component
    :is="getAction(props.actionType).as"
    v-bind="getAction(props.actionType).attr"
    :disabled="props.disabled"
    :class="props.class"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { ActionType, ClickActionType } from '@geonative/ui/types';
import { startsWithHttp } from '@geonative/ui/helpers';

const props = defineProps<{
  actionType?: ActionType;
  actionClick: ClickActionType;
  disabled?: boolean;
  class?: string;
}>();

const isInternalLink = typeof props.actionClick.type === 'string';
const isExternalLink = typeof props.actionClick.type === 'string' && startsWithHttp(props.actionClick.type);
const isFunctionLink = typeof props.actionClick.type === 'function';

function getAction(clickAction: ActionType | undefined) {
  if (isFunctionLink) {
    return {
      as: 'span',
      attr: { onClick: props.actionClick.type },
      clickAction: clickAction,
    };
  }
  if (isExternalLink) {
    return {
      as: 'a',
      attr: { href: props.actionClick.type },
      clickAction: clickAction,
    };
  }
  if (isInternalLink) {
    return {
      as: 'router-link',
      attr: { to: props.actionClick.type },
      clickAction: clickAction,
    };
  }
  return {
    as: 'span',
    attr: {},
    clickAction: clickAction,
  };
}
</script>
