import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import { Layout } from '@/components/Layout';
import i18n, { Language } from '@/utils/i18n';
import { getTerms } from '@/utils/terms';
import { Head } from '@/components/Head';
import { Box, Heading, Stack, Text } from '@/components/primitives';
import { TermAttributes } from '@/types';

interface ListProps {
  terms: TermAttributes[];
}

const BlogLink = styled.a`
  &:hover {
    cursor: pointer;

    h3 {
      text-decoration: underline;
    }
  }
`;

const List: NextPage<ListProps> = ({ terms }) => {
  const { lang } = i18n.useI18n();

  return (
    <Layout>
      <Head title="Home" />

      <Box as="section" paddingY={['spacing600', 'spacing700']}>
        <Box
          margin="0 auto"
          width="100%"
          maxWidth="size100"
          paddingX={['spacing200', 'spacing400', 'spacing600']}
        >
          <Heading
            as="h1"
            fontSize={['size400', 'size500', 'size600']}
            textAlign="center"
            paddingBottom="spacing700"
          >
            A list, from A to Z
          </Heading>

          <Stack direction="column" as="ul" spacing="spacing600">
            {terms.map((term, index) => {
              return (
                <Box as="li" key={term.slug}>
                  <Link href="/[lang]/[term]" as={`/${lang}/${term.slug}`}>
                    <BlogLink title={term.title}>
                      <Stack direction="column" spacing="spacing100">
                        <Stack direction="column" spacing="spacing60">
                          <Heading
                            as="h3"
                            fontSize={['size200', 'size300', 'size400']}
                            maxWidth={630}
                          >
                            {term.name}
                          </Heading>
                        </Stack>

                        <Text fontSize={['size100', 'size200']} maxWidth={530}>
                          {term.description}
                        </Text>

                        {index !== terms.length - 1 && (
                          <Box
                            paddingTop="spacing300"
                            borderBottom="1px solid"
                            borderColor="gray300"
                          />
                        )}
                      </Stack>
                    </BlogLink>
                  </Link>
                </Box>
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
