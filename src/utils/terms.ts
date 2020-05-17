import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import * as matter from 'gray-matter';
import { Language } from './i18n';
import { TermAttributes } from '@/types';

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
          const [_, lang] = regex.exec(file);

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
            terms.push(attributes);
          }
        }
      );
    });

  return terms;
};
