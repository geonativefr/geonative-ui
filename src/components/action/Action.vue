<template>
  <component
    :is="action.as"
    v-bind="!props.disabled && action.attr ? { [action.attr]: action.clickAction } : {}"
    :class="twMerge(props.disabled ? 'pointer-events-none cursor-not-allowed' : '', props.class)">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { ActionType, ClickActionType } from '@geonative/ui/types';
import { startsWithHttp } from '@geonative/ui/helpers';
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  actionClick: ClickActionType;
  disabled?: boolean;
  class?: string;
}>();

const isInternalLink = typeof props.actionClick === 'string';
const isExternalLink = typeof props.actionClick === 'string' && startsWithHttp(props.actionClick);
const isFunctionLink = typeof props.actionClick === 'function';

const action = getAction(props.actionClick);

function getAction(clickAction: ClickActionType): ActionType {
  if (isFunctionLink) {
    return {
      as: 'span',
      attr: 'onClick',
      clickAction: clickAction,
    };
  }
  if (isExternalLink) {
    return {
      as: 'a',
      attr: 'href',
      clickAction: clickAction,
    };
  }
  if (isInternalLink) {
    return {
      as: 'router-link',
      attr: 'to',
      clickAction: clickAction,
    };
  }
  return {
    as: 'span',
    attr: undefined,
    clickAction: clickAction,
  };
}
</script>
