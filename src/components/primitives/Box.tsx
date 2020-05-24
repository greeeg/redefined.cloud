import { FC, createElement } from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  boxShadow,
  BoxShadowProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from 'styled-system';

import { Theme } from '@/theme';

interface BoxProps
  extends ColorProps<Theme>,
    SpaceProps<Theme>,
    BoxShadowProps<Theme>,
    BorderProps<Theme>,
    FlexboxProps<Theme>,
    PositionProps<Theme>,
    LayoutProps<Theme> {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const RawBox: FC<BoxProps> = ({ as = 'div', children, className }) => {
  return createElement(as, { className, children });
};

export const Box = styled(RawBox)<BoxProps>`
  ${compose(color, flexbox, layout, space, boxShadow, border, position)}
`;
