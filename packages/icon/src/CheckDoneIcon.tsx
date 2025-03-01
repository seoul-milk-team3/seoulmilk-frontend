import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckDoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 65 64"
    {...props}
  >
    <rect width={64} height={64} x={0.5} fill="#009857" rx={32} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m40.5 26-11 11-5-5"
    />
  </svg>
);
export default SvgCheckDoneIcon;
