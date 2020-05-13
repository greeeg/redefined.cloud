import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  variation: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const RawButton: FC<ButtonProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export const Button = styled(RawButton)<ButtonProps>`
  margin-right: 10px;
  font-family: ${(p) => p.theme.fonts.font100};
  font-size: ${(p) => p.theme.fontSizes.size80}px;
  background-color: ${(p) => {
    if (p.disabled) {
      return p.theme.colors.white300;
    }

    return p.variation === 'primary'
      ? p.theme.colors.blue100
      : p.theme.colors.white100;
  }};
  color: ${(p) => {
    if (p.disabled) {
      return p.theme.colors.black300;
    }

    return p.variation === 'primary'
      ? p.theme.colors.white100
      : p.theme.colors.black100;
  }};
  border: 1px solid;
  border-radius: ${(p) => p.theme.radii.borderRadius100}px;
  border-color: ${(p) => {
    if (p.disabled) {
      return p.theme.colors.white300;
    }

    return p.variation === 'primary'
      ? p.theme.colors.blue100
      : p.theme.colors.white400;
  }};
  cursor: ${(p) => {
    if (p.loading) {
      return 'wait';
    }
    return p.disabled ? 'not-allowed' : 'pointer';
  }};
  box-shadow: ${(p) =>
    p.variation === 'primary' ? p.theme.shadows.boxShadow100 : null};
  -webkit-appearance: none;
  transition: all ${(p) => p.theme.transitions.transition100};
  padding: ${(p) => p.theme.space.spacing60}px
    ${(p) => p.theme.space.spacing100}px;

  &:hover {
    background-color: ${(p) => {
      if (p.disabled) {
        return p.theme.colors.white300;
      }
      return p.variation === 'primary'
        ? p.theme.colors.blue200
        : p.theme.colors.white100;
    }};
    border-color: ${(p) => {
      if (p.disabled) {
        return p.theme.colors.white300;
      }
      return p.variation === 'primary'
        ? p.theme.colors.blue200
        : p.theme.colors.white400;
    }};
    box-shadow: ${(p) => p.theme.shadows.boxShadow200};
  }

  &:focus {
    background-color: ${(p) => {
      if (p.disabled) {
        return p.theme.colors.white300;
      }
      return p.variation === 'primary'
        ? p.theme.colors.blue200
        : p.theme.colors.white200;
    }};
    border-color: ${(p) => {
      if (p.disabled) {
        return p.theme.colors.white300;
      }
      return p.variation === 'primary'
        ? p.theme.colors.blue200
        : p.theme.colors.white200;
    }};
    box-shadow: 0 0 0 3px ${(p) => p.theme.colors.white100},
      0 0 0 4px
        ${(p) => {
          if (p.disabled) {
            return p.theme.colors.white300;
          }
          return p.variation === 'primary'
            ? p.theme.colors.blue100
            : p.theme.colors.white400;
        }};
    outline: none;
  }
`;
