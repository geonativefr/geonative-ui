<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent
      class="sm:max-w-md"
      @interact-outside="event => {
        const target = event.target as HTMLElement;
        if (target?.closest('[data-sonner-toaster]')) return event.preventDefault()
      }"
    >
      <DialogHeader>
        <DialogTitle>{{ props.title }}</DialogTitle>
        <DialogDescription>{{ props.description }}</DialogDescription>
      </DialogHeader>
      <div class="grid gap-4">
        <Button
          size="sm"
          class="px-3"
          @click="handleClick"
        >
          {{ props.action.label }}
        </Button>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Button } from '@geonative/ui/components'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@geonative/ui/shadcn/ui/dialog'
import { useSonner } from '@geonative/ui/composables';
import type { ActionType } from '@geonative/ui/types';

const props = withDefaults(defineProps<{
  title: string,
  description: string,
  action: ActionType
}>(), {
})

const { showInfoSonner } = useSonner();
function handleClick() {
  showInfoSonner(
    'Button clicked!',
    'This is a success message.',
    {
      label: 'Undo',
      clickAction: () => {
        console.log('Undo clicked');
      },
    }
  );
}


</script>