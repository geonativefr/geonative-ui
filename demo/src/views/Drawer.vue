<template>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-10">
    <div>
      <Drawer ref="drawerRightDissmissibleFalseRef" :dismissible="false">
        <template #trigger>
          <Button @click="drawerRightDissmissibleFalseRef?.open()" class="bg-primary w-auto" size="lg">Right Drawer + dismissible false</Button>
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
          <Button @click="drawerRightDissmissibleFalseRef?.close()">Close</Button>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer ref="drawerRightRef">
        <template #trigger>
          <Button @click="drawerRightRef?.open()" class="bg-primary w-auto" size="lg">Right Drawer</Button>
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
          <Button @click="drawerRightRef?.close()">Close</Button>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer direction="bottom" ref="drawerBottomRef">
        <template #trigger>
          <Button @click="drawerBottomRef?.open()" class="bg-secondary w-auto" size="lg">Bottom Drawer</Button>
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
          <Button @click="drawerBottomRef?.close()">Close</Button>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer direction="left" ref="drawerLeftRef">
        <template #trigger>
          <Button @click="drawerLeftRef?.open()" class="bg-primary w-auto" size="lg">Left Drawer</Button>
        </template>

        <template #title>
          <span>This is a Title</span>
        </template>

        <template #description>
          <span>This is a Description</span>
        </template>

        <div>This is a Content</div>
        <Button @click="drawerLeftRef?.close()">Close</Button>
      </Drawer>
    </div>

    <div>
      <Drawer direction="top" ref="drawerTopRef">
        <template #trigger>
          <Button @click="drawerTopRef?.open()" class="bg-secondary w-auto" size="lg">Top Drawer</Button>
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
          <Button @click="drawerTopRef?.close()">Close</Button>
        </template>
      </Drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Drawer, Button } from '@geonative/ui/components';
import { useTemplateRef } from 'vue';

const drawerRightDissmissibleFalseRef = useTemplateRef('drawerRightDissmissibleFalseRef')
const drawerRightRef = useTemplateRef('drawerRightRef')
const drawerBottomRef = useTemplateRef('drawerBottomRef');
const drawerLeftRef = useTemplateRef('drawerLeftRef');
const drawerTopRef = useTemplateRef('drawerTopRef');

</script>
