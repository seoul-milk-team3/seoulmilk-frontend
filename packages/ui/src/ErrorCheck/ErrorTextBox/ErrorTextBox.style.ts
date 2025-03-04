import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  align-items: center;
  width: 533px;
height: 56px;
gap: 21px;

`;

export const labelStyle = css`
  min-width: 80px;
  text-align: right;
  width: 168px;
height: 40px;
gap: 10px;
margin-top:6px;
padding-top: 8px;
padding-bottom: 8px;
border-radius: 8px;

`;

export const inputStyle = css`
  width: 344px;
  height: 56px;
  padding: 16px 19px;
  border-radius: 8px;
  border: 1px solid #d4d4d4;
  outline: none;
  transition: border-color 0.2s;
  color: #404040;
  
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;

  &:focus {
    border-color: #40a9ff;
  }

  &::placeholder {
    color: #D4D4D4;
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
  }
`;
