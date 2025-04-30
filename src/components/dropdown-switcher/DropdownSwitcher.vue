<template>
  <DropdownMenu :dropdown="dropdown" :items="props.accounts" position="right" align="start" class="">
    <Button size="lg" class="bg-white hover:bg-gray-100 text-black rounded-lg px-2 py-6">
      <div class="flex items-center justify-between gap-2">
        <Avatar
          :url="activeAccount.avatar"
          :is-square="true"
          :class="activeAccount.color"
          :initials="activeAccount.name.slice(0, 2)"
        />
        <span class="flex-1 text-center text-sm">
          <span class="font-semibold">{{ activeAccount.name }}</span>
        </span>
        <ChevronsUpDown class="size-5 ml-6" />
      </div>
    </Button>
    <template #header>
      <div class="flex items-center gap-2 font-bold">Change Account</div>
    </template>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import { Avatar, Button, DropdownMenu } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';
import { ref } from 'vue';
import type { Account } from '@geonative/ui/types';

const props = defineProps<{
  accounts: Array<Account>;
}>();

const activeAccount = ref(props.accounts[0]);

const emit = defineEmits(['accountChange']);

const changeAccount = (AccountId: number | string) => {
  activeAccount.value = props.accounts.find((account) => account.id === AccountId) || props.accounts[0];
  emit('accountChange', activeAccount.value);
};

const dropdown: DropdownMenuType = {
  sections: [
    props.accounts.map((account) => ({
      label: account.name,
      clickAction: () => {
        changeAccount(account.id);
      },
      avatarProps: {
        url: account.avatar,
        initials: account.name.slice(0, 2),
        class: account.color,
      },
    })),
    [
      {
        label: 'Add Account',
        clickAction: () => alert('Add Account features coming soon'),
        iconProps: { name: 'plus-circle', source: 'heroicons', type: 'outline', class: 'h-6 w-6' },
      },
    ],
  ],
};
</script>
