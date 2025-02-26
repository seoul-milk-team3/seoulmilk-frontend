import { Global, css } from '@emotion/react';
import Reset from './reset';

const globalStyles = css`
  ${Reset}

  @font-face {
    font-family: 'Seoulmilk_font';
    src: url('/font/Seoulmilk_font.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    src: url('/font/subset-PretendardVariable.woff2') format('woff2');
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html,
  body {
    font-size: 62.5%;
    scroll-behavior: smooth;
    font-family: 'Pretendard Variable', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;
