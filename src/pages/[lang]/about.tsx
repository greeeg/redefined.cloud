import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import i18n, { Language } from '@/utils/i18n';
import { getPage } from '@/utils/pages';
import { Head } from '@/components/Head';
import { Box, Heading } from '@/components/primitives';
import { Layout } from '@/components/Layout';
import { Markdown } from '@/components/Markdown';

interface AboutPageProps {
  lang: Language;
  alternate: Language[];
  content: string;
}

const About: NextPage<AboutPageProps> = ({ lang, alternate, content }) => {
  const t = i18n.useT();

  return (
    <Layout>
      <Head
        title={t('about:head:title')}
        description={t('about:head:description')}
        canonical={`/${lang}/about`}
        alternate={alternate.map((lang) => ({
          lang,
          url: `/${lang}/about`,
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
            paddingBottom={['spacing400', 'spacing700']}
          >
            {t('about:title')}
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
      content: getPage({ lang: params.lang, page: 'about' }),
      alternate: ['fr', 'en'].filter((lang) => lang !== params.lang),
    },
  };
};

export default About;
