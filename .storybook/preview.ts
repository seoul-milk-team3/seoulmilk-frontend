import type { Preview } from '@storybook/react';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import { Provider } from './provider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider(Provider)],
};

export default preview;
