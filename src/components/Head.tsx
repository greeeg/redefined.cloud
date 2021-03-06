import React, { FC } from 'react';
import NextHead from 'next/head';
import i18n from '@/utils/i18n';

interface HeadProps {
  title: string;
  // '%s - My Template' example
  titleTemplate?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  alternate?: Array<{ lang: string; url: string }>;
}

export const Head: FC<HeadProps> = ({
  title,
  titleTemplate = '%s - Redefined.cloud',
  description,
  canonical,
  alternate,
  ogImage = '/assets/social-facebook.jpg',
  twitterImage = '/assets/social-twitter.jpg',
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

      {alternate &&
        alternate.map((link) => (
          <link
            key={link.lang}
            rel="alternate"
            hrefLang={link.lang}
            href={`${process.env.NEXT_PUBLIC_BASE_URL}${link.url}`}
          />
        ))}

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
        content={`${process.env.NEXT_PUBLIC_BASE_URL}${twitterImage}`}
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
        content={`${process.env.NEXT_PUBLIC_BASE_URL}${ogImage}`}
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
