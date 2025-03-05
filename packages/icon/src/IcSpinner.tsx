import * as React from "react";
import type { SVGProps } from "react";

const SvgIcSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 93 92"
    {...props}
  >
    <g clipPath="url(#ic_spinner_svg__a)">
      <foreignObject
        width={2034.48}
        height={2034.48}
        x={-1017.24}
        y={-1017.24}
        transform="matrix(0 .046 -.046 0 46.5 46)"
      >
        {/* HTML을 직접 렌더링하는 방식으로 변경 */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<div style="
              background: conic-gradient(from 90deg,#33ad79 0deg,rgba(217,217,217,0) 360deg);
              height: 100%;
              width: 100%;
              opacity: 1;
            "></div>`,
          }}
        />
      </foreignObject>
    </g>
    <path
      d="M92.5 46c0 25.405-20.595 46-46 46S.5 71.405.5 46s20.595-46 46-46 46 20.595 46 46m-81.246 0c0 19.466 15.78 35.246 35.246 35.246S81.746 65.466 81.746 46 65.966 10.754 46.5 10.754 11.254 26.534 11.254 46"
      fill="url(#gradient)"
    />
    <circle cx={46.347} cy={86.633} r={5.367} fill="#33AD79" />
    <defs>
      <clipPath id="ic_spinner_svg__a">
        <path d="M92.5 46c0 25.405-20.595 46-46 46S.5 71.405.5 46s20.595-46 46-46 46 20.595 46 46m-81.246 0c0 19.466 15.78 35.246 35.246 35.246S81.746 65.466 81.746 46 65.966 10.754 46.5 10.754 11.254 26.534 11.254 46" />
      </clipPath>
      <radialGradient id="gradient">
        <stop offset="0%" stopColor="#33ad79" />
        <stop offset="100%" stopColor="rgba(217, 217, 217, 0)" />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgIcSpinner;
