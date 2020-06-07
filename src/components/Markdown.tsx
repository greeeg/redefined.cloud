import React, { FC } from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';

import i18n from '@/utils/i18n';
import { Heading, Text, Stack } from '@/components/primitives';
import { md } from '@/theme';

interface MarkdownProps {
  content: string;
}

const Container = styled.div`
  p:first-child {
    padding-top: 0;
  }

  h2 + p,
  h3 + p,
  h2 + ul,
  h3 + ul,
  p + ul {
    padding-top: ${(p) => p.theme.space.spacing100}px;

    ${md(css`
      padding-top: ${(p) => p.theme.space.spacing200}px;
    `)}
  }

  p[data-paragraph-type='image'] {
    padding-top: ${(p) => p.theme.space.spacing400}px;

    ${md(css`
      padding-top: ${(p) => p.theme.space.spacing600}px;
    `)}

    & + p {
      font-size: ${(p) => p.theme.fontSizes.size80}px;
      padding-top: ${(p) => p.theme.space.spacing40}px;
      text-align: center;
      color: ${(p) => p.theme.colors.gray600};

      ${md(css`
        font-size: ${(p) => p.theme.fontSizes.size100}px;
        padding-bottom: ${(p) => p.theme.space.spacing200}px;
      `)}
    }
  }
`;

const H2: FC = ({ children }) => (
  <Heading
    as="h2"
    fontSize={['size200', 'size300']}
    lineHeight="lineHeight100"
    paddingTop={['spacing400', 'spacing600']}
    maxWidth={['100%', '80%']}
  >
    {children}
  </Heading>
);

const H3: FC = ({ children }) => (
  <Heading
    as="h2"
    fontSize={['size100', 'size200']}
    lineHeight="lineHeight100"
    paddingTop={['spacing300', 'spacing500']}
    maxWidth={['100%', '80%']}
  >
    {children}
  </Heading>
);

const Paragraph: FC = ({ children }) => {
  const childrenContainImages = children[0].type?.name === 'Image';

  return (
    <Text
      fontSize={['size100', 'size200']}
      color="gray900"
      paddingTop={['spacing200', 'spacing300']}
      data-paragraph-type={childrenContainImages ? 'image' : 'text'}
    >
      {children}
    </Text>
  );
};

const RawLink = styled.a`
  font-size: ${(p) => p.theme.fontSizes.size100}px;
  text-decoration: underline;
  cursor: pointer;
  transition: all ${(p) => p.theme.transitions.transition100};

  &:hover {
    color: ${(p) => p.theme.colors.yellow200};
  }

  ${md(css`
    font-size: ${(p) => p.theme.fontSizes.size200}px;
  `)}
`;

const Link: FC<{ href: string; title?: string }> = ({
  href,
  title,
  children,
}) => {
  const { lang } = i18n.useI18n();

  if (href.startsWith('#')) {
    return (
      <NextLink href="/[lang]/[term]" as={`/${lang}/${href.substr(1)}`}>
        <RawLink title={title} href={`/${lang}/${href.substr(1)}`}>
          {children}
        </RawLink>
      </NextLink>
    );
  }

  return (
    <RawLink
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer nofollow"
    >
      {children}
    </RawLink>
  );
};

const RawDotList = styled(Stack)`
  list-style: disc;
  padding-top: ${(p) => p.theme.space.spacing200}px;
  padding-left: ${(p) => p.theme.space.spacing200}px;

  ${md(css`
    padding-top: ${(p) => p.theme.space.spacing300}px;
  `)}
`;

const DotList: FC = ({ children }) => {
  return (
    <RawDotList as="ul" direction="column" spacing="spacing100">
      {children}
    </RawDotList>
  );
};

const ListItem: FC = ({ children }) => {
  return (
    <Text as="li" fontSize={['size100', 'size200']} color="gray900">
      {children}
    </Text>
  );
};

const RawImage = styled.a`
  cursor: zoom-in;

  img {
    width: 100%;
    height: auto;
  }

  & + p {
    padding-top: 0;
  }
`;

const Image: FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  const url = `${baseURL}/assets/content${src}`;

  return (
    <RawImage href={url} target="_blank" rel="noreferrer" title={alt}>
      <img src={url} alt={alt} />
    </RawImage>
  );
};

export const Markdown: FC<MarkdownProps> = ({ content }) => {
  return (
    <Container>
      {
        unified()
          .use(parse)
          .use(remark2react, {
            remarkReactComponents: {
              p: Paragraph,
              h2: H2,
              h3: H3,
              a: Link,
              ul: DotList,
              li: ListItem,
              img: Image,
            },
          })
          // Types are somehow wrong for `result` on VFile
          // @ts-ignore
          .processSync(content).result
      }
    </Container>
  );
};
