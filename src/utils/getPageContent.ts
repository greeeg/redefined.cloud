import path from 'path';
import { readFileSync } from 'fs';
import * as matter from 'gray-matter';
import { PostContent, TermPage } from '@/types';

export const getTermContent = ({
  lang,
  term,
}: {
  lang: string;
  term: string;
}): TermPage | null => {
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
    const { content, data: attributes } = matter(data);
    return {
      content,
      attributes,
    };
  } catch (err) {
    console.warn('Error while getting term page content', err);
    return null;
  }
};

export const getPostContent = ({
  lang,
  post,
}: {
  lang: string;
  post: string;
}): PostContent | null => {
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
    const { content, data: attributes } = matter(data);
    return {
      content,
      attributes: {
        ...attributes,
        slug: post,
      },
    };
  } catch (err) {
    console.warn('Error while getting post page content', err);
    return null;
  }
};
