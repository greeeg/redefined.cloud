import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PostAttributes } from '@/types';
import i18n from '@/utils/i18n';
import { Box, Stack, Heading, Text } from '@/components/primitives';

interface BlogSectionProps {
  posts: PostAttributes[];
}

const BlogLink = styled.a`
  &:hover {
    cursor: pointer;

    h3 {
      text-decoration: underline;
    }
  }
`;

export const BlogSection: FC<BlogSectionProps> = ({ posts }) => {
  const { lang } = i18n.useI18n();

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
                fontSize={['size300', 'size400', 'size500']}
                maxWidth={200}
              >
                From the blog
              </Heading>
            </Box>

            <Stack direction="column" as="ul" spacing="spacing600">
              {posts.map((post, index) => (
                <Box as="li" key={index}>
                  <Link
                    href="/[lang]/posts/[post]"
                    as={`/${lang}/posts/${post.slug}`}
                  >
                    <BlogLink>
                      <Stack direction="column" spacing="spacing100">
                        <Stack direction="column" spacing="spacing60">
                          <Heading
                            as="p"
                            fontSize={['size80', 'size100']}
                            color="yellow200"
                          >
                            {post.tag}
                          </Heading>
                          <Heading
                            as="h3"
                            fontSize={['size200', 'size300', 'size400']}
                            maxWidth={630}
                          >
                            {post.title}
                          </Heading>
                        </Stack>

                        <Text fontSize={['size100', 'size200']} maxWidth={530}>
                          {post.description}
                        </Text>

                        {index !== posts.length - 1 && (
                          <Box
                            paddingTop="spacing300"
                            borderBottom="1px solid"
                            borderColor="gray300"
                          />
                        )}
                      </Stack>
                    </BlogLink>
                  </Link>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
