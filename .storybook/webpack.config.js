const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: path.resolve(__dirname, '../node_modules/'),
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]]
        }
      },
      {
        loader: 'react-docgen-typescript-loader',
        options: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          propFilter: prop => {
            if (prop.name) {
              if (prop.name === 'css' || prop.name === 'ref' || prop.name === 'theme' || prop.name === 'as' || prop.name === 'forwardedAs') {
                return false;
              }
            }

            if (prop.parent) {
              if (prop.parent.fileName.includes('styled-system')) {
                // Filter out long form SpaceProps
                if (prop.parent.name === 'SpaceProps' && prop.name.length > 2) return false;
                return true;
              }
              return !prop.parent.fileName.includes('node_modules');
            }
            return true;
          }
        }
      }
    ]
  });
  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})]
        }
      }
    ]
  });
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: path.resolve(__dirname, '../node_modules/'),
    enforce: 'pre'
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
