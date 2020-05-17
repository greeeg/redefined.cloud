import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '@/components/Layout';
import { getTermPaths } from '../../utils/getPagePaths';
import { getTermContent } from '../../utils/getPageContent';
import { Markdown } from '@/components/Markdown';

const Term: FC<{ content: any }> = (props) => {
  return (
    <Layout>
      <h1>Term</h1>
      <Markdown content={props.content.content} />
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
