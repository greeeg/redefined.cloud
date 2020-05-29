import React, { FC } from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  maxWidth,
  MaxWidthProps,
  flexbox,
  FlexboxProps,
  textAlign,
  TextAlignProps,
  lineHeight,
  LineHeightProps,
  fontWeight,
  FontWeightProps,
  variant,
} from 'styled-system';

import { Theme } from '@/theme';

interface HeadingProps
  extends ColorProps<Theme>,
    SpaceProps<Theme>,
    MaxWidthProps<Theme>,
    FlexboxProps<Theme>,
    FontWeightProps<Theme>,
    LineHeightProps<Theme>,
    TextAlignProps<Theme> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  fontSize: keyof Theme['fontSizes'] | Array<keyof Theme['fontSizes']>;
  className?: string;
}

const RawHeading: FC<HeadingProps> = ({ as, className, children }) => {
  const HeadingTag = `${as}` as keyof JSX.IntrinsicElements;
  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export const Heading = styled(RawHeading)<HeadingProps>`
  line-height: ${(p) => p.theme.lineHeights.lineHeight80};
  color: ${(p) => p.theme.colors.gray900};
  font-family: ${(p) => p.theme.fonts.font100};
  font-weight: 600;

  ${variant({
    prop: 'fontSize',
    variants: {
      size600: {
        fontSize: 'size600',
        letterSpacing: -2,
      },
      size500: {
        fontSize: 'size500',
        letterSpacing: -1,
      },
      size400: {
        fontSize: 'size400',
      },
      size300: {
        fontSize: 'size300',
      },
      size200: {
        fontSize: 'size200',
      },
      size100: {
        fontSize: 'size100',
      },
      size80: {
        fontSize: 'size80',
      },
    },
  })}

  ${compose(color, space, maxWidth, lineHeight, textAlign, fontWeight, flexbox)}
`;
