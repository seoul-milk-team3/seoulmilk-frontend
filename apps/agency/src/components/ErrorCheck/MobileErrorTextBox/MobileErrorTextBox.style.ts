import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 361px; /* 모바일 환경에서 적절한 크기 */
  gap: 8px;
`;

export const labelStyle = css`
  gap: 8px;

  min-width: 80px;
  text-align: right;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
gap: 10px;
margin-top:6px;
padding-top: 8px;
padding-bottom: 8px;
border-radius: 8px;

`;

export const inputStyle = css`
width: 100%;
height: 48px;
padding: 14px 16px;
border-radius: 8px;
border: 1px solid #d4d4d4;
outline: none;
transition: border-color 0.2s;
color: #404040;

font-family: "Pretendard", sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 24px;

&:focus {
  border-color: #40a9ff;
}

&::placeholder {
  color: #d4d4d4;
  font-weight: 500;
  font-size: 14px;
}

`;
