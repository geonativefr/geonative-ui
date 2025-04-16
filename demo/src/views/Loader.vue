<template>
  <div class="m-5 flex flex-col gap-5">
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold mb-5">Spinner</h2>
      <div class="flex gap-5">
        <Spinner size="sm" class="fill-red-500" />
        <Spinner size="md" />
        <Spinner size="lg" class="fill-green-600" />
      </div>
    </div>
    <div class="flex flex-col gap-2 w-xl">
      <h2 class="text-2xl font-bold mb-5">Progress</h2>
      <div class="grid grid-cols-1 gap-5">
        <Progress size="sm" :progress="progress" color="bg-red-500" class="bg-red-100" />
        <Progress size="md" :progress="progress" />
        <Progress size="lg" :progress="progress" color="bg-green-500" class="bg-green-100" />
      </div>
      <div class="flex flex-col gap-2 w-xl">
        <h2 class="text-2xl font-bold mb-5">Ping</h2>
        <div class="grid grid-cols-1 gap-5">
          <Ping size="sm" class="bg-red-500" />
          <Ping size="md" />
          <Ping size="lg" class="bg-green-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Spinner, Progress, Ping } from '@/components/loader';

const progress = ref(0);
function makeProgress() {
  if (progress.value >= 100) {
    progress.value = 0;
  } else {
    progress.value += 1;
  }
  setTimeout(() => {
    makeProgress();
  }, 100);
}
onMounted(() => {
  makeProgress();
});
</script>
