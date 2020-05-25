import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Box, Stack, Heading, Text } from '@/components/primitives';

const BlogLink = styled.a`
  &:hover {
    cursor: pointer;

    h3 {
      text-decoration: underline;
    }
  }
`;

export const BlogSection: FC = () => {
  return (
    <Box as="section" paddingY={['spacing600', 'spacing800']}>
      <Box margin="0 auto" width="100%" maxWidth="size200">
        <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>
          <Stack
            direction={['column', 'row']}
            rows={'40% 60%'}
            spacing="spacing300"
          >
            <Box>
              <Heading
                as="h2"
                size={['size300', 'size400', 'size500']}
                maxWidth={200}
              >
                From the blog
              </Heading>
            </Box>

            <Stack direction="column" as="ul" spacing="spacing600">
              <Box as="li">
                <Link href="/list">
                  <BlogLink>
                    <Stack direction="column" spacing="spacing100">
                      <Stack direction="column" spacing="spacing60">
                        <Heading
                          as="p"
                          size={['size80', 'size100']}
                          color="yellow200"
                        >
                          Serverless
                        </Heading>
                        <Heading
                          as="h3"
                          size={['size200', 'size300', 'size400']}
                          maxWidth={630}
                        >
                          Logging vs Tracing vs Profiling: Crash course
                        </Heading>
                      </Stack>

                      <Text fontSize={['size100', 'size200']} maxWidth={530}>
                        Containers and components, or maybe screeens and
                        components. Wait, where are my custom hooks?
                      </Text>

                      <Box
                        paddingTop="spacing300"
                        borderBottom="1px solid"
                        borderColor="gray300"
                      />
                    </Stack>
                  </BlogLink>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
