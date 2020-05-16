import React, { FC } from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title: string;
  // '%s - My Template' example
  titleTemplate?: string;
}

export const Head: FC<HeadProps> = ({
  title,
  titleTemplate = '%s - Redefined Cloud',
}) => {
  return (
    <NextHead>
      <title key="title">{titleTemplate.replace('%s', title)}</title>
      <meta
        property="og:title"
        content={titleTemplate.replace('%s', title)}
        key="og:title"
      />
    </NextHead>
  );
};
