import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import i18n, { Language } from '@/utils/i18n';
import { getTerms } from '@/utils/terms';
import { Head } from '@/components/Head';
import { Box, Heading, Stack } from '@/components/primitives';
import { TermAttributes } from '@/types';

interface ListProps {
  terms: TermAttributes[];
}

const List: NextPage<ListProps> = ({ terms }) => {
  const { lang } = i18n.useI18n();

  return (
    <Layout>
      <Head title="Home" />

      <Box as="section" paddingY={['spacing600', 'spacing700']}>
        <Box
          margin="0 auto"
          width="100%"
          maxWidth="size200"
          paddingX={['spacing200', 'spacing400', 'spacing600']}
        >
          <Heading as="h1" size={['size400', 'size500', 'size600']}>
            List
          </Heading>

          <Stack vertical spacing="spacing200">
            {terms.map((term) => {
              return (
                <Link
                  href="/[lang]/[term]"
                  as={`/${lang}/${term.slug}`}
                  key={term.slug}
                >
                  <Heading as="h2" size="size300">
                    {term.title}
                  </Heading>
                </Link>
              );
            })}
          </Stack>
        </Box>
      </Box>
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

export default List;
