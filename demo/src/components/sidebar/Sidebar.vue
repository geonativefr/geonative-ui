<template>
  <Sidebar>
    <template #header>
      <ItemsSwitcher :items="items" @itemChange="updateActiveUser">
        <span class="flex items-center gap-2 font-bold">Change Account</span>
      </ItemsSwitcher>
    </template>

      <SidebarNav />
      <SidebarGroup>
        <Accordion :multiple="true">
          <AccordionItem value="item-1">
            <template #title>
              <span>Accordion 1</span>
            </template>

            <p>Content 1</p>
          </AccordionItem>

          <AccordionItem value="item-2">
            <template #title>
              <span>Accordion 2</span>
            </template>

            <p>Content 2</p>
          </AccordionItem>

          <AccordionItem value="item-3">
            <template #title>
              <span>Accordion 3</span>
            </template>

            <p>Content 3</p>
          </AccordionItem>
        </Accordion>
      </SidebarGroup>

    <template #footer>
      <NavbarDropdown :dropdown="dropdownNavbar">
        <Avatar
          :url="activeUser.icon"
          :is-square="true"
          :class="activeUser.color"
          :initials="activeUser.label.slice(0, 2)"
        />
        <span class="flex flex-col text-left text-sm">
          <span class="font-semibold truncate">{{ activeUser.label }}</span>
          <span class="text-xs truncate">{{ activeUser.email }}</span>
        </span>
      </NavbarDropdown>
    </template>
  </Sidebar>
</template>

<script setup lang="ts">
import {
  Sidebar,
  NavbarDropdown,
  Avatar,
  ItemsSwitcher,
  Accordion,
  AccordionItem,
  SidebarGroup,
} from '@geonative/ui/components';
import { SidebarNav } from '@/components';

import type { DropdownMenuType } from '@geonative/ui/types';
import { ref } from 'vue';

const items = [
  {
    id: 1,
    label: 'alice',
    icon: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Kurt&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light',
    color: 'bg-pink-500',
    email: 'a@ex.com',
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
    email: 'superlongmailfordante@example.com',
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
</script>
