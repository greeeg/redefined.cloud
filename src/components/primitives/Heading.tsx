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

interface HeadingProps
  extends ColorProps<Theme>,
    FontSizeProps<Theme>,
    SpaceProps<Theme> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

const RawHeading: FC<HeadingProps> = ({ as, className, children }) => {
  const HeadingTag = `h${as}` as keyof JSX.IntrinsicElements;
  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export const Heading = styled(RawHeading)<HeadingProps>`
  line-height: ${(p) => p.theme.lineHeights.lineHeight80};
  color: ${(p) => p.theme.colors.black100};

  ${compose(fontSize, color, space)}
`;
