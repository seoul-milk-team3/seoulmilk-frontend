import * as React from "react";
import type { SVGProps } from "react";
const SvgIcArrowRed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#E60012"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.5 15 5-5-5-5"
    />
  </svg>
);
export default SvgIcArrowRed;
