import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 533px;
  gap: 8px;
`;

export const labelStyle = css`
  min-width: 80px;
  text-align: left;
  width: 168px;
height: 40px;
gap: 10px;
margin-top:6px;
padding-top: 20px;
padding-bottom: 8px;
border-radius: 8px;
color: #737373;

`;

export const inputStyle = css`
  width: 353px;
  height: 56px;
  padding: 16px 19px;
  border-radius: 8px;
  border: 1px solid #d4d4d4;
  outline: none;
  transition: border-color 0.2s;
  color: #171717;
  
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;

  &:focus {
    border-color: #009857;
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
