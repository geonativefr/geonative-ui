<template>
<div class="flex items-center justify-center min-h-screen p-5">
  <Drawer>
      <template #trigger>
        <Button class="bg-green-500 w-auto" size="lg">Button LG</Button>
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
</template>

<script setup lang="ts">
import { Drawer, Button } from '@geonative/ui/components'
import { DrawerDescription, DrawerTitle } from '@geonative/ui/shadcn/ui/drawer';

</script>
