import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const checkDoneContainer = css`
  width: 92.4rem;
  height: 57.6rem;
  padding: 2rem;
  border: 0.3rem dashed ${colors.grayscale_30};
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
  flex-grow: 1; /* 중간 영역을 차지하여 버튼을 밀어냄 */
  gap: 1rem;
`;

export const titleText = css`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${colors.grayscale_90};
  margin-top :3rem;
`;

export const resultText = css`
  font-size: 1.8rem;
  font-weight: semibold;
  color: ${colors.grayscale_50};
`;

export const buttonContainer = css`
  display: flex;
  gap: 2rem;
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
  display: flex;
  gap: 2rem;
  margin-top: auto; /* 버튼을 하단에 위치하도록 설정 */
`;

