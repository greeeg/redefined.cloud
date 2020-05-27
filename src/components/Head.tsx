import React, { FC } from 'react';
import NextHead from 'next/head';
import i18n from '@/utils/i18n';

interface HeadProps {
  title: string;
  // '%s - My Template' example
  titleTemplate?: string;
  description?: string;
  canonical?: string;
}

export const Head: FC<HeadProps> = ({
  title,
  titleTemplate = '%s - Redefined.cloud',
  description,
  canonical,
}) => {
  const { lang } = i18n.useI18n();
  const renderedTitle = titleTemplate.replace('%s', title);

  return (
    <NextHead>
      <title key="title">{renderedTitle}</title>
      <meta name="description" content={description} key="description" />

      {canonical && (
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${canonical}`}
          key="canonical"
        />
      )}

      <meta itemProp="name" key="itemProp:name" content={renderedTitle} />
      <meta
        itemProp="description"
        key="itemProp:description"
        content={description}
      />

      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" key="twitter:title" content={renderedTitle} />
      <meta
        name="twitter:description"
        key="twitter:description"
        content={description}
      />
      <meta
        key="twitter:image"
        name="twitter:image"
        content="https://greeeg-portfolio-cdn.netlify.app/v2/img/greeeg-share-twitter.jpg"
      />
      <meta
        key="twitter:url"
        name="twitter:url"
        content={process.env.NEXT_PUBLIC_BASE_URL}
      />

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={renderedTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta
        key="og:image"
        property="og:image"
        content="https://greeeg-portfolio-cdn.netlify.app/v2/img/greeeg-share-facebook.jpg"
      />
      <meta key="og:image:width" property="og:image:width" content="1450" />
      <meta key="og:image:height" property="og:image:height" content="900" />
      <meta key="og:locale" property="og:locale" content={lang} />
      <meta
        key="og:url"
        property="og:url"
        content={process.env.NEXT_PUBLIC_BASE_URL}
      />
      <meta
        key="og:site_name"
        property="og:site_name"
        content="Redefined.cloud"
      />
    </NextHead>
  );
};
