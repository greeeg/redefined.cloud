import React from 'react';
import { useRouter } from 'next/router';
import {
  Menu,
  MenuList as SourceMenuList,
  MenuButton as SourceMenuButton,
  MenuItem,
} from '@reach/menu-button';
import styled from 'styled-components';
import i18n, { languageLabelMapping } from '@/utils/i18n';

const MenuButton = styled(SourceMenuButton)`
  cursor: pointer;
  border-radius: ${(p) => p.theme.radii.borderRadius100}px;
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.gray400};
  padding: ${(p) => p.theme.space.spacing60}px
    ${(p) => p.theme.space.spacing100}px;
  transition: all ${(p) => p.theme.transitions.transition100};

  span {
    font-family: ${(p) => p.theme.fonts.font100};
    color: ${(p) => p.theme.colors.gray500};
    transition: all ${(p) => p.theme.transitions.transition100};
  }

  :hover {
    border-color: ${(p) => p.theme.colors.gray700};
    span {
      color: ${(p) => p.theme.colors.gray700};
    }
  }
`;

const MenuList = styled(SourceMenuList)`
  margin-top: ${(p) => p.theme.space.spacing100}px;
  border: 1px solid ${(p) => p.theme.colors.gray400};
  border-radius: ${(p) => p.theme.radii.borderRadius100}px;
  padding: 0;

  [data-reach-menu-item] {
    font-family: ${(p) => p.theme.fonts.font100};
    color: ${(p) => p.theme.colors.gray500};
    padding: ${(p) => p.theme.space.spacing100}px
      ${(p) => p.theme.space.spacing100}px;
  }

  [data-reach-menu-item][data-selected] {
    background-color: ${(p) => p.theme.colors.yellow200};
    color: ${(p) => p.theme.colors.white};
  }
`;

export const LanguageSelect = () => {
  const router = useRouter();
  const { lang, languages } = i18n.useI18n();

  const onSelect = (selectedLang) => {
    const newPath = router.asPath.replace(`/${lang}`, `/${selectedLang}`);
    router.push(newPath);
  };

  return (
    <div>
      <Menu>
        <MenuButton>
          <span>{languageLabelMapping[lang]}</span>
        </MenuButton>

        <MenuList>
          {languages.map((lang) => (
            <MenuItem key={lang} onSelect={() => onSelect(lang)}>
              {languageLabelMapping[lang]}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
