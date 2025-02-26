import { ThemeProvider } from "@emotion/react";
import React, { ReactNode } from "react";
import GlobalStyle from "../packages/styles/src/GlobalStyles";
import { theme } from "../packages/styles/src/theme";

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
