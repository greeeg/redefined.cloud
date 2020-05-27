import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { PostPage } from '@/types';
import { getPostPaths, getPostPage } from '@/utils/posts';
import { Layout } from '@/components/Layout';
import { Markdown } from '@/components/Markdown';
import { Box, Stack, Heading } from '@/components/primitives';
import { Head } from '@/components/Head';
import i18n from '@/utils/i18n';

const Post: NextPage<{ content: PostPage }> = ({ content }) => {
  const { lang } = i18n.useI18n();

  return (
    <Layout>
      <Head
        title={content.attributes.title}
        description={content.attributes.description}
        canonical={`/${lang}/posts/${content.attributes.slug}`}
      />

      <Box as="section" paddingTop={['spacing500']} paddingBottom="spacing900">
        <Box margin="0 auto" width="100%" maxWidth="size100">
          <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>
            <Box maxWidth={700} paddingBottom="spacing200">
              <Stack direction="column" spacing="spacing60">
                <Heading as="p" color="yellow200" fontSize="size100">
                  {content.attributes.tag}
                </Heading>
                <Heading as="h1" fontSize={['size400', 'size500', 'size600']}>
                  {content.attributes.title}
                </Heading>
              </Stack>
            </Box>

            <Box maxWidth={720} paddingBottom="spacing500">
              <Heading
                as="p"
                fontSize="size300"
                lineHeight="lineHeight100"
                fontWeight="size80"
              >
                {content.attributes.description}
              </Heading>
            </Box>

            <Stack
              direction={['column', 'row']}
              rows="70% 30%"
              spacing="spacing900"
            >
              <Markdown content={content.content} />

              <Box as="aside">
                <Box maxWidth={224}>
                  <Stack direction="column" spacing="spacing100">
                    <Heading as="h3" color="yellow200" fontSize="size200">
                      Related terms
                    </Heading>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  any,
  { lang: string; post: string }
> = async (context) => {
  const {
    params: { lang, post },
  } = context;
  return { props: { content: getPostPage({ lang, post }) } };
};

export default Post;
