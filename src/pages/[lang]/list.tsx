import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import { Layout } from '@/components/Layout';
import i18n, { Language, SUPPORTED_LANGUAGES } from '@/utils/i18n';
import { getTerms } from '@/utils/terms';
import { Head } from '@/components/Head';
import { Box, Heading, Stack, Text } from '@/components/primitives';
import { TermAttributes } from '@/types';

interface ListPageProps {
  lang: Language;
  alternate: Language[];
  terms: TermAttributes[];
}

const TermItem = styled(Box)`
  a {
    display: block;

    &:hover {
      cursor: pointer;

      h3 {
        text-decoration: underline;
      }
    }
  }
`;

const List: NextPage<ListPageProps> = ({ lang, alternate, terms }) => {
  const t = i18n.useT();

  return (
    <Layout>
      <Head
        title={t('list:head:title')}
        description={t('list:head:description')}
        canonical={`/${lang}/list`}
        alternate={alternate.map((lang) => ({
          lang,
          url: `/${lang}/list`,
        }))}
      />

      <Box
        as="section"
        paddingY={['spacing600', 'spacing700']}
        paddingBottom={['spacing600', 'spacing900']}
      >
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
            paddingBottom={['spacing600', 'spacing700']}
          >
            {t('list:title')}
          </Heading>

          <Stack
            direction="column"
            as="ul"
            spacing={['spacing200', 'spacing400', 'spacing600']}
          >
            {terms.map((term, index) => {
              return (
                <TermItem as="li" key={term.slug}>
                  <Link href="/[lang]/[term]" as={`/${lang}/${term.slug}`}>
                    <a title={term.title}>
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
                            paddingTop={[
                              'spacing60',
                              'spacing200',
                              'spacing300',
                            ]}
                            borderBottom="1px solid"
                            borderColor="gray300"
                          />
                        )}
                      </Stack>
                    </a>
                  </Link>
                </TermItem>
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
  const terms = getTerms(params.lang);

  return {
    props: {
      terms,
      lang: params.lang,
      alternate: SUPPORTED_LANGUAGES.filter((lang) => lang !== params.lang),
    },
  };
};

export default List;
