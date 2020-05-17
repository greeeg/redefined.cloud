import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import i18n, { Language } from '@/utils/i18n';
import { getTerms } from '@/utils/terms';
import { Head } from '@/components/Head';
import { Heading } from '@/components/primitives';
import { TermAttributes } from '@/types';

interface ListProps {
  terms: TermAttributes[];
}

const List: NextPage<ListProps> = ({ terms }) => {
  const { lang } = i18n.useI18n();

  return (
    <Layout>
      <Head title="Home" />
      <Heading as="h1">List</Heading>

      {terms.map((term) => {
        return (
          <Link
            href="/[lang]/[term]"
            as={`/${lang}/${term.slug}`}
            key={term.slug}
          >
            <Heading as="h2">{term.title}</Heading>
          </Link>
        );
      })}
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

export default List;
