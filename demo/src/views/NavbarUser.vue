<template>
  <div class="p-5">
    <h1 class="mb-3">NAVBAR USER :</h1>
    <p class="mb-3">with avatar:</p>
    <NavbarUser :sections="dropdownMenuNavbarUser.sections">
      <Avatar :url="user.avatar" :is-square="true" class="bg-red-500" :initials="user.name.slice(0, 2)" />
      <span class="flex flex-col text-left text-sm">
        <span class="font-semibold">{{ user.name }}</span>
        <span class="text-xs">{{ user.email }}</span>
      </span>
    </NavbarUser>
    <p class="mb-3 mt-10">without avatar:</p>
    <NavbarUser :sections="dropdownMenuNavbarUser.sections">
      <span class="flex flex-col text-left text-sm">
        <span class="font-semibold">{{ user.name }}</span>
        <span class="text-xs">{{ user.email }}</span>
      </span>
    </NavbarUser>
  </div>
</template>

<script setup lang="ts">
import { Avatar, NavbarUser } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';

const user = {
  name: 'alice',
  email: 'alice@example.com',
  avatar:
    'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
};

const dropdownMenuNavbarUser: DropdownMenuType = {
  sections: [
    [
      {
        label: 'Upgrade to pro',
        url: '/upgrade',
        shortcut: '⌘+U',
        iconProps: { name: 'star', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'Account',
        url: '/account',
        iconProps: { name: 'user', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Billing',
        url: '/billing',
        iconProps: { name: 'credit-card', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Notifications',
        url: '/notifications',
        iconProps: { name: 'bell', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'Log out',
        url: '/',
        iconProps: { name: 'arrow-left-start-on-rectangle', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
    ],
  ],
};
</script>
