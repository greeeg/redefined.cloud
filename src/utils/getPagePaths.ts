import { readdirSync } from 'fs';
import path from 'path';
import i18n from '@/utils/i18n';

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
          const [_, lang] = regex.exec(file);
          localizedTerm[lang] = {
            term: directory.name,
          };
        }
      );

      pages.push(localizedTerm);
    });

  return i18n.getI18nStaticPaths(pages);
};

export const getPostPaths = () => {
  const termsDirectory = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'posts'
  );

  const pages = [];

  readdirSync(path.join('.', termsDirectory), {
    withFileTypes: true,
  })
    .filter((element) => element.isDirectory())
    .map((directory) => {
      const localizedPost = {};

      readdirSync(path.join('.', termsDirectory, directory.name)).forEach(
        (file) => {
          const regex = /index.([a-z-]+).md/g;
          const [_, lang] = regex.exec(file);
          localizedPost[lang] = {
            post: directory.name,
          };
        }
      );

      pages.push(localizedPost);
    });

  return i18n.getI18nStaticPaths(pages);
};
