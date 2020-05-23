import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Router from 'next/router';

import { Layout } from '@/components/Layout';
import i18n, { Language } from '@/utils/i18n';
import { getTerms } from '@/utils/terms';
import { Head } from '@/components/Head';
import { Heading, Box, Text, Stack } from '@/components/primitives';
import { Tree } from '@/components/Tree';
import threes from '../../../content/trees.json';

const Index: NextPage<{ terms: string[] }> = ({ terms }) => {
  const t = i18n.useT();
  const { lang } = i18n.useI18n();

  return (
    <Layout>
      <Head title="Home" />

      <Box
        maxWidth={1200}
        paddingX={['spacing200', 'spacing400']}
        paddingY={['spacing500', 'spacing700']}
        margin="0 auto"
        as="section"
      >
        <Stack vertical spacing="spacing200">
          <Heading as="h1" fontSize={['size300', 'size600']} maxWidth={700}>
            Redefining the Cloud to better understand how it works.
          </Heading>

          <Text fontSize="size200" maxWidth={650}>
            From a microservice to a container and a service mesh, it can be
            hard to make sense of the words you see on a daily basis and how
            they relate to each other. This guide is here to help you get it.
          </Text>
        </Stack>
      </Box>

      <Box maxWidth="900px" margin="0 auto" paddingBottom="spacing400">
        <Box width="100%" height="1px" backgroundColor="gray300"></Box>
      </Box>

      <Box
        maxWidth="900px"
        margin="0 auto"
        justifyContent="center"
        paddingTop="spacing500"
        marginBottom="spacing400"
      >
        <Stack vertical>
          <Heading as="h2" fontSize={['size500']} textAlign="center">
            Let&#39;s dive in
          </Heading>
          <Heading
            as="h2"
            fontSize={['size500']}
            textAlign="center"
            color="yellow200"
          >
            Microservices architecture
          </Heading>
        </Stack>
      </Box>

      <Box
        maxWidth={1400}
        margin="0 auto"
        as="section"
        backgroundColor="yellow200"
      >
        <Tree
          tree={threes.microservices}
          onSelect={(value) => {
            if (!value) {
              // Empty value for non-clickable nodes
              return;
            }

            Router.push('/[lang]/[term]', `/${lang}/${value}`);
          }}
        />
      </Box>

      <p>This is a test {t('hello')}</p>

      <code>{JSON.stringify(terms)}</code>
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

export default Index;
