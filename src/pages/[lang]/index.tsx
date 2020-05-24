import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Layout } from '@/components/Layout';
import i18n, { Language } from '@/utils/i18n';
import { getTerms } from '@/utils/terms';
import { Head } from '@/components/Head';
import { TreeSection } from '@/components/pages/index/TreeSection';
import { HeroSection } from '@/components/pages/index/HeroSection';
import { BlogSection } from '@/components/pages/index/BlogSection';

const Index: NextPage<{ terms: string[] }> = () => {
  return (
    <Layout>
      <Head title="Home" />

      <HeroSection />
      <TreeSection />
      <BlogSection />
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const terms = getTerms(params.lang as Language);
  return {
    props: { ...params, terms },
  };
};

export default Index;
