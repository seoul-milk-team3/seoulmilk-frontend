import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@seoulmilk/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* 가로 스크롤 방지 */
  background: none;
  position: relative; /* 혹시 모를 오버플로우 방지 */
`;



export const UploadIcon = styled.div`
  margin-bottom: 1rem;
`;

export const UploadText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const FileUploadButton = styled.button`
  margin-top: 1rem;
  background: ${colors.green_50};
  color:  ${colors.grayscale_0};
  padding: 1rem 2.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width:17rem;
  height:35px;
`;
export const CameraButton = styled.button`
  margin-top: 1rem;
  background: ${colors.grayscale_10};
  color:  ${colors.grayscale_90};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
`;

export const UploadButton = styled.button`
  margin-top: 1rem;
  background: ${colors.green_5};
  color:  ${colors.green_50};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width : 120px;
  height:30px;
  font-weight:500px;
`;
export const ConfirmButton = styled.button`
  margin-top: 1rem;
  background: ${colors.green_50};
  color:  ${colors.grayscale_0};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width : 120px;
  height:30px;
  font-weight:500px;
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
`;

export const FilePreview = styled.img`
  width: 7.4rem;
  height: 5.2rem;
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

export const UploadBox = styled.div<{ hasFiles: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height:300px;
  width: 300px;
  max-width: 400px;
  height: ${({ hasFiles }) => (hasFiles ? "400px" : "300px")};
  border: 2px dashed ${colors.grayscale_30};
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  background: ${colors.grayscale_0};
  cursor: pointer;
  margin-top: 1rem;
  gap: 1rem;
  overflow: hidden; 
`;

export const FileList = styled.div`
  width: 100%;
  flex: 1; 
  min-height: 150px;
  max-height: 300px; 
  overflow-y: auto; 
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;



export const FileItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: ${colors.grayscale_10};
`;

export const ActionButtons = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding : 0rem 2rem ;
`;
