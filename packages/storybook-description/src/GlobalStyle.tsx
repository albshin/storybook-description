import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const DEFAULT_FONT_FAMILY = 'Arial';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${themeGet('fonts.body', DEFAULT_FONT_FAMILY)};

    h1 {
      font-family: ${themeGet('fonts.heading', DEFAULT_FONT_FAMILY)};
      font-size: ${themeGet('fontSizes.10')};
      font-weight: ${themeGet('fontWeights.h1')};
      margin-top: 0;
      margin-bottom: ${props => props.theme.space[2]};
    }
    h2 {
      font-family: ${themeGet('fonts.heading', DEFAULT_FONT_FAMILY)};
      font-size: ${themeGet('fontSizes.9')};
      font-weight: ${themeGet('fontWeights.h2')};
      margin-top: 0;
      margin-bottom: ${props => props.theme.space[2]};
    }
    h3 {
      font-family: ${themeGet('fonts.heading', DEFAULT_FONT_FAMILY)};
      font-size: ${themeGet('fontSizes.8')};
      font-weight: ${themeGet('fontWeights.h3')};
      margin-top: 0;
      margin-bottom: ${props => props.theme.space[2]};
    }
    h4 {
      font-family: ${themeGet('fonts.heading', DEFAULT_FONT_FAMILY)};
      font-size: ${themeGet('fontSizes.7')};
      font-weight: ${themeGet('fontWeights.h4')};
      margin-top: 0;
      margin-bottom: ${props => props.theme.space[2]};
    }
    h5 {
      font-family: ${themeGet('fonts.heading', DEFAULT_FONT_FAMILY)};
      font-size: ${themeGet('fontSizes.4')};
      font-weight: ${themeGet('fontWeights.h5')};
      margin-top: 0;
      margin-bottom: ${props => props.theme.space[2]};
    }
    h6 {
      font-family: ${themeGet('fonts.heading', DEFAULT_FONT_FAMILY)};
      font-size: ${themeGet('fontSizes.3')};
      font-weight: ${themeGet('fontWeights.h6')};
      margin-top: 0;
      margin-bottom: ${props => props.theme.space[2]};
    }
  } 
`;

export default GlobalStyle;
