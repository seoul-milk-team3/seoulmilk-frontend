import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@seoulmilk/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

export const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  max-width: 400px;
  height: 300px;
  border: 2px dashed ${colors.grayscale_30};
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  background: ${colors.grayscale_0};
  cursor: pointer;
  margin-top:1rem;
  gap:5rem;
`;

export const UploadIcon = styled.div`
  margin-bottom: 1rem;
`;

export const UploadText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const UploadButton = styled.button`
  margin-top: 1rem;
  background: ${colors.green_50};
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
`;

export const FileInfoText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${colors.grayscale_60};
`;

export const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const modalContentStyle = css`
  background: white;
  padding: 10px;
  border-radius: 16px;
  width: 320px;
  height: 120px;
  max-width: 70%;
  max-height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const modalButtonStyle = css`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: left;
  justify-content: left;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;export const FileList = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid ${colors.grayscale_30};
`;

export const FilePreview = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.red_50};
  display: flex;
  align-items: center;
`;
