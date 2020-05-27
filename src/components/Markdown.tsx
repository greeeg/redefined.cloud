import React, { FC } from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import NextLink from 'next/link';
import styled from 'styled-components';

import i18n from '@/utils/i18n';
import { Heading, Text, Stack } from '@/components/primitives';

interface MarkdownProps {
  content: string;
}

const Container = styled.div`
  p:first-child {
    padding-top: 0;
  }

  h2 + p {
    padding-top: ${(p) => p.theme.space.spacing200}px;
  }
`;

const H2: FC = ({ children }) => (
  <Heading as="h2" fontSize="size300" paddingTop="spacing600">
    {children}
  </Heading>
);

const Paragraph: FC = ({ children }) => (
  <Text fontSize="size200" color="gray900" paddingTop="spacing300">
    {children}
  </Text>
);

const RawLink = styled.a`
  font-size: ${(p) => p.theme.fontSizes.size200}px;
  text-decoration: underline;
  cursor: pointer;
  transition: all ${(p) => p.theme.transitions.transition100};

  &:hover {
    color: ${(p) => p.theme.colors.yellow200};
  }
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
        <RawLink title={title}>{children}</RawLink>
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

const DotListRaw = styled(Stack)`
  list-style: disc;
  padding-top: ${(p) => p.theme.space.spacing300}px;
  padding-left: ${(p) => p.theme.space.spacing200}px;
`;

const DotList: FC = ({ children }) => {
  return (
    <DotListRaw as="ul" direction="column" spacing="spacing100">
      {children}
    </DotListRaw>
  );
};

const ListItem: FC = ({ children }) => {
  return (
    <Text as="li" fontSize="size200" color="gray900">
      {children}
    </Text>
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
              a: Link,
              ul: DotList,
              li: ListItem,
            },
          })
          // Types are somehow wrong for `result` on VFile
          // @ts-ignore
          .processSync(content).result
      }
    </Container>
  );
};
