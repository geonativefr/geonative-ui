<template>
  <ShadcnSidebarProvider>
    <Sidebar side="left" collapsible="offcanvas">
      <template #header>
        <ItemsSwitcher :items="items" @itemChange="updateActiveUser" class="w-full">
          <span class="flex items-center gap-2 font-bold">Change Account</span>
        </ItemsSwitcher>
      </template>

      <template #footer>
        <NavbarDropdown :dropdown="dropdownNavbar" class="w-full block">
          <Avatar
            :url="activeUser.icon"
            :is-square="true"
            :class="activeUser.color"
            :initials="activeUser.label.slice(0, 2)"
          />
          <span class="flex flex-col text-left text-sm">
            <span class="font-semibold">{{ activeUser.label }}</span>
            <span class="text-xs">{{ activeUser.email }}</span>
          </span>
        </NavbarDropdown>
      </template>
    </Sidebar>
  </ShadcnSidebarProvider>
</template>

<script setup lang="ts">
import { Sidebar, NavbarDropdown, Avatar, ItemsSwitcher, Button, DropdownMenu } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';
import { SidebarProvider as ShadcnSidebarProvider } from '@geonative/ui/shadcn/ui/sidebar';
import { ref } from 'vue';
import { useSonner } from '@geonative/ui/composables';

const items = [
  {
    id: 1,
    label: 'alice',
    icon: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Kurt&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light',
    color: 'bg-pink-500',
    email: 'alice@example.com',
  },
  {
    id: '2',
    label: 'braum',
    icon: 'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
    color: 'bg-blue-500',
    email: 'braum@example.com',
  },
  {
    id: 3,
    label: 'cloud',
    icon: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    email: 'cloud@example.com',
  },
  {
    id: '4',
    label: 'dante',
    color: 'bg-yellow-500',
    email: 'dante@example.com',
  },
];

const activeUser = ref(items[0]);

function updateActiveUser(newUser: any) {
  activeUser.value = newUser;
}

const dropdownNavbar: DropdownMenuType = {
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

const dropdownExample: DropdownMenuType = {
  sections: [
    [
      { label: 'Profile', clickAction: '/profile' },
      { label: 'Settings', clickAction: '/settings' },
    ],
    [
      { label: 'Help', clickAction: '/help' },
      { label: 'Log Out', clickAction: '/logout' },
    ],
  ],
};

const isClickedButton = ref(false);
const { showSuccessSonner } = useSonner();

function handleClick() {
  isClickedButton.value = true;
  showSuccessSonner('Button clicked!', 'This is a success message.', {
    label: 'Undo',
    clickAction: () => {
      isClickedButton.value = false;
    },
  });
}
</script>
