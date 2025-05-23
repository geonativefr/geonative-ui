<template>
  <div class="p-5">
    <h1 class="mb-3">NAVBAR USER :</h1>
    <p class="mb-3">with avatar:</p>
    <NavbarDropdown :dropdown="dropdown">
      <Avatar :url="user.avatar" :is-square="true" class="bg-red-500" :initials="user.name.slice(0, 2)" />
      <span class="flex flex-col text-left text-sm">
        <span class="font-semibold">{{ user.name }}</span>
        <span class="text-xs">{{ user.email }}</span>
      </span>
    </NavbarDropdown>
    <p class="mb-3 mt-10">without avatar:</p>
    <NavbarDropdown :dropdown="dropdown">
      <span class="flex flex-col text-left text-sm">
        <span class="font-semibold">{{ user.name }}</span>
        <span class="text-xs">{{ user.email }}</span>
      </span>
    </NavbarDropdown>
  </div>
</template>

<script setup lang="ts">
import { Avatar, NavbarDropdown } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';

const user = {
  name: 'alice',
  email: 'alice@example.com',
  avatar:
    'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
};

const dropdown: DropdownMenuType = {
  sections: [
    [
      {
        label: 'Upgrade to pro',
        clickAction: '/upgrade',
        shortcut: '⌘+U',
        iconProps: { name: 'star', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'Account',
        clickAction: '/account',
        iconProps: { name: 'user', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Billing',
        clickAction: '/billing',
        iconProps: { name: 'credit-card', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Notifications',
        clickAction: '/notifications',
        iconProps: { name: 'bell', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'Log out',
        clickAction: '/',
        iconProps: { name: 'arrow-left-start-on-rectangle', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
    ],
  ],
};
</script>
