import styled from "@emotion/styled";
import { colors } from "@seoulmilk/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: none;
  
  padding: 5rem 20px 20px 2rem; /* padding-top 수정 */
`;


export const HeaderWrapper = styled.div`
  position:relative;
  top: 0rem;
  left: 0;
  padding: 1rem 1rem;
  width: 100%;
  
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 300px;
  height: 300px;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  border: 2px dashed ${colors.grayscale_30};
  border-radius: 8px;
  padding: 1.5rem;
  padding-top: 0rem;
  text-align: center;
  cursor: pointer;
  gap: 3rem;
  overflow: hidden;
  
`;


export const SuccessIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-top:4rem;
`;

export const Message = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  margin-top:5rem;
`;

export const UploadButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  background: ${colors.grayscale_20};
  color: ${colors.grayscale_60};
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  font-family: Pretendard;
  line-height: 24px;
  letter-spacing: 0%;
  cursor: pointer;
`;
export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  background: ${colors.green_50};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  font-family: Pretendard;
  line-height: 24px;
  letter-spacing: 0%;
  cursor: pointer;
`;

export const FilePreview = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${colors.grayscale_10};
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const UploadBox = styled.div<{ hasFiles: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  border: 2px dashed ${colors.grayscale_30};
  border-radius: 8px;
  background: ${colors.grayscale_0};
  cursor: pointer;
  transition: border-color 0.3s ease;
  ${props => props.hasFiles && `border-color: ${colors.grayscale_50};`}
`;
