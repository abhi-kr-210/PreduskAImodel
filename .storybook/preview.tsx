import type { Preview } from '@storybook/react';
import '../app/globals.css';
import { ThemeProvider } from '../components/providers/ThemeProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-6">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export default preview;

