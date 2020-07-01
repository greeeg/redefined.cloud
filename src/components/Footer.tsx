import React, { FC } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import i18n from '@/utils/i18n';
import { theme, md, lg } from '@/theme';
import { Box, Stack, Heading } from '@/components/primitives';
import { Logo } from '@/components/Logo';

const NavItem = styled.li`
  display: flex;
  align-items: center;

  a {
    position: relative;
    display: inline-block;
    font-family: ${theme.fonts.font100};
    font-size: ${theme.fontSizes.size100}px;
    text-decoration: none;
    color: ${theme.colors.gray400};
    border-radius: ${(p) => p.theme.radii.borderRadius100}px;
    transition: all ${(p) => p.theme.transitions.transition100};

    :hover {
      color: ${(p) => p.theme.colors.gray600};
    }
  }
`;

export const Footer: FC = () => {
  const { lang } = i18n.useI18n();
  const t = i18n.useT();

  return (
    <Box
      as="footer"
      paddingY={['spacing300', 'spacing600']}
      borderTop="1px solid"
      borderColor="gray200"
      backgroundColor="gray100"
    >
      <Box margin="0 auto" width="100%" maxWidth="size200">
        <Box
          display="flex"
          alignItems="center"
          paddingX={['spacing200', 'spacing400', 'spacing600']}
        >
          <Stack direction="column" spacing="spacing200">
            <Logo size="large" variation="icon" color="gray500" />
            <Stack
              direction={['column', 'row']}
              spacing={['spacing100', 'spacing300']}
              as="ul"
            >
              <NavItem>
                <Link
                  href="/[lang]/terms-and-privacy"
                  as={`/${lang}/terms-and-privacy`}
                >
                  <a title={t('footer:nav:privacy')}>
                    {t('footer:nav:privacy')}
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Heading
                  as="span"
                  fontSize="size80"
                  fontWeight="size80"
                  color="gray400"
                >
                  Copyright © {new Date().getFullYear()}.{' '}
                  {t('footer:copyright')}
                </Heading>
              </NavItem>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
