import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import i18n, { Language } from '@/utils/i18n';
import { getPage } from '@/utils/pages';
import { Head } from '@/components/Head';
import { Box, Heading } from '@/components/primitives';
import { Layout } from '@/components/Layout';
import { Markdown } from '@/components/Markdown';

interface TermsPageProps {
  lang: Language;
  alternate: Language[];
  content: string;
}

const Terms: NextPage<TermsPageProps> = ({ lang, alternate, content }) => {
  const t = i18n.useT();

  return (
    <Layout>
      <Head
        title={t('privacy:head:title')}
        description={t('privacy:head:description')}
        canonical={`/${lang}/terms-and-privacy`}
        alternate={alternate.map((lang) => ({
          lang,
          url: `/${lang}/terms-and-privacy`,
        }))}
      />

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
            {t('privacy:title')}
          </Heading>

          <Box maxWidth={624} margin="0 auto">
            <Markdown content={content} />
          </Box>
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
  return {
    props: {
      lang: params.lang,
      content: getPage({ lang: params.lang, page: 'privacy' }),
      alternate: ['fr', 'en'].filter((lang) => lang !== params.lang),
    },
  };
};

export default Terms;
