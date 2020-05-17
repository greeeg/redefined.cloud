import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Router from 'next/router';

import { Layout } from '@/components/Layout';
import i18n, { Language } from '@/utils/i18n';
import { getTerms } from '@/utils/terms';
import { Head } from '@/components/Head';
import { Heading } from '@/components/primitives';
import { Tree } from '@/components/Tree';
import threes from '../../../content/trees.json';

const Index: NextPage<{ terms: string[] }> = ({ terms }) => {
  const t = i18n.useT();
  const { lang } = i18n.useI18n();

  return (
    <Layout>
      <Head title="Home" />
      <Heading as="h1">Hello</Heading>
      <p>This is a test {t('hello')}</p>

      <Tree
        tree={threes.microservices}
        onSelect={(value) => {
          if (!value) {
            // Empty value for non-clickable nodes
            return;
          }

          Router.push('/[lang]/[term]', `/${lang}/${value}`);
        }}
      />

      <code>{JSON.stringify(terms)}</code>
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
  const terms = getTerms(params.lang as Language);
  return {
    props: { ...params, terms },
  };
};

export default Index;
