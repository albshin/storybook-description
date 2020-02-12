import { configure, addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import ThemeDecorator from '../src/themeDecorator';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
addDecorator(ThemeDecorator);
addDecorator(withA11y);

// const srcStories = require.context('../src', true, /\.stories\.(tsx|mdx)$/);
const packagesStories = require.context('../packages', true, /\.stories\.(tsx|mdx)$/);

const loadStories = () => {
  const allExports = [];
  packagesStories.keys().forEach(f => allExports.push(packagesStories(f)));
  // srcStories.keys().forEach(f => allExports.push(srcStories(f)));
  return allExports;
};

configure(loadStories, module);