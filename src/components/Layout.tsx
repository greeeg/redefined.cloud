import React, { FC } from 'react';

import { Header, HEADER_HEIGHT } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Box } from '@/components/primitives';

export const Layout: FC = ({ children }) => {
  return (
    // @ts-ignore
    <Box as="div" paddingTop={HEADER_HEIGHT}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
