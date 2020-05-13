import React from 'react';
import { GetStaticPaths } from 'next';
import styled from 'styled-components';

import i18n from '@/utils/i18n';
import { Heading } from '@/components/primitives';

const Index = () => {
  const t = i18n.useT();

  return (
    <div>
      <Heading as="h1">Hello</Heading>
      <p>This is a test {t('hello')}</p>
    </div>
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

export async function getStaticProps({ params }) {
  return {
    props: { ...params },
  };
}

export default Index;
