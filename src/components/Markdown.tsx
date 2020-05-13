import React, { FC } from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

interface MarkdownProps {
  content: string;
}

export const Markdown: FC<MarkdownProps> = ({ content }) => {
  return (
    <div>
      {
        unified()
          .use(parse)
          .use(remark2react, { remarkReactComponents: {} })
          // Types are somehow wrong for `result` on VFile
          // @ts-ignore
          .processSync(content).result
      }
    </div>
  );
};
