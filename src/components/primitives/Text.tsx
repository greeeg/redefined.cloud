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
  fontWeight,
  FontWeightProps,
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
    FontWeightProps<Theme>,
    FontFamilyProps<Theme>,
    SpaceProps<Theme>,
    TextAlignProps<Theme>,
    FlexboxProps<Theme>,
    MaxWidthProps<Theme> {
  as?: 'p' | 'span' | 'li' | 'strong';
  className?: string;
  id?: string;
}

const RawText: FC<TextProps> = ({
  as = 'p',
  id,
  className,
  children,
  ...props
}) => {
  const TextTag = `${as}` as keyof JSX.IntrinsicElements;
  return (
    <TextTag
      className={className}
      id={id}
      data-paragraph-type={props['data-paragraph-type']}
    >
      {children}
    </TextTag>
  );
};

export const Text = styled(RawText)<TextProps>`
  font-size: ${(p) => p.theme.fontSizes.size100}px;
  line-height: ${(p) => p.theme.lineHeights.lineHeight200};
  color: ${(p) => p.theme.colors.gray800};

  ${compose(
    fontSize,
    fontWeight,
    fontFamily,
    color,
    space,
    maxWidth,
    textAlign,
    flexbox
  )}
`;
