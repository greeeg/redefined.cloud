import React, { FC } from 'react';
import styled from 'styled-components';

import { Header, HEADER_HEIGHT } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Main = styled.main`
  padding-top: ${HEADER_HEIGHT}px;
`;

export const Layout: FC = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
      <Footer />
    </Main>
  );
};
