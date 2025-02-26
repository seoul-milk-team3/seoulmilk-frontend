import '@emotion/react';
import { ColorType, TextType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType;
    text: TextType;
  }
}
