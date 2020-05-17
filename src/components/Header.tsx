import React, { FC } from 'react';
import Link from 'next/link';

import i18n from '@/utils/i18n';
import { Box } from '@/components/primitives';

export const Header: FC = () => {
  const { lang } = i18n.useI18n();

  return (
    <Box as="header">
      <Link href="/[lang]" as={`/${lang}`}>
        Logo
      </Link>

      <Box as="nav">
        <Link href="/[lang]/list" as={`/${lang}/list`}>
          List
        </Link>

        <Link href="/[lang]/about" as={`/${lang}/about`}>
          About the project
        </Link>

        <a href="https://github.com/greeeg/redefined.cloud">GitHub</a>
      </Box>
    </Box>
  );
};
