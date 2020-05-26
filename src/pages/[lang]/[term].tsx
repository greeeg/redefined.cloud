import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import i18n from '@/utils/i18n';
import { Layout } from '@/components/Layout';
import { Head } from '@/components/Head';
import { getTermPaths, getTermPage, getTerm } from '@/utils/terms';
import { Markdown } from '@/components/Markdown';
import { Box, Stack, Heading } from '@/components/primitives';
import { TermPage, TermAttributes } from '@/types';

const BlogLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Term: NextPage<{ content: TermPage; relatedTerms: TermAttributes[] }> = ({
  content,
  relatedTerms,
}) => {
  const { lang } = i18n.useI18n();

  return (
    <Layout>
      <Head title={content.attributes.title} />

      <Box as="section" paddingTop={['spacing500']} paddingBottom="spacing900">
        <Box margin="0 auto" width="100%" maxWidth="size100">
          <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>
            <Box maxWidth={700} paddingBottom="spacing200">
              <Stack direction="column" spacing="spacing60">
                <Heading as="p" color="yellow200" fontSize="size100">
                  TERM
                </Heading>
                <Heading as="h1" fontSize={['size400', 'size500', 'size600']}>
                  {content.attributes.title}
                </Heading>
              </Stack>
            </Box>

            <Box maxWidth={720} paddingBottom="spacing500">
              <Heading
                as="p"
                fontSize="size300"
                lineHeight="lineHeight100"
                fontWeight="size80"
              >
                {content.attributes.description}
              </Heading>
            </Box>

            <Stack
              direction={['column', 'row']}
              rows="70% 30%"
              spacing="spacing900"
            >
              <Markdown content={content.content} />

              <Box as="aside">
                <Box maxWidth={224}>
                  <Stack direction="column" spacing="spacing100">
                    <Heading as="h3" color="yellow200" fontSize="size200">
                      Related terms
                    </Heading>

                    <Box borderBottom="1px solid" borderColor="gray300" />

                    <Stack as="ul" direction="column" spacing="spacing80">
                      {relatedTerms.map((relatedTerm) => (
                        <Stack
                          as="li"
                          key={relatedTerm.slug}
                          direction="column"
                          spacing="spacing80"
                        >
                          <Link
                            href="/[lang]/[term]"
                            as={`/${lang}/${relatedTerm.slug}`}
                          >
                            <BlogLink title={relatedTerm.title}>
                              <Heading as="span" fontSize="size100">
                                {relatedTerm.name}
                              </Heading>
                            </BlogLink>
                          </Link>
                          <Box borderBottom="1px solid" borderColor="gray300" />
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
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
  const termPage = getTermPage({ lang, term });
  const relatedTerms = termPage.attributes.relatedTerms.map((slug) =>
    getTerm({ term: slug, lang })
  );

  return { props: { content: termPage, relatedTerms } };
};

export default Term;
