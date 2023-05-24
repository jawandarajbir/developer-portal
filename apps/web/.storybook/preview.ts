import type { Preview } from '@storybook/react';
import '../.storybook/storybook.css';
import '../src/styles/global.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
  },
};

export default preview;
