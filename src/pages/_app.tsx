import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import i18n from '@/utils/i18n';
import { theme, GlobalStyles } from '@/theme';
import en from '../../content/locales/en.json';
import fr from '../../content/locales/fr.json';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const { I18nProvider } = i18n;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <I18nProvider
          phrases={{
            en,
            fr,
          }}
        >
          <Component {...pageProps} />
        </I18nProvider>
      </ThemeProvider>
    );
  }
}
