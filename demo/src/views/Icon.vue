<template>
  <div class="m-5 grid grid-cols-1 gap-5 text-sm">
    <div class="flex justify-between gap-10">
      <span>Icon blue</span>
      <Icon name="antenna" source="svg" class="w-4 h-4 fill-blue-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Icon default color</span>
      <Icon name="battery_batt-level-2" source="svg" class="w-6 h-6" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Icon green</span>
      <Icon name="alert_actions_push-notification" source="svg" class="w-5 h-5 text-green-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Missing icon</span>
      <Icon name="alert" source="svg" class="w-5 h-5 text-green-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Lucide icon</span>
      <Icon name="AlertCircle" source="lucide" class="w-5 h-5 text-pink-700" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Heroicon solid</span>
      <Icon name="academic-cap" source="heroicons" type="solid" class="w-5 h-5 text-yellow-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Heroicon outline</span>
      <Icon name="academic-cap" source="heroicons" type="outline" class="w-5 h-5 text-orange-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@geonative/ui/components/icons/Icon.vue';
</script>
