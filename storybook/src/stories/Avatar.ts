import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from '@/components/avatar/Avatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue3/writing-stories/introduction
const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    url: { control: 'text' },
    initials: { control: 'text' },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
    isSquare: { control: 'boolean' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/vue3/writing-stories/args
export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    url: 'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
  },
};

export const Square: Story = {
  args: {
    url: 'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
    isSquare: true,
    bgColor: '#ff0000',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
    bgColor: '#000000',
    textColor: '#ffffff',
  },
};