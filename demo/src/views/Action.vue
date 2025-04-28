<template>
  <h1 class="p-5 text-center">Action :</h1>
  <div class="flex flex-col items-center gap-4 p-5">
    <div>
      <Action actionClick="/">
        <span class="text-blue-500 underline">Internal Link</span>
      </Action>
    </div>
    <div>
      <Action class="flex gap-1" actionClick="https://github.com">
        <span class="text-blue-500 underline">External Link</span>
        <Icon name="arrow-top-right-on-square" source="heroicons" type="solid" class="w-5 h-5 text-blue-500" />
      </Action>
    </div>
    <div>
      <Action :actionClick="callback">
        <Button>Alert</Button>
      </Action>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Action, Button, Icon } from '@geonative/ui/components';

function callback() {
  alert('Alert from callback action');
}
</script>
