import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getTermPaths } from '../../../utils/getPagePaths';
import { getTermContent } from '../../../utils/getPageContent';

const Term: FC = (props) => {
  return <h1>Term</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log(getTermPaths());
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
