import React from 'react';
import { addons } from '@storybook/addons';
import { setup } from '@storybook/vue3';
import { themes } from '@storybook/theming';
import { light, dark } from './theme';
import { DocsContainer } from '@storybook/blocks';
import { Inkline, components } from '../src/inkline';
import '../src/inkline.scss';
import './preview.scss';

setup((app) => {
  app.use(Inkline, {
    components,
  });

  addons.getChannel().on('DARK_MODE', (isDarkMode) => {
    app.config.globalProperties.$inkline.options.colorMode = isDarkMode ? 'dark' : 'light';
  });
});

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
    dark,
    light,
  },
  docs: {
    container: (props) => <DocsContainer {...props} theme={themes.dark} />,
  },
};
