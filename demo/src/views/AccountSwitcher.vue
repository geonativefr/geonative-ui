<template>
  <div class="p-5">
    <h1 class="mb-3">Account Switcher:</h1>
    <AccountSwitcher :dropdown="dropdown">
      <Avatar :url="activeUser.avatar" :is-square="true" :class="activeUser.color" :initials="activeUser.name.slice(0, 2)" />
      <span class="flex flex-col text-left text-sm">
        <span class="font-semibold">{{ activeUser.name }}</span>
        <span class="text-xs">{{ activeUser.email }}</span>
      </span>
    </AccountSwitcher>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AccountSwitcher } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';
import { ref } from 'vue';

const users = [
  {
    name: 'alice',
    email: 'alice@example.com',
    avatar:
      'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Kurt&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light',
    color : 'bg-pink-500',
  },
  {
    name: 'braum',
    email: 'braum@example.com',
    avatar:
      'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
    color : 'bg-blue-500',
  },
  {
    name: 'cloud',
    email: 'cloud@example.com',
    avatar:
      'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    color : 'bg-green-500',
  },
];

const activeUser = ref(users[0]);

const changeUser = (userIndex: number) => {
  activeUser.value = users[userIndex];
};

const dropdown: DropdownMenuType = {
  sections: [
    [
      {
        label: users[0].name.slice(0, 1).toUpperCase() + users[0].name.slice(1),
        clickAction: () => changeUser(0),
        avatarProps: {
          url: users[0].avatar,
          initials: users[0].name.slice(0, 2),
          class: users[0].color,
        },
      },
    ],
    [
      {
        label: users[1].name.slice(0, 1).toUpperCase() + users[1].name.slice(1),
        clickAction: () => changeUser(1),
        avatarProps: {
          url: users[1].avatar,
          initials: users[1].name.slice(0, 2),
          class: users[1].color,
        },
      },
    ],
    [
      {
        label: users[2].name.slice(0, 1).toUpperCase() + users[2].name.slice(1),
        clickAction: () => changeUser(2),
        avatarProps: {
          url: users[2].avatar,
          initials: users[2].name.slice(0, 2),
          class: users[2].color,
        },
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
