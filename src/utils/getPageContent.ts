import path from 'path';
import { readFileSync } from 'fs';

export const getTermContent = ({
  lang,
  term,
}: {
  lang: string;
  term: string;
}) => {
  const fileName = `index.${lang}.md`;
  const filePath = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'terms',
    term,
    fileName
  );

  try {
    const data = readFileSync(path.join('.', filePath), 'utf8');
    return data;
  } catch (err) {
    console.warn('Error while getting term page content', err);
    return '';
  }
};

export const getPostContent = ({
  lang,
  post,
}: {
  lang: string;
  post: string;
}) => {
  const fileName = `index.${lang}.md`;
  const filePath = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'posts',
    post,
    fileName
  );

  try {
    const data = readFileSync(path.join('.', filePath), 'utf8');
    return data;
  } catch (err) {
    console.warn('Error while getting post page content', err);
    return '';
  }
};
