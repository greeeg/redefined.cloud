import React, { FC } from 'react';
import Link from 'next/link';

import i18n from '@/utils/i18n';
import { Box, Stack, Heading } from '@/components/primitives';
import { Logo } from '@/components/Logo';

export const Footer: FC = () => {
  const { lang } = i18n.useI18n();

  return (
    <Box
      as="footer"
      paddingY={['spacing600', 'spacing600']}
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
            <Stack direction="row" spacing="spacing300">
              <Heading
                as="p"
                fontSize="size80"
                fontWeight="size80"
                color="gray400"
              >
                Copyright © 2020. All rights reserved.
              </Heading>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
