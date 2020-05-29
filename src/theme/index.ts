import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { fonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${fonts}

  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, a,
  abbr, acronym, address, big, cite, code, del,
  dfn, em, img, ins, kbd, q, s, samp, small, strike,
  strong, sub, sup, tt, var, b, u, i, center, dl, dt,
  dd, ol, ul, li, fieldset, form, label, legend, table,
  caption, tbody, tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption, footer, header,
  hgroup, main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-family: ${(p) => p.theme.fonts.font200};
    font-size: ${(p) => p.theme.fontSizes.size100}px;
    color: ${(p) => p.theme.colors.gray900};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(p) => p.theme.fonts.font100};
    font-weight: bold;
  }

  ::selection {
    background: ${(p) => p.theme.colors.yellow200}; 
    color: ${(p) => p.theme.colors.white};
  }

  ::-moz-selection {
    background: ${(p) => p.theme.colors.yellow200};
    color: ${(p) => p.theme.colors.white};
  }

  a {
    text-decoration: none;
  }

  a.focus-visible:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${(p) => p.theme.colors.yellow200};
  }

  button.focus-visible:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${(p) => p.theme.colors.yellow200};
  }

  .js-focus-visible {
    * {
      outline: none;
    }
  }
`;

export const theme = {
  space: {
    spacing0: 0,
    spacing40: 4,
    spacing60: 8,
    spacing80: 12,
    spacing100: 16,
    spacing200: 24,
    spacing300: 32,
    spacing400: 40,
    spacing500: 48,
    spacing600: 64,
    spacing700: 96,
    spacing800: 120,
    spacing900: 144,
  },
  fontSizes: {
    size80: 15,
    size100: 17,
    size200: 22,
    size300: 28,
    size400: 38,
    size500: 50,
    size600: 68,
  },
  fontWeights: {
    size80: 400,
    size100: 600,
  },
  sizes: {
    size80: 704,
    size100: 1184,
    size200: 1424,
  },
  colors: {
    white: '#fff',
    black: '#000',
    gray100: '#f6f8fa',
    gray200: '#e1e4e8',
    gray300: '#d1d5da',
    gray400: '#959da5',
    gray500: '#6a737d',
    gray600: '#586069',
    gray700: '#444d56',
    gray800: '#2f363d',
    gray900: '#24292e',
    yellow200: '#03C7BB',
    yellow100: '#178C85',
  },
  fonts: {
    font100: '"Inter UI", Helvetica, Arial, sans-serif',
    font200: '"Elena Basic", Cambria, "Times New Roman", Times, serif',
  },
  lineHeights: {
    lineHeight80: 1,
    lineHeight100: 1.2,
    lineHeight200: 1.52,
  },
  radii: {
    borderRadius100: 2,
  },
  shadows: {
    boxShadow100:
      'rgba(0, 0, 0, 0.05) 0px 0.5px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px',
    boxShadow200:
      'rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.05) 0px 10px 20px',
  },
  transitions: {
    transition100: '0.2s ease-in-out',
  },
  breakpoints: ['40em', '52em', '64em'],
};

export type BaseTheme = typeof theme;

export type Theme = BaseTheme & {
  space: typeof theme.space & { '0 auto': string };
};

export const md = (inner: any) => css`
  @media (min-width: ${theme.breakpoints[0]}) {
    ${inner};
  }
`;

export const lg = (inner: any) => css`
  @media (min-width: ${theme.breakpoints[1]}) {
    ${inner};
  }
`;
