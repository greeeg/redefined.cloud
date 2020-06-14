import { FC, createElement } from 'react';
import styled from 'styled-components';
import {
  variant,
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
  width,
  WidthProps,
  position,
  PositionProps,
} from 'styled-system';

import { Theme } from '@/theme';

type Direction = 'row' | 'column';
type Track = string | null;

interface StackProps
  extends AlignItemsProps<Theme>,
    AlignContentProps<Theme>,
    JustifyContentProps<Theme>,
    JustifySelfProps<Theme>,
    WidthProps<Theme>,
    PositionProps<Theme>,
    AlignSelfProps<Theme> {
  direction: Direction | Direction[];
  rows?: Track | Track[];
  columns?: Track | Track[];
  spacing?: keyof Theme['space'] | Array<keyof Theme['space']>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const RawStack: FC<StackProps> = ({
  as = 'div',
  direction,
  children,
  className,
}) => {
  return createElement(as, { className, direction, children });
};

export const Stack = styled(RawStack)<StackProps>`
  display: grid;

  ${(p) =>
    variant({
      prop: 'direction',
      variants: {
        row: {
          gridAutoFlow: 'column',
          gridColumnGap: p.spacing,
          gridTemplateColumns: p.rows,
        },
        column: {
          gridAutoFlow: 'row',
          gridRowGap: p.spacing,
          gridTemplateRows: p.columns,
        },
      },
    })}

  ${compose(
    alignItems,
    alignContent,
    justifyContent,
    justifySelf,
    alignSelf,
    width,
    position
  )}
`;
