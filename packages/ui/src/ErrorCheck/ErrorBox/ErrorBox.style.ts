import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const imageContainerStyle = css`
  display: flex;
  justify-content: center;
  position:relative;
  width: 696px;
  height: 443px;
  gap: 24px;


  img {
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

export const inputContainerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1110px;
height: 228px;
top: 621px;
left: 281px;
gap: 20px;

`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 64px;
  top: 897px;
  left: 471px;
  gap: 12px;

`;

export const imageWrapperStyle = css`
position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 696px;
  height: 363px;
  padding-top: 24px;
`;

export const pageIndicatorStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  padding: 4px 8px;
  border-radius: 0 0 5px 5px;
  font-size: 14px;
`;


export const paginationStyle = css`
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
