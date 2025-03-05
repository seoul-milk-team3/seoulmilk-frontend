import { css } from "@emotion/react";
import { spinnerStyle } from "./Spinner.style";
interface SpinnerProps {
  size?: number; // 스피너 크기 조절 가능 (기본값: 98px)
}

const Spinner = ({ size = 92 }: SpinnerProps) => {
  return <div css={spinnerStyle(size)} />;
};

export default Spinner;
