import { css } from "@emotion/react";

export const modalOverlayStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background: rgba(0, 0, 0, 0.5);
`;

export const modalStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 418px;
  height: 178px;
  margin: 0 auto;
  padding: 24px;

  border-radius: 16px;

  background: white;
`;

export const titleStyle = css`
  font-size: 20px;
  font-weight: 700;
  color: #2A2D34;

  margin-top: 5px;
  margin-bottom: 3px;
`;

export const messageStyle = css`
  font-size: 16px;
  font-weight: 400;
  color: #989BA2;
  text-align: center;

  margin-bottom: 10px;
`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;
`;

export const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 177px !important;
  height: 44px !important;
  padding: 0 !important;
`;
