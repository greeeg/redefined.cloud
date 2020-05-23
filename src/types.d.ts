import { BaseTheme } from '@/theme';

declare module 'styled-components' {
  interface DefaultTheme extends BaseTheme {}
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
