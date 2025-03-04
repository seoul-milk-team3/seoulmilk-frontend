import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const checkDoneContainer = css`
  width: 92.4rem;
  height: 57.6rem;
  padding: 2rem;
  position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
  border-radius: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const contentWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; 
`;

export const titleText = css`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${colors.grayscale_90};
  margin-top: 3rem;
`;

export const subtitleText = css`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${colors.grayscale_90};
  margin-top: 2rem;
`;

export const resultText = css`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${colors.red_50}; /* 빨간색 */
  margin-left: 0.5rem;
`;

export const errorDetailsText = css`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${colors.red_50}; /* 빨간색 */
  text-decoration: underline;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export const buttonContainer = css`
  display: flex;
  gap: 2rem;
  margin-bottom: 10rem;
`;

export const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;

  width: 35.9rem;
  height: 6.4rem;
  gap: 1rem;
  border-radius: 1.2rem;
  padding: 1.8rem 14.4rem;

  font-size: 1.6rem;
  font-weight: bold;

  &:disabled {
    background: ${colors.grayscale_20};
    color: ${colors.grayscale_50};
  }

  margin-top: auto; /* 버튼을 하단에 위치하도록 설정 */
`;
