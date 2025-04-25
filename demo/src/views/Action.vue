<template>
  <h1 class="p-5 text-center">Action :</h1>
  <div class="flex flex-col items-center gap-4 p-5 self">
    <div>
      <Action actionClick="/">
        <Button>Internal Link</Button>
      </Action>
    </div>
    <div>
      <Action actionClick="https://github.com">
        <Button>External Link</Button>
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
import { Action, Button } from '@geonative/ui/components';

function callback() {
  alert('Alert from callback action');
}
</script>
