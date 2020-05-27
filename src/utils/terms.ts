import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import * as matter from 'gray-matter';

import i18n, { Language } from '@/utils/i18n';
import { TermAttributes, TermPage } from '@/types';

export const getTermPaths = () => {
  const termsDirectory = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'terms'
  );

  const pages = [];

  readdirSync(path.join('.', termsDirectory), {
    withFileTypes: true,
  })
    .filter((element) => element.isDirectory())
    .map((directory) => {
      const localizedTerm = {};
      readdirSync(path.join('.', termsDirectory, directory.name)).forEach(
        (file) => {
          const regex = /index.([a-z-]+).md/g;
          const [_, lang] = regex.exec(file) ?? ['', ''];
          localizedTerm[lang] = {
            term: directory.name,
          };
        }
      );

      pages.push(localizedTerm);
    });

  return i18n.getI18nStaticPaths(pages);
};

export const getTerms = (language: Language): TermAttributes[] => {
  const termsDirectory = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'terms'
  );

  const terms = [];

  readdirSync(path.join('.', termsDirectory), {
    withFileTypes: true,
  })
    .filter((element) => element.isDirectory())
    .map((directory) => {
      readdirSync(path.join('.', termsDirectory, directory.name)).forEach(
        (file) => {
          const regex = /index.([a-z-]+).md/g;
          const [_, lang] = regex.exec(file) ?? ['', ''];

          if (lang === language) {
            const filePath = path.resolve(
              __filename,
              '..',
              '..',
              'content',
              'terms',
              directory.name,
              file
            );
            const data = readFileSync(path.join('.', filePath), 'utf8');
            const { data: attributes } = matter(data);
            terms.push({
              ...attributes,
              slug: directory.name,
            });
          }
        }
      );
    });

  return terms;
};

export const getTerm = ({
  lang,
  term,
}: {
  lang: string;
  term: string;
}): TermAttributes | null => {
  const filePath = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'terms',
    term,
    `index.${lang}.md`
  );
  const data = readFileSync(path.join('.', filePath), 'utf8');
  const { data: attributes } = matter(data);
  return {
    ...attributes,
    slug: term,
  };
};

export const getTermPage = ({
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
