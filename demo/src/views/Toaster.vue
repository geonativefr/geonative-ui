<template>
  <div class="p-5">
    <Button :loading="isClickedButton" @click="handleClick" loading-text="You can click on undo button"
      >Show a toast</Button
    >
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Toaster } from '@geonative/ui/components';
import { useSonner } from '@geonative/ui/composables';

const isClickedButton = ref(false);
const { showSuccessSonner } = useSonner();

function handleClick() {
  isClickedButton.value = true;
  showSuccessSonner('Button clicked!', 'This is a success message.', {
    label: 'Undo',
    clickAction: () => {
      isClickedButton.value = false;
    },
  });
  setTimeout(() => {
    isClickedButton.value = false;
  }, 5000);
}
</script>
