import { Theme } from '@/theme';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

export type PostContent = {
  content: string;
  attributes: {
    date: string;
    title: string;
    slug: string;
  };
};

export type TermAttributes = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  keywords: string[];
  published: boolean;
};

export type TermPage = {
  attributes: TermAttributes;
  content: string;
};
