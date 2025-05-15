<template>
<div class="flex flex-col items-center justify-center min-h-screen p-5 space-y-10">
  <div>
      <Drawer>
        <template #trigger>
          <Button class="bg-amber-500 w-auto" size="lg">Right Drawer</Button>
        </template>

        <template #header>
          <DrawerTitle>
            This is a Title
          </DrawerTitle>
          <DrawerDescription>
            This is a Description
          </DrawerDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>

        </template>

      </Drawer>
    </div>

    <div>
      <Drawer direction="bottom">
        <template #trigger>
          <Button class="bg-violet-500 w-auto" size="lg">Bottom Drawer</Button>
        </template>

        <template #header>
          <DrawerTitle>
            This is a Title
          </DrawerTitle>
          <DrawerDescription>
            This is a Description
          </DrawerDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>

        </template>

      </Drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Drawer, Button } from '@geonative/ui/components'
import { DrawerDescription, DrawerTitle } from '@geonative/ui/shadcn/ui/drawer';

</script>
