import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${fonts}

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
    color: ${(p) => p.theme.colors.black200};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(p) => p.theme.fonts.font100};
    font-weight: bold;
  }

  /* WebKit/Blink Browsers */
  ::selection {
    background: ${(p) => p.theme.colors.blue200}; 
    color: ${(p) => p.theme.colors.white100};
  }

  /* Gecko Browsers */
  ::-moz-selection {
    background: ${(p) => p.theme.colors.blue200};
    color: ${(p) => p.theme.colors.white100};
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
  },
  fontSizes: {
    size80: 16,
    size100: 18,
    size200: 21,
    size300: 28,
    size400: 38,
    size500: 50,
    size600: 68,
  },
  colors: {
    blue100: '#031DC7',
    blue200: '#0425FB',
    black100: '#1A1A1E',
    black200: '#353740',
    black300: '#8A8C99',
    white100: '#FFFFFF',
    white200: '#F2F3F7',
    white300: '#E6E6EB',
    white400: '#D1D2D6',
  },
  fonts: {
    font100: '"Inter UI", Helvetica, Arial, sans-serif',
    font200: '"Lora", Georgia, Cambria, "Times New Roman", Times, serif',
  },
  lineHeights: {
    lineHeight80: 0.9,
    lineHeight100: 1.2,
    lineHeight200: 1.58,
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
};

export type Theme = typeof theme;
