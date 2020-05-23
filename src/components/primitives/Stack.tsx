import React, { FC, createElement } from 'react';
import styled from 'styled-components';
import {
  compose,
  alignItems,
  AlignItemsProps,
  alignContent,
  AlignContentProps,
  justifyContent,
  JustifyContentProps,
  justifySelf,
  JustifySelfProps,
  alignSelf,
  AlignSelfProps,
} from 'styled-system';

import { Theme } from '@/theme';

interface StackProps
  extends AlignItemsProps<Theme>,
    AlignContentProps<Theme>,
    JustifyContentProps<Theme>,
    JustifySelfProps<Theme>,
    AlignSelfProps<Theme> {
  vertical?: boolean;
  spacing?: keyof Theme['space'];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const RawStack: FC<StackProps> = ({
  as = 'div',
  vertical,
  children,
  className,
}) => {
  return createElement(as, { className, vertical, children });
};

export const Stack = styled(RawStack)<StackProps>`
  display: grid;
  grid-auto-flow: ${(p) => (p.vertical ? 'row' : 'column')};
  grid-row-gap: ${(p) =>
    p.spacing && p.vertical ? p.theme.space[p.spacing] : 0}px;
  grid-column-gap: ${(p) =>
    p.spacing && !p.vertical ? p.theme.space[p.spacing] : 0}px;
  ${compose(alignItems, alignContent, justifyContent, justifySelf, alignSelf)}
`;
