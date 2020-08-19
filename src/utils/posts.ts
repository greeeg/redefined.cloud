import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import * as matter from 'gray-matter';

import i18n, { Language } from '@/utils/i18n';
import { PostAttributes, PostPage } from '@/types';

export const getPostPaths = () => {
  const postsDirectory = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'posts'
  );

  const pages = [];

  readdirSync(path.join('.', postsDirectory), {
    withFileTypes: true,
  })
    .filter((element) => element.isDirectory())
    .map((directory) => {
      const localizedTerm = {};
      readdirSync(path.join('.', postsDirectory, directory.name)).forEach(
        (file) => {
          const regex = /index.([a-z-]+).md/g;
          const [_, lang] = regex.exec(file) ?? ['', ''];
          localizedTerm[lang] = {
            post: directory.name,
          };
        }
      );

      pages.push(localizedTerm);
    });

  return i18n.getI18nStaticPaths(pages);
};

export const getPosts = (language: Language): PostAttributes[] => {
  const postsDirectory = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'posts'
  );

  const posts = [];

  readdirSync(path.join('.', postsDirectory), {
    withFileTypes: true,
  })
    .filter((element) => element.isDirectory())
    .map((directory) => {
      readdirSync(path.join('.', postsDirectory, directory.name)).forEach(
        (file) => {
          const regex = /index.([a-z-]+).md/g;
          const [_, lang] = regex.exec(file) ?? ['', ''];

          if (lang === language) {
            const filePath = path.resolve(
              __filename,
              '..',
              '..',
              'content',
              'posts',
              directory.name,
              file
            );
            const data = readFileSync(path.join('.', filePath), 'utf8');
            const { data: attributes } = matter(data);
            posts.push({
              ...attributes,
              slug: directory.name,
            });
          }
        }
      );
    });

  return posts;
};

export const getPostPage = ({
  lang,
  post,
}: {
  lang: string;
  post: string;
}): PostPage | null => {
  const fileName = `index.${lang}.md`;
  const postsDirectory = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'posts',
    post
  );

  try {
    const languages = [];
    readdirSync(path.join('.', postsDirectory)).forEach((file) => {
      const regex = /index.([a-z-]+).md/g;
      const [_, lang] = regex.exec(file) ?? ['', ''];
      languages.push(lang);
    });

    const data = readFileSync(path.join('.', postsDirectory, fileName), 'utf8');
    const { content, data: attributes } = matter(data);

    return {
      content,
      languages,
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
