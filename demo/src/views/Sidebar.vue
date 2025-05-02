<template>
  <ShadcnSidebarProvider>
      <Sidebar>
        <template #header>
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold">Sidebar</h1>
          </div>
        </template>

        <template #content>
          <h1 class="text-2xl font-bold">Content</h1>
        </template>

        <template #footer>
          <NavbarDropdown :dropdown="dropdown" class="w-full block">
            <Avatar :url="user.avatar" :is-square="true" class="bg-red-500" :initials="user.name.slice(0, 2)" />
            <span class="flex flex-col text-left text-sm">
              <span class="font-semibold">{{ user.name }}</span>
              <span class="text-xs">{{ user.email }}</span>
            </span>
          </NavbarDropdown>
        </template>
      </Sidebar>
  </ShadcnSidebarProvider>
</template>

<script setup lang="ts">
import { Sidebar, NavbarDropdown, Avatar } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';
import { SidebarProvider as ShadcnSidebarProvider } from '@geonative/ui/shadcn/ui/sidebar';

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
