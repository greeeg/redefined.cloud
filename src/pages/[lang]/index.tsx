import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { PostAttributes } from '@/types';
import i18n, { Language, SUPPORTED_LANGUAGES } from '@/utils/i18n';
import { getPosts } from '@/utils/posts';
import { Layout } from '@/components/Layout';
import { Head } from '@/components/Head';
import { TreeSection } from '@/components/pages/index/TreeSection';
import { HeroSection } from '@/components/pages/index/HeroSection';
import { BlogSection } from '@/components/pages/index/BlogSection';

interface IndexPageProps {
  lang: Language;
  alternate: Language[];
  posts: PostAttributes[];
}

const Index: NextPage<IndexPageProps> = ({ lang, alternate, posts }) => {
  const t = i18n.useT();

  return (
    <Layout>
      <Head
        title={t('home:head:title')}
        description={t('home:head:description')}
        canonical={`/${lang}`}
        alternate={alternate.map((lang) => ({
          lang,
          url: `/${lang}`,
        }))}
      />

      <HeroSection />
      <TreeSection />

      {posts.length > 0 && <BlogSection posts={posts} />}
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

export const getStaticProps: GetStaticProps<
  unknown,
  { lang: Language }
> = async ({ params }) => {
  const posts = getPosts(params.lang);

  return {
    props: {
      posts,
      lang: params.lang,
      alternate: SUPPORTED_LANGUAGES.filter((lang) => lang !== params.lang),
    },
  };
};

export default Index;
