import * as React from "react";
import type { SVGProps } from "react";
const SvgIcInputError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 21"
    {...props}
  >
    <path
      stroke="#E60012"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M10 18.833a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666M10 7.167V10.5M10 13.833h.008"
    />
  </svg>
);
export default SvgIcInputError;
