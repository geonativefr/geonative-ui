<template>
  <component
    :is="getAction(props.actionClick).as"
    v-bind="getAction(props.actionClick).attr"
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
  actionClick: ClickActionType;
  disabled?: boolean;
  class?: string;
}>();

const isInternalLink = typeof props.actionClick === 'string';
const isExternalLink = typeof props.actionClick === 'string' && startsWithHttp(props.actionClick);
const isFunctionLink = typeof props.actionClick === 'function';

function getAction(clickAction : ClickActionType) : ActionType {
  if (isFunctionLink) {
    return {
      as: 'span',
      attr: { onClick: props.actionClick },
      clickAction: clickAction,
    };
  }
  if (isExternalLink) {
    return {
      as: 'a',
      attr: { href: props.actionClick },
      clickAction: clickAction,
    };
  }
  if (isInternalLink) {
    return {
      as: 'router-link',
      attr: { to: props.actionClick },
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
