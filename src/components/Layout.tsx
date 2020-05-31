import React, { FC } from 'react';
import dynamic from 'next/dynamic';

import { Header, HEADER_HEIGHT } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Box } from '@/components/primitives';

const ClientSidePrivacyNotice = dynamic(
  () =>
    import('@/components/PrivacyNotice').then((module) => module.PrivacyNotice),
  { ssr: false }
);

export const Layout: FC = ({ children }) => {
  return (
    // @ts-ignore
    // Somehow complaining about numeric value for paddingTop
    <Box as="div" paddingTop={HEADER_HEIGHT}>
      <Header />
      <main>{children}</main>
      <Footer />
      <ClientSidePrivacyNotice />
    </Box>
  );
};
