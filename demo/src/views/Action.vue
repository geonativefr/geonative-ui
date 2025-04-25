<template>
  <div class="flex flex-col items-center gap-4 p-5 self">
    <div>
    <Action :actionClick="internalLink">
      <Button>Internal Link</Button>
    </Action>
    </div>
    <div>
    <Action :actionClick="externalLink">
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

function internalLink() {
  window.location.href = '/';
}

function externalLink() {
  window.location.href = 'https://github.com';
}

function callback() {
  alert('Alert from callback action');
}
</script>