import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  args: { label: 'Value', min: 0, max: 100, step: 1, defaultValue: 50 },
};


