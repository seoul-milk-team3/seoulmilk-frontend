import * as React from "react";
import type { SVGProps } from "react";
const SvgDeleteX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      stroke="#404040"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.5 4.5-9 9M4.5 4.5l9 9"
    />
  </svg>
);
export default SvgDeleteX;
