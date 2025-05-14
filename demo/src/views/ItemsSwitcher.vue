<template>
  <div class="p-5">
    <h1 class="mb-3">Dropdown Switcher:</h1>
    <ItemsSwitcher :items="items" @item-change="accountHasChange">
      <span class="flex items-center gap-2 font-bold">Change Account</span>
    </ItemsSwitcher>
  </div>
</template>

<script setup lang="ts">
import { ItemsSwitcher } from '@geonative/ui/components';

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

function accountHasChange(account: { name: string }) {
  console.log(`User ${account.name} has been selected`);
}
</script>
