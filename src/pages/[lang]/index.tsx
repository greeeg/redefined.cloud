import React from 'react';
import { GetStaticPaths } from 'next';
import i18n from '@/utils/i18n';

const Index = () => {
  const t = i18n.useT();

  return (
    <div>
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
