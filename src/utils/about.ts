import { readFileSync } from 'fs';
import path from 'path';
import { Language } from './i18n';

export const getAbout = (language: Language) => {
  const file = `index.${language}.md`;
  const filePath = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'about',
    file
  );

  const data = readFileSync(path.join('.', filePath), 'utf8');

  return data;
};
