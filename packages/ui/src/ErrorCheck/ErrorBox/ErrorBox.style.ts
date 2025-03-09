import { css } from "@emotion/react";
export const ContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: fixed;
  background: #FAFAFA;

`;
// ErrorBox.style.ts
export const imageContainerStyle = css`
  display: flex;
  justify-content: center; 
  align-items: center; 
  border-radius: 8px;
  width: 60%;
  max-width: 60%; 
  min-width: 60%; 
  height: 100%; 
  max-height:100%;
  min-height:100%;
  position: relative;
`;
export const imageBox = css`
  display: flex; 
  width: 620px; 
  height: 436px; 
  border-radius: 24px;
  position: absolute; 
  top: px;
  right: 50px; 
`;

export const imageStyle = css`
  max-width: 100%; 
  max-height: 100%; 
  object-fit: contain;
  position: absolute; 
`;




export const errorBoxWrapperStyle = css`
  display: flex;

  box-shadow: 4px 0px 12px 0px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  background: #fff;
  padding: 5rem;
  padding-top: 3rem;
  height: 100%;
  width: 40%;
  min-width: 40%;
  min-height: 100%;
  max-width: 40%;
  position: relative;
  overflow: hidden;
  margin-right: auto; 
  gap: 1.5rem;
`;


export const fieldContainerStyle = css`
  flex-grow: 1;
  overflow-y: auto;
  margin-top: rem; 
  width: 400px;
  max-height: 65vh; 
  height: auto; 
`;



export const buttonContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0rem; 
  gap: 1rem; 
  margin-top: 1.5rem; 
  width: 400px;
`;



export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const labelStyle = css`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const inputStyle = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;

export const buttonWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;


export const bigImageIconStyle = css`
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  z-index: 10;
`;

export const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20; 
`;

export const enlargedImageStyle = css`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  border-radius: 10px; 
  `;

