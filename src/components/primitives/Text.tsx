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
} from 'styled-system';

import { Theme } from '@/theme';

interface TextProps
  extends ColorProps<Theme>,
    FontSizeProps<Theme>,
    SpaceProps<Theme> {
  as?: 'p' | 'span';
  className?: string;
}

const RawText: FC<TextProps> = ({ as = 'p', className, children }) => {
  const TextTag = `${as}` as keyof JSX.IntrinsicElements;
  return <TextTag className={className}>{children}</TextTag>;
};

export const Text = styled(RawText)<TextProps>`
  font-size: ${(p) => p.theme.fontSizes.size100}px;
  line-height: ${(p) => p.theme.lineHeights.lineHeight200};
  color: ${(p) => p.theme.colors.black200};

  ${compose(fontSize, color, space)}
`;
