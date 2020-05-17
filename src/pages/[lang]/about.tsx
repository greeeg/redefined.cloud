import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import i18n from '@/utils/i18n';
import { Head } from '@/components/Head';
import { Heading } from '@/components/primitives';
import { Layout } from '@/components/Layout';

const About: NextPage = () => {
  const t = i18n.useT();

  return (
    <Layout>
      <Head title="Home" />
      <Heading as="h1">About</Heading>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { ...params },
  };
};

export default About;
