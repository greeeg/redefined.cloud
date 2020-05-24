import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '@/components/Layout';
import { Head } from '@/components/Head';
import { getTermPaths } from '../../utils/getPagePaths';
import { getTermContent } from '../../utils/getPageContent';
import { Markdown } from '@/components/Markdown';
import { Box, Stack, Heading } from '@/components/primitives';

const Term: FC<{ content: any }> = (props) => {
  return (
    <Layout>
      <Head title={props.content.attributes.title} />

      <Box
        as="section"
        margin="0 auto"
        width="100%"
        maxWidth="size100"
        paddingTop="spacing600"
      >
        <Box maxWidth="size80" paddingBottom="spacing500">
          <Stack vertical>
            <Stack vertical spacing="spacing60">
              <Heading as="p" color="yellow200" size="size100">
                TERM
              </Heading>
              <Heading as="h1" size="size600">
                {props.content.attributes.title}
              </Heading>
            </Stack>
          </Stack>
        </Box>

        <Stack spacing="spacing300">
          <Box maxWidth="size80">
            <Markdown content={props.content.content} />
          </Box>
          <Box>Test</Box>
        </Stack>
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
