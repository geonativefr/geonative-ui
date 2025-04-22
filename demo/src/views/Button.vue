<template>
  <div class="flex flex-col items-center gap-4 p-5">
    <div>
      <Button :loading="isClickedButton" @click="handleClick">Default</Button>
      <Button class="bg-blue-500" :loading="isClickedButton" @click="handleClick">Button</Button>
    </div>
    <div>
      <Button class="bg-red-500" size="md" :loading="isClickedButton" @click="handleClick">Button MD</Button>
    </div>
    <div>
      <Button class="bg-green-500" size="lg" :loading="isClickedButton" @click="handleClick">Button LG</Button>
    </div>
    <div>
      <Button
        class="text-blue-500 bg-blue-100 rounded-full"
        :disabled="false"
        :loading="isClickedButton"
        @click="handleClick"
        >Custom</Button
      >
    </div>
    <div>
      <Button :disabled="true" :loading="isClickedButton" @click="handleClick">MD Disable</Button>
    </div>
    <div>
      <Button class="bg-blue-500" :loading="isClickedButton" loading-text="Loading..." @click="handleClick"
        >Button</Button
      >
    </div>
    <div>
      <Button class="bg-red-500" :loading="isClickedButton" size="sm" @click="handleClick">Button</Button>
    </div>
    <div>
      <Button class="bg-green-500" :loading="isClickedButton" loading-text="Loading..." @click="handleClick"
        >Button</Button
      >
    </div>
    <div>
      <Button class="bg-green-500" :loading="isClickedButton" @click="handleClick"
        ><Icon name="bell" source="heroicons"
      /></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Icon } from '@geonative/ui/components';

const isClickedButton = ref(false);

function handleClick() {
  isClickedButton.value = true;
  setTimeout(() => {
    isClickedButton.value = false;
  }, 2000);
}
</script>
