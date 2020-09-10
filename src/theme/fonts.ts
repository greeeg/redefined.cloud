import { css } from 'styled-components';

import InterBoldWoff from '@/assets/fonts/Inter-Bold.woff';
import InterBoldWoff2 from '@/assets/fonts/Inter-Bold.woff2';
import InterSemiBoldWoff from '@/assets/fonts/Inter-SemiBold.woff';
import InterSemiBoldWoff2 from '@/assets/fonts/Inter-SemiBold.woff2';
import ElenaBasicRegularWoff from '@/assets/fonts/ElenaBasic-Regular.woff';
import ElenaBasicRegularWoff2 from '@/assets/fonts/ElenaBasic-Regular.woff2';
import ElenaBasicBoldWoff from '@/assets/fonts/ElenaBasic-Bold.woff';
import ElenaBasicBoldWoff2 from '@/assets/fonts/ElenaBasic-Bold.woff2';

export const fonts = css`
  @font-face {
    font-family: 'Inter UI';
    src: url(${InterBoldWoff2}) format('woff2'),
      url(${InterBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter UI';
    src: url(${InterSemiBoldWoff2}) format('woff2'),
      url(${InterSemiBoldWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elena Basic';
    src: url(${ElenaBasicRegularWoff2}) format('woff2'),
      url(${ElenaBasicRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elena Basic';
    src: url(${ElenaBasicBoldWoff2}) format('woff2'),
      url(${ElenaBasicBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;
