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
  description: string;
  name: string;
  shortName?: string;
  summary: string;
  keywords: string[];
  relatedTerms: string[];
};

export type TermPage = {
  attributes: TermAttributes;
  content: string;
};
