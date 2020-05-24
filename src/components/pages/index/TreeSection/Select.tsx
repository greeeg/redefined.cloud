import React, { FC, useState } from 'react';
import {
  Menu,
  MenuList as SourceMenuList,
  MenuButton as SourceMenuButton,
  MenuItem,
} from '@reach/menu-button';
import styled, { css } from 'styled-components';

import { md } from '@/theme';

type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  options: Option[];
  onSelect: (value: string) => void;
  className?: string;
}

const MenuList = styled(SourceMenuList)`
  margin-top: ${(p) => p.theme.space.spacing100}px;
  border: none;
  border-radius: ${(p) => p.theme.radii.borderRadius100}px;
  padding: 0;

  [data-reach-menu-item] {
    font-family: ${(p) => p.theme.fonts.font100};
    font-size: ${(p) => p.theme.fontSizes.size100}px;
    font-weight: bold;
    padding: ${(p) => p.theme.space.spacing200}px;

    ${md(css`
      font-size: ${(p) => p.theme.fontSizes.size200}px;
    `)}
  }

  [data-reach-menu-item][data-selected] {
    background-color: ${(p) => p.theme.colors.yellow200};
  }
`;

const MenuButton = styled(SourceMenuButton)`
  background-color: transparent;
  appearance: none;
  border: none;
  cursor: pointer;
  max-width: 100vw;
  text-align: left;
  color: ${(p) => p.theme.colors.white};
  font-family: ${(p) => p.theme.fonts.font100};
  font-size: ${(p) => p.theme.fontSizes.size300}px;
  font-weight: bold;
  padding: 0;
  border-radius: ${(p) => p.theme.radii.borderRadius100}px;
  transition: all ${(p) => p.theme.transitions.transition100};
  padding: ${(p) => p.theme.space.spacing60}px;
  transform: translateX(-${(p) => p.theme.space.spacing60}px);
  outline: none;

  &:hover {
    background-color: ${(p) => p.theme.colors.gray800};
  }

  ${md(css`
    font-size: ${(p) => p.theme.fontSizes.size400}px;
  `)}
`;

export const Select: FC<SelectProps> = ({ className, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const onSelectValue = (index: number) => {
    setSelectedOption(options[index]);
    onSelect(options[index].value);
  };

  return (
    <div className={className}>
      <Menu>
        <MenuButton>{selectedOption.label}</MenuButton>

        <MenuList>
          {options.map((option, index) => (
            <MenuItem key={option.value} onSelect={() => onSelectValue(index)}>
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
