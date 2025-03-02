import type { Preview } from "@storybook/react";
import { withThemeProvider } from "storybook-addon-theme-provider";
import { Provider } from "./provider";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
      },
    },
  },
  decorators: [withThemeProvider(Provider)],
};

export default preview;
