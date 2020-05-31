import React, { FC } from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontFamily,
  FontFamilyProps,
  maxWidth,
  MaxWidthProps,
  textAlign,
  TextAlignProps,
  flexbox,
  FlexboxProps,
} from 'styled-system';

import { Theme } from '@/theme';

interface TextProps
  extends ColorProps<Theme>,
    FontSizeProps<Theme>,
    FontFamilyProps<Theme>,
    SpaceProps<Theme>,
    TextAlignProps<Theme>,
    FlexboxProps<Theme>,
    MaxWidthProps<Theme> {
  as?: 'p' | 'span' | 'li';
  className?: string;
  id?: string;
}

const RawText: FC<TextProps> = ({ as = 'p', id, className, children }) => {
  const TextTag = `${as}` as keyof JSX.IntrinsicElements;
  return (
    <TextTag className={className} id={id}>
      {children}
    </TextTag>
  );
};

export const Text = styled(RawText)<TextProps>`
  font-size: ${(p) => p.theme.fontSizes.size100}px;
  line-height: ${(p) => p.theme.lineHeights.lineHeight200};
  color: ${(p) => p.theme.colors.gray800};

  ${compose(fontSize, fontFamily, color, space, maxWidth, textAlign, flexbox)}
`;
