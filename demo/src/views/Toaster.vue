<template>
  <div class="grid grid-cols-1 p-5 gap-4 justify-items-center">
    <p class="mt-2 text-center">
      This is a default toast message with action. <br />
      You can click on the action button. (Action undo loading) <br />
    </p>
    <Button :loading="isClickedButton" @click="handleClick" loading-text="You can click on undo button"
      >Show default toast with action</Button
    >
    <p class="mt-2 text-center">
      This is a promise toast message. <br />
      You can click on the undo button to undo the action. <br />
      Only 3 toast are visible by default.
    </p>
    <Button
      class="bg-blue-500"
      @click="showPromiseSonner(promise, 'Waiting for promise to resolve', 'This is a promise toast message')"
      >Show promise toast</Button
    >
    <p class="mt-2 text-center">Bellow you can find the other types of toast. <br /></p>
    <Button class="bg-blue-500" @click="showInfoSonner('This is an info')">Show info toast</Button>
    <Button class="bg-red-500" @click="showErrorSonner('Error !', 'Please retry now !')">Show error toast</Button>
    <Button class="bg-green-500" @click="showSuccessSonner('Success !', 'You\'re lucky !')">Show success toast</Button>
    <Button class="bg-orange-500" @click="showWarningSonner('Warning !', 'Please be warn !')"
      >Show warning toast</Button
    >
  </div>
  <Toaster />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Toaster } from '@geonative/ui/components';
import { useSonner } from '@geonative/ui/composables';

const isClickedButton = ref(false);
const { showDefaultSonner, showSuccessSonner, showInfoSonner, showErrorSonner, showWarningSonner, showPromiseSonner } =
  useSonner();

const promise = async () : Promise<void> => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 10000);
  });
};

function handleClick() {
  isClickedButton.value = true;
  showDefaultSonner('Button clicked!', 'This is a success message.', {
    label: 'Action',
    clickAction: () => {
      isClickedButton.value = false;
    },
  });
  setTimeout(() => {
    isClickedButton.value = false;
  }, 5000);
}
</script>
