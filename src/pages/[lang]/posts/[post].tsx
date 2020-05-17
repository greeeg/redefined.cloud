import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '@/components/Layout';
import { getPostPaths } from '../../../utils/getPagePaths';
import { getPostContent } from '../../../utils/getPageContent';

const Post: FC = (props) => {
  return <Layout>Post</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  any,
  { lang: string; post: string }
> = async (context) => {
  const {
    params: { lang, post },
  } = context;
  return { props: { content: getPostContent({ lang, post }) } };
};

export default Post;
