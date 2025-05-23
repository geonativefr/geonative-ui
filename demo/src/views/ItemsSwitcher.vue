<template>
  <div class="p-5">
    <h1 class="mb-3">Dropdown Switcher:</h1>
    <ItemsSwitcher :items="items" :dropdown="dropdown" :active-item="activeItem" @item-change="accountHasChange">
      <span class="flex items-center gap-2 font-bold">Change Account</span>
    </ItemsSwitcher>
  </div>
</template>

<script setup lang="ts">
import { ItemsSwitcher } from '@geonative/ui/components';
import type { DropdownMenuType, Items } from '@geonative/ui/types';
import { ref } from 'vue';

const items = [
  {
    id: 1,
    label: 'alice',
    icon: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Kurt&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light',
    color: 'bg-pink-500',
  },
  {
    id: '2',
    label: 'braum',
    icon: 'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    label: 'cloud',
    icon: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
  },
  {
    id: '4',
    label: 'dante',
    color: 'bg-yellow-500',
  },
];

const activeItem = ref<Items | undefined>(items[0]);

function changeItem(itemId: Items['id']) {
  const foundItem = items.find((item) => item.id === itemId);
  if (foundItem) {
    activeItem.value = foundItem;
  }
}

const dropdown: DropdownMenuType = {
  sections: [
    items.map((item) => ({
      label: item.label,
      class: 'flex items-center gap-2',
      clickAction: () => changeItem(item.id),
      iconProps: {
        name: item.label,
        source: 'avatar',
        class: 'size-8',
        avatarProps: { url: item.icon, initials: item.label.slice(0, 2), class: item.color },
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

function accountHasChange(account: { name: string }) {
  console.log(`User ${account.name} has been selected`);
}
</script>
