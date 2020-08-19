import React, { FC, createContext, useContext, useMemo } from 'react';
import { useRouter } from 'next/router';

export type Language = 'en' | 'fr';
export type Phrases = Record<string, string>;

export const languageLabelMapping: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
};

interface I18nProviderProps {
  phrases: Partial<Record<Language, Phrases>>;
}

interface ParsedUrlQuery {
  [key: string]: string | string[];
}

const i18n = (languages: Language[]) => {
  const I18nContext = createContext<{
    lang: string;
    languages: Language[];
    phrases: Partial<Record<Language, Phrases>>;
  }>(null);

  const getTranslator = (phrases: Phrases) => {
    return (key: string) => {
      if (key && phrases[key]) {
        return phrases[key];
      }

      return key;
    };
  };

  const getI18nStaticPaths = <P extends ParsedUrlQuery>(
    paths: Partial<Record<Language, P>>[]
  ): Array<{ params: P }> => {
    return paths
      .map((path) => {
        return Object.keys(path).map((locale) => ({
          params: { lang: locale, ...path[locale] },
        }));
      })
      .flat();
  };

  const I18nProvider: FC<I18nProviderProps> = ({ phrases, children }) => {
    const router = useRouter();

    const value = useMemo(
      () => ({
        lang: router.query.lang as string,
        languages,
        phrases,
      }),
      [router, phrases]
    );

    return (
      <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
    );
  };

  const useI18n = () => useContext(I18nContext);

  const useT = () => {
    const { lang, phrases } = useI18n();
    return getTranslator(phrases[lang]);
  };

  return {
    useT,
    useI18n,
    I18nProvider,
    getI18nStaticPaths,
  };
};

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'fr'];

export default i18n(SUPPORTED_LANGUAGES);
