import styled from '@emotion/styled';
import { colors } from "@seoulmilk/styles";

export const UploadSectionContainer = styled.div`
  width: 92.4rem;
  height: 57.6rem;
  padding: 2rem;
  border: 0.3rem dashed ${colors.grayscale_30};
  border-radius: 2rem;
  text-align: center;
  background-color: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem; // 내부 요소 간격 조절
`;


export const FileList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  padding: 1rem;
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${colors.grayscale_10};
  border-radius: 0.8rem;
  position: relative;
`;

export const FilePreview = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  object-fit: cover;
`;

export const FileName = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.grayscale_90};
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const UploadButton = styled.button`
  background-color: #10b981;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #059669;
  }
`;
