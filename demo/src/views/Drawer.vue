<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-5 space-y-10">
    <div>
      <Drawer :open="isOpenDrawerRight">
        <template #trigger>
          <Button @click="toggleDrawerRight" class="bg-primary w-auto" size="lg">Right Drawer + modal false</Button>
        </template>

        <template #title>
          <span>This is a Title</span>
        </template>

        <template #description>
          <span>This is a Description</span>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
          <Button @click="toggleDrawerRight">Close</Button>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer direction="bottom" :open="isOpenDrawerBottom">
        <template #trigger>
          <Button @click="toggleDrawerBottom" class="bg-secondary w-auto" size="lg">Bottom Drawer</Button>
        </template>

        <template #title>
          <span>This is a Title</span>
        </template>

        <template #description>
          <span>This is a Description</span>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
          <Button @click="toggleDrawerBottom">Close</Button>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer direction="left" :open="isOpenDrawerLeft">
        <template #trigger>
          <Button @click="toggleDrawerLeft" class="bg-primary w-auto" size="lg">Left Drawer</Button>
        </template>

        <template #title>
          <span>This is a Title</span>
        </template>

        <template #description>
          <span>This is a Description</span>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
          <Button @click="toggleDrawerLeft">Close</Button>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer direction="top" :open="isOpenDrawerTop">
        <template #trigger>
          <Button @click="toggleDrawerTop" class="bg-secondary w-auto" size="lg">Top Drawer</Button>
        </template>

        <template #title>
          <span>This is a Title</span>
        </template>

        <template #description>
          <span>This is a Description</span>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
          <Button @click="toggleDrawerTop">Close</Button>
        </template>
      </Drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Drawer, Button } from '@geonative/ui/components';
import { ref } from 'vue';

const isOpenDrawerRight = ref(false);
const isOpenDrawerBottom = ref(false);
const isOpenDrawerLeft = ref(false);
const isOpenDrawerTop = ref(false);

function toggleDrawerRight() {
  isOpenDrawerRight.value = !isOpenDrawerRight.value;
}

function toggleDrawerBottom() {
  isOpenDrawerBottom.value = !isOpenDrawerBottom.value;
}

function toggleDrawerLeft() {
  isOpenDrawerLeft.value = !isOpenDrawerLeft.value;
}

function toggleDrawerTop() {
  isOpenDrawerTop.value = !isOpenDrawerTop.value;
}
</script>
