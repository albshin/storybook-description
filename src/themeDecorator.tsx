import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../packages/storybook-description/src/theme';
import GlobalStyle from '../packages/storybook-description/src/GlobalStyle';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
