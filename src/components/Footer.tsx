import React, { FC } from 'react';
import Link from 'next/link';

import i18n from '@/utils/i18n';
import { Box } from '@/components/primitives';

export const Footer: FC = () => {
  const { lang } = i18n.useI18n();

  return (
    <Box
      as="footer"
      paddingY={['spacing600', 'spacing400']}
      backgroundColor="gray100"
    >
      <Box margin="0 auto" width="100%" maxWidth="size200">
        <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>test</Box>
      </Box>
    </Box>
  );
};
