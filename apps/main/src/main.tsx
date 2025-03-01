import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@seoulmilk/styles';
import { theme } from '@seoulmilk/styles';
import { queryClient } from '@seoulmilk/utils';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
