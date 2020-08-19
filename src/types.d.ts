import { BaseTheme } from '@/theme';

declare module 'styled-components' {
  interface DefaultTheme extends BaseTheme {}
}

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
  languages: Language[];
};

export type PostAttributes = {
  slug: string;
  title: string;
  description: string;
  tag: string;
};

export type PostPage = {
  attributes: PostAttributes;
  content: string;
  languages: Language[];
};
