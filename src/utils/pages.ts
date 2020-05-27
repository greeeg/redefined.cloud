import { readFileSync } from 'fs';
import path from 'path';

export const getPage = ({
  lang,
  page,
}: {
  lang: string;
  page: string;
}): string => {
  const file = `index.${lang}.md`;
  const filePath = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'pages',
    page,
    file
  );

  const data = readFileSync(path.join('.', filePath), 'utf8');

  return data;
};
