import React, { FC } from 'react';
import Link from 'next/link';

import i18n from '@/utils/i18n';
import { Box, Stack } from '@/components/primitives';
import { Logo } from '@/components/Logo';
import styled, { css } from 'styled-components';

const NavItem = styled.li`
  ${({ theme }) => css`
    a {
      position: relative;
      display: inline-block;
      font-family: ${theme.fonts.font100};
      font-size: ${theme.fontSizes.size100}px;
      text-decoration: none;
      color: ${theme.colors.gray500};

      &::before {
        display: inline-block;
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
        width: 100%;
        height: 3px;
        background-color: ${theme.colors.gray600};
        opacity: 0;
        transition: all 0.15s ease-in-out;
      }

      :hover {
        &::before {
          opacity: 1;
        }
      }
    }
  `}
`;

export const Header: FC = () => {
  const { lang } = i18n.useI18n();

  return (
    <Box
      as="header"
      margin="0 auto"
      maxWidth={1400}
      paddingX={['spacing200', 'spacing400']}
      paddingY="spacing400"
    >
      <Stack alignItems="center" justifyContent="space-between">
        <Link href="/[lang]" as={`/${lang}`}>
          <a title="Redefined.cloud">
            <Logo />
          </a>
        </Link>

        <Box as="nav">
          <Stack as="ul" spacing="spacing400">
            <NavItem>
              <Link href="/[lang]/list" as={`/${lang}/list`}>
                <a title="List">List</a>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/[lang]/about" as={`/${lang}/about`}>
                <a title="About the project">About the project</a>
              </Link>
            </NavItem>

            <NavItem>
              <a
                title="Contribute to the project on GitHub"
                href="https://github.com/greeeg/redefined.cloud"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </NavItem>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
