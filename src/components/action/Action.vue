<template>
  <component
    :is="getAction(props.actionType, props.actionClick).as"
    v-bind="getAction(props.actionType, props.actionClick).attr"
    :disabled="props.disabled"
    :class="props.class"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { ActionType, clickActionType } from '@geonative/ui/types';
import { getAction } from '@geonative/ui/types';

const props = defineProps<{
  actionType?: ActionType;
  actionClick: clickActionType;
  disabled?: boolean;
  class?: string;
}>();
</script>
