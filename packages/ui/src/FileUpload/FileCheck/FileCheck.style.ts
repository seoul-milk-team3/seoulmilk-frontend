import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const fileCheckContainerStyle = css`
width: 92.4rem;
height: 57.6rem;
padding: 2rem;
border: 0.3rem dashed ${colors.grayscale_30};
border-radius: 2rem;
text-align: center;
cursor: pointer;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0rem;
`;

export const spinnerStyle = css`
  width: 9.2rem;
  height: 9.2rem;
  border-radius: 50%;
  background: conic-gradient(from 180deg at 50% 50%, #33AD79 0deg, rgba(217, 217, 217, 0) 360deg);
  
  /* 가운데 원을 투명하게 만들기 위한 마스크 */
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 1) 55%);
  -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 1) 55%);
  
  margin-top: 2rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;



export const titleText = css`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${colors.grayscale_90};
  margin-bottom: 2rem; 

`;

export const subtitleText = css`
  font-size: 1.8rem;
  font-weight: semibold;
  color: ${colors.grayscale_50};
  margin-bottom: 4rem;

`;
