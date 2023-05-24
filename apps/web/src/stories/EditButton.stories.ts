import type { Meta, StoryObj } from '@storybook/react';

import EditButton from 'ui/components/buttons/EditButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof EditButton> = {
  title: 'Button/EditButton',
  component: EditButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    classes: '',
    editUrl: 'http://www.github.com',
  },
};
