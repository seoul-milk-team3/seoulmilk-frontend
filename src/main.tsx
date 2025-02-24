import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from '@/styles/GlobalStyles.tsx';
import theme from '@/styles/theme.ts';
import App from './App.tsx';
import queryClient from './queryClient.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
