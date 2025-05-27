<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-5 space-y-10">
    <div>
      <Drawer>
        <template #trigger>
          <Button class="bg-amber-500 w-auto" size="lg">Right Drawer</Button>
        </template>

        <template #header>
          <DrawerTitle> This is a Title </DrawerTitle>
          <DrawerDescription> This is a Description </DrawerDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer direction="bottom">
        <template #trigger>
          <Button class="bg-violet-500 w-auto" size="lg">Bottom Drawer</Button>
        </template>

        <template #header>
          <DrawerTitle> This is a Title </DrawerTitle>
          <DrawerDescription> This is a Description </DrawerDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer direction="left">
        <template #trigger>
          <Button class="bg-green-500 w-auto" size="lg">Left Drawer</Button>
        </template>

        <template #header>
          <DrawerTitle> This is a Title </DrawerTitle>
          <DrawerDescription> This is a Description </DrawerDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Drawer>
    </div>

    <div>
      <Drawer direction="top">
        <template #trigger>
          <Button class="bg-pink-500 w-auto" size="lg">Top Drawer</Button>
        </template>

        <template #header>
          <DrawerTitle> This is a Title </DrawerTitle>
          <DrawerDescription> This is a Description </DrawerDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Drawer, Button, DrawerTitle, DrawerDescription } from '@geonative/ui/components';
</script>
