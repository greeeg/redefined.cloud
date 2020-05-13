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

export type TermContent = {
  content: string;
  attributes: {
    title: string;
    slug: string;
  };
};
