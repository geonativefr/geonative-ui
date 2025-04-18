<template>
  <div class="flex flex-col items-center gap-4 p-5">
    <div>
      <Button
        @click="isClickedButton = !isClickedButton"
      >Default</Button>
    </div>
    <div>
      <Button
        class="bg-blue-500"
        size="sm"
        @click="isClickedButton = !isClickedButton"
      >Button SM</Button>
    </div>
    <div>
      <Button
        class="bg-red-500"
        size="md"
        @click="isClickedButton = !isClickedButton"
      >Button MD</Button>
    </div>
    <div>
      <Button
        class="bg-green-500"
        size="lg"
        @click="isClickedButton = !isClickedButton"
      >Button LG</Button>
    </div>
    <div>
      <Button
        class="text-blue-500 bg-blue-100 rounded-full"
        :disabled="false"
        @click="isClickedButton = !isClickedButton"
      >Custom</Button>
    </div>
    <div>
      <Button
        :disabled="true"
        @click="isClickedButton = !isClickedButton"
      >MD Disable</Button>
    </div>
    <div>
      <Button
        class="bg-blue-500"
        :loading="true"
        loading-text="Loading..."
        @click="isClickedButton = !isClickedButton"
      >Loading...</Button>
    </div>
    <div>
      <Button
        class="bg-red-500"
        :loading="true"
        size="sm"
        @click="isClickedButton = !isClickedButton"
      >Loading...</Button>
      <p v-if="isClickedButton" class="mt-3 text-green-500">Button clicked !</p>
    </div>
    <div>
      <Button
        class="bg-green-500"
        :loading="true"
        loading-text="Loading..."
        @click="isClickedButton = !isClickedButton"
      >Loading...</Button>
    </div>
    <div>
      <Button
        class="bg-green-500"
        @click="isClickedButton = !isClickedButton"
      ><Icon name="bell" source="heroicons" /></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Icon } from '@geonative/ui/components';

const isClickedButton = ref(false);
</script>
