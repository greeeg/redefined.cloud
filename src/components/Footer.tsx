import React, { FC } from 'react';
import Link from 'next/link';

import i18n from '@/utils/i18n';
import { Box } from '@/components/primitives';

export const Footer: FC = () => {
  const { lang } = i18n.useI18n();

  return <Box as="footer">Test</Box>;
};
