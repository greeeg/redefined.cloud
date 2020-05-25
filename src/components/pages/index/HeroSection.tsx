import React, { FC } from 'react';
import { Heading, Box, Text, Stack } from '@/components/primitives';

export const HeroSection: FC = () => {
  return (
    <Box
      maxWidth={750}
      paddingX={['spacing200', 'spacing400']}
      paddingY={['spacing600', 'spacing800']}
      margin="0 auto"
      as="section"
    >
      <Stack direction="column" spacing="spacing200" alignItems="center">
        <Heading
          as="h1"
          textAlign="center"
          size={['size400', 'size500', 'size600']}
        >
          Redefining the Cloud to better understand how it works.
        </Heading>

        <Text
          fontSize={['size100', 'size200']}
          textAlign="center"
          maxWidth={600}
          justifySelf="center"
        >
          From a microservice to a container and a service mesh, it can be hard
          to make sense of the words you see on a daily basis and how they
          relate to each other. This guide is here to help you get it.
        </Text>
      </Stack>
    </Box>
  );
};
