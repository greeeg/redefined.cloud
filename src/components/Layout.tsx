import React, { FC } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const Layout: FC = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
