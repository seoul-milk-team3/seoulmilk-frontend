import { ThemeProvider } from '@emotion/react';
import React, { ReactNode } from 'react';
import GlobalStyle from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';

interface ProviderProps {
  children?: ReactNode;
  theme?: unknown;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
