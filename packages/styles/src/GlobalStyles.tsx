import { Global, css } from "@emotion/react";
import Reset from "./reset";

const globalStyles = css`
  ${Reset}

  @font-face {
    font-family: "Pretendard Variable";
    src: url("../../../apps/main/public/font/subset-PretendardVariable.woff2")
      format("woff2");
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
    font-family: "Pretendard Variable", sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;
