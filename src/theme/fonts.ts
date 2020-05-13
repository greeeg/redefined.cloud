import { css } from 'styled-components';

import InterBoldWoff from '@/assets/fonts/Inter-Bold.woff';
import InterBoldWoff2 from '@/assets/fonts/Inter-Bold.woff2';
import LoraRegularWoff from '@/assets/fonts/Lora-Regular.woff';
import LoraRegularWoff2 from '@/assets/fonts/Lora-Regular.woff2';

export const fonts = css`
  @font-face {
    font-family: 'Inter UI';
    src: url(${InterBoldWoff2}) format('woff2'),
      url(${InterBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraRegularWoff2}) format('woff2'),
      url(${LoraRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
