import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import { TermPage, TermAttributes } from '@/types';
import { getTermPaths, getTermPage, getTerm } from '@/utils/terms';
import i18n, { Language } from '@/utils/i18n';
import { getTermContributeLink } from '@/utils/contribute';
import {
  getFacebookShareLink,
  getTwitterShareLink,
  getLinkedinShareLink,
} from '@/utils/social';
import { theme } from '@/theme';
import { Layout } from '@/components/Layout';
import { Head } from '@/components/Head';
import { Markdown } from '@/components/Markdown';
import { Box, Stack, Heading } from '@/components/primitives';
import { HEADER_HEIGHT } from '@/components/Header';

const BlogLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ShareLink = styled.a`
  display: inline-block;
  width: 20px;
  height: 20px;

  path {
    fill: ${(p) => p.theme.colors.gray500};
    transition: ${(p) => p.theme.transitions.transition100};
  }

  &:hover {
    path {
      fill: ${(p) => p.theme.colors.gray900};
    }
  }
`;

interface TermPageProps {
  lang: Language;
  alternate: Language[];
  content: TermPage;
  relatedTerms: TermAttributes[];
}

const Term: NextPage<TermPageProps> = ({
  lang,
  alternate,
  content,
  relatedTerms,
}) => {
  const t = i18n.useT();

  return (
    <Layout>
      <Head
        title={content.attributes.title}
        description={content.attributes.description}
        canonical={`/${lang}/${content.attributes.slug}`}
        alternate={alternate.map((lang) => ({
          lang,
          url: `/${lang}/${content.attributes.slug}`,
        }))}
      />

      <Box
        as="section"
        paddingTop={['spacing500']}
        paddingBottom={['spacing600', 'spacing900']}
      >
        <Box margin="0 auto" width="100%" maxWidth="size100">
          <Box paddingX={['spacing200', 'spacing400', 'spacing600']}>
            <Box maxWidth={700} paddingBottom={['spacing100', 'spacing200']}>
              <Stack direction="column" spacing="spacing60">
                <Heading as="p" color="yellow200" fontSize="size100">
                  {t('term:subtitle').toUpperCase()}
                </Heading>
                <Heading as="h1" fontSize={['size400', 'size500', 'size600']}>
                  {content.attributes.title}
                </Heading>
              </Stack>
            </Box>

            <Box maxWidth={720} paddingBottom={['spacing300', 'spacing500']}>
              <Heading
                as="p"
                fontSize={['size200', 'size300']}
                lineHeight="lineHeight100"
                fontWeight="size80"
              >
                {content.attributes.description}
              </Heading>
            </Box>

            <Stack
              direction={['column', 'column', 'row']}
              rows="680px 1fr"
              spacing={['spacing600', 'spacing600', 'spacing700']}
            >
              <Markdown content={content.content} />

              <Box as="aside" display="flex">
                <Box width="100%" maxWidth={['100%', 340, 230]}>
                  <Stack
                    direction="column"
                    spacing="spacing400"
                    position={['relative', 'relative', 'sticky']}
                    top={[
                      'inherit',
                      'inherit',
                      HEADER_HEIGHT[1] + theme.space.spacing500,
                    ]}
                  >
                    <Stack direction="column" spacing="spacing100">
                      <Heading as="h3" color="yellow200" fontSize="size200">
                        {t('term:relatedTerms:title')}
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
                              <BlogLink
                                href={`/${lang}/${relatedTerm.slug}`}
                                title={relatedTerm.title}
                              >
                                <Heading as="span" fontSize="size100">
                                  {relatedTerm.name}
                                </Heading>
                              </BlogLink>
                            </Link>
                            <Box
                              borderBottom="1px solid"
                              borderColor="gray300"
                            />
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>

                    <Box>
                      <Heading
                        as="p"
                        fontSize="size100"
                        lineHeight="lineHeight100"
                        maxWidth={140}
                        paddingBottom="spacing80"
                      >
                        {t('term:social:title')}
                      </Heading>

                      <Box as="ul" display="flex" flexDirection="row">
                        <Box as="li" paddingRight="spacing80">
                          <ShareLink
                            href={getFacebookShareLink(
                              `/${lang}/${content.attributes.slug}`
                            )}
                            title={t('term:social:facebook:title')}
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                            </svg>
                          </ShareLink>
                        </Box>
                        <Box as="li" paddingRight="spacing80">
                          <ShareLink
                            href={getTwitterShareLink(
                              `/${lang}/${content.attributes.slug}`
                            )}
                            title={t('term:social:twitter:title')}
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                            </svg>
                          </ShareLink>
                        </Box>
                        <Box as="li">
                          <ShareLink
                            href={getLinkedinShareLink(
                              `/${lang}/${content.attributes.slug}`
                            )}
                            title={t('term:social:linkedin:title')}
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </ShareLink>
                        </Box>
                      </Box>
                    </Box>

                    <BlogLink
                      target="_blank"
                      rel="noreferrer"
                      title={t('term:contribute:description')}
                      href={getTermContributeLink({
                        term: content.attributes.slug,
                        lang,
                      })}
                    >
                      <Box backgroundColor="gray100" padding="spacing200">
                        <Stack direction="column" spacing="spacing60">
                          <Heading
                            as="p"
                            fontSize="size80"
                            fontWeight="size80"
                            lineHeight="lineHeight100"
                            maxWidth={140}
                          >
                            {t('term:contribute:title')}
                          </Heading>
                          <Heading
                            as="p"
                            fontSize="size100"
                            fontWeight="size100"
                            lineHeight="lineHeight100"
                          >
                            {t('term:contribute:description')}
                          </Heading>
                        </Stack>
                      </Box>
                    </BlogLink>
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
  unknown,
  { lang: Language; term: string }
> = async (context) => {
  const {
    params: { lang, term },
  } = context;
  const termPage = getTermPage({ lang, term });
  const relatedTerms = termPage.attributes.relatedTerms.map((slug) =>
    getTerm({ term: slug, lang })
  );

  return {
    props: {
      lang,
      relatedTerms,
      content: termPage,
      alternate: termPage.languages.filter((l) => l !== lang),
    },
  };
};

export default Term;
