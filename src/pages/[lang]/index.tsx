import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { PostAttributes } from '@/types';
import i18n, { Language } from '@/utils/i18n';
import { getPosts } from '@/utils/posts';
import { Layout } from '@/components/Layout';
import { Head } from '@/components/Head';
import { TreeSection } from '@/components/pages/index/TreeSection';
import { HeroSection } from '@/components/pages/index/HeroSection';
import { BlogSection } from '@/components/pages/index/BlogSection';

const Index: NextPage<{ posts: PostAttributes[] }> = ({ posts }) => {
  const { lang } = i18n.useI18n();
  const t = i18n.useT();

  return (
    <Layout>
      <Head
        title={t('home:head:title')}
        description={t('home:head:description')}
        canonical={`/${lang}`}
      />

      <HeroSection />
      <TreeSection />
      <BlogSection posts={posts} />
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
  const posts = getPosts(params.lang as Language);

  return {
    props: { ...params, posts },
  };
};

export default Index;
