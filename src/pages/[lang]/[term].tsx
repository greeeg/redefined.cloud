import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import { Layout } from '@/components/Layout';
import { Head } from '@/components/Head';
import { getTermPaths } from '../../utils/getPagePaths';
import { getTermContent } from '../../utils/getPageContent';
import { Markdown } from '@/components/Markdown';
import { Box, Stack, Heading } from '@/components/primitives';

const BlogLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Term: FC<{ content: any }> = (props) => {
  return (
    <Layout>
      <Head title={props.content.attributes.title} />

      <Box as="section" paddingTop={['spacing500']} paddingBottom="spacing900">
        <Box margin="0 auto" width="100%" maxWidth="size100">
          <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>
            <Box maxWidth={700} paddingBottom="spacing200">
              <Stack direction="column" spacing="spacing60">
                <Heading as="p" color="yellow200" size="size100">
                  TERM
                </Heading>
                <Heading as="h1" size={['size400', 'size500', 'size600']}>
                  {props.content.attributes.title}
                </Heading>
              </Stack>
            </Box>

            <Box maxWidth={720} paddingBottom="spacing500">
              <Heading
                as="p"
                size="size300"
                lineHeight="lineHeight100"
                variation="secondary"
              >
                {props.content.attributes.description}
              </Heading>
            </Box>

            <Stack
              direction={['column', 'row']}
              rows="70% 30%"
              spacing="spacing900"
            >
              <Markdown content={props.content.content} />

              <Box>
                <Box maxWidth={224}>
                  <Stack direction="column" spacing="spacing100">
                    <Heading as="h3" color="yellow200" size="size200">
                      Related terms
                    </Heading>

                    <Box borderBottom="1px solid" borderColor="gray300" />

                    <Link href="/">
                      <BlogLink title="Load balancer">
                        <Heading as="span" size="size100">
                          Load balancer
                        </Heading>
                      </BlogLink>
                    </Link>
                    <Box borderBottom="1px solid" borderColor="gray300" />
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
    paths: getTermPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  any,
  { lang: string; term: string }
> = async (context) => {
  const {
    params: { lang, term },
  } = context;
  return { props: { content: getTermContent({ lang, term }) } };
};

export default Term;
