<template>
  <div class="p-5">
    <h1 class="mb-3">Account Switcher:</h1>
    <AccountSwitcher :accounts="accounts" @account-change="accountHasChange" />
  </div>
</template>

<script setup lang="ts">
import { AccountSwitcher } from '@geonative/ui/components';

const accounts = [
  {
    id: 1,
    name: 'alice',
    avatar:
      'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Kurt&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light',
    color: 'bg-pink-500',
  },
  {
    id: '2',
    name: 'braum',
    avatar:
      'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'cloud',
    avatar:
      'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
  },
  {
    id: '4',
    name: 'dante',
    color: 'bg-yellow-500',
  },
];

function accountHasChange(account: { name: string }) {
  console.log(`User ${account.name} has been selected`);
}
</script>
