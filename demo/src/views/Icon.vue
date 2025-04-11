<template>
  <div class="m-5 grid grid-cols-1 gap-5 text-sm">
    <div class="flex justify-between gap-10">
      <span>Icon blue</span>
      <Icon name="antenna" class="w-4 h-4 fill-blue-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Icon default color</span>
      <Icon name="battery_batt-level-2" class="w-6 h-6" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Icon green</span>
      <Icon name="alert_actions_push-notification" class="w-5 h-5 text-green-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Missing icon</span>
      <Icon name="alert" class="w-5 h-5 text-green-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue';
</script>