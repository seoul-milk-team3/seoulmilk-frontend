import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  min-height: 100vh; /* 전체 화면 높이 확보 */
  paddint-top: 100px;
`;

export const imageContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 696px;
  max-height: 443px;
  gap: 16px;
  position: relative; /* absolute 제거 */
`;

export const inputContainerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 228px;
  gap: 20px;
  padding-top:6rem;
`;


export const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  min-height: 64px;
  gap: 12px;
  align-items: flex-start;
  margin-top:30px;
`;

export const imageWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 696px;
  height: auto;
`;

export const pageIndicatorStyle = css`
  color: black;
  padding: 4px 8px;
  font-size: 14px;
  align-self: flex-start;
`;

export const paginationStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;
