import React, { FC } from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

import { Heading, Text } from '@/components/primitives';

interface MarkdownProps {
  content: string;
}

const H2: FC = ({ children }) => (
  <Heading as="h2" size="size300" paddingTop="spacing500">
    {children}
  </Heading>
);

const Paragraph: FC = ({ children }) => (
  <Text fontSize="size200" color="gray900" paddingTop="spacing100">
    {children}
  </Text>
);

const Link: FC = (props) => {
  console.log(props);

  return (
    <Text fontSize="size200" color="gray500" paddingTop="spacing100">
      cocou
    </Text>
  );
};

export const Markdown: FC<MarkdownProps> = ({ content }) => {
  return (
    <div>
      {
        unified()
          .use(parse)
          .use(remark2react, {
            remarkReactComponents: {
              p: Paragraph,
              h2: H2,
              a: Link,
            },
          })
          // Types are somehow wrong for `result` on VFile
          // @ts-ignore
          .processSync(content).result
      }
    </div>
  );
};
