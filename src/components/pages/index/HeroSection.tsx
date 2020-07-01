import React, { FC } from 'react';
import { Heading, Box, Text, Stack } from '@/components/primitives';
import i18n from '@/utils/i18n';

export const HeroSection: FC = () => {
  const t = i18n.useT();

  return (
    <Box
      maxWidth={810}
      paddingX={['spacing200', 'spacing400']}
      paddingY={['spacing600', 'spacing800']}
      margin="0 auto"
      as="section"
    >
      <Stack direction="column" spacing="spacing200" alignItems="center">
        <Heading
          as="h1"
          textAlign="center"
          fontSize={['size400', 'size500', 'size600']}
        >
          {t('home:hero:title')}
        </Heading>

        <Text
          fontSize={['size100', 'size200']}
          textAlign="center"
          maxWidth={710}
          justifySelf="center"
        >
          {t('home:hero:description')}
        </Text>
      </Stack>
    </Box>
  );
};
