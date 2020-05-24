import React, { FC } from 'react';
import { Box, Stack, Heading } from '@/components/primitives';

export const BlogSection: FC = () => {
  return (
    <Box as="section" paddingY={['spacing600', 'spacing800']}>
      <Box margin="0 auto" width="100%" maxWidth="size200">
        <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>
          <Stack>
            <Box>
              <Heading as="h2" size="size500" maxWidth={200}>
                From the blog
              </Heading>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
