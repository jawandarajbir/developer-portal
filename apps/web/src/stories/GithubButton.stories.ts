import type { Meta, StoryObj } from '@storybook/react';

import { GithubButton } from 'ui/components/buttons/GitHubButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof GithubButton> = {
  title: 'Button/GithubButton',
  component: GithubButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GithubButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Edit',
    url: 'http://www.github.com',
    className: '',
  },
};
