import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import i18n, { Language } from '@/utils/i18n';
import { Head } from '@/components/Head';
import { Heading } from '@/components/primitives';
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
      <Heading as="h1">About</Heading>
      <Markdown content={content} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18n.getI18nStaticPaths([
      {
        en: {},
        fr: {},
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
