import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import i18n, { Language } from '@/utils/i18n';
import { Head } from '@/components/Head';
import { Box, Heading } from '@/components/primitives';
import { Layout } from '@/components/Layout';
import { getAbout } from '@/utils/about';
import { Markdown } from '@/components/Markdown';

interface AboutProps {
  content: string;
}

const About: NextPage<AboutProps> = ({ content }) => {
  const t = i18n.useT();

  return (
    <Layout>
      <Head title="Home" />

      <Box as="section" paddingY={['spacing600', 'spacing700']}>
        <Box
          margin="0 auto"
          width="100%"
          maxWidth="size200"
          paddingX={['spacing200', 'spacing400', 'spacing600']}
        >
          <Heading as="h1" size={['size400', 'size500', 'size600']}>
            About the project
          </Heading>
        </Box>
      </Box>

      <Markdown content={content} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18n.getI18nStaticPaths([
      {
        en: {},
      },
    ]),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { lang: Language }> = async (
  context
) => {
  const {
    params: { lang },
  } = context;

  return {
    props: { content: getAbout(lang) },
  };
};

export default About;
