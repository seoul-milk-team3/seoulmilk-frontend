import { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadSectionContainer, FileList, FileItem, FilePreview, FileName, RemoveButton } from './UploadSection.style';
import { Flex } from "@seoulmilk/ui";
import { Text } from "@seoulmilk/ui";
import { FileUploadIcon } from "@seoulmilk/icon";
import { Button } from "@seoulmilk/ui";
import { colors } from "@seoulmilk/styles";

const UploadSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles((prev) => [...prev, ...acceptedFiles]); // 기존 파일 유지하며 추가
  }, []);

  const { getInputProps } = useDropzone({
    onDrop,
    noClick: true, // 컨테이너 클릭 방지
  });

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // input 클릭 트리거
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index)); // 선택한 파일 삭제
  };

  return (
    <UploadSectionContainer>
      <input {...getInputProps()} ref={fileInputRef} style={{ display: 'none' }} />

      {uploadedFiles.length === 0 ? (
        // 파일이 없을 때: 기존 UI 표시
        <Flex styles={{ direction: 'column', align: 'center', gap: '4rem' }}>
          <Flex styles={{ direction: 'column', align: 'center' }}>
            <Text tag="xxl-title-bold">파일 업로드</Text>
            <Text tag="md1-text-medium" css={{ color: colors.grayscale_50, marginTop: '0.8rem' }}>
              여기에 파일을 끌어다 놓을 수 있습니다.
            </Text>
          </Flex>

          <FileUploadIcon css={{ width: '9.8rem', height: '9.8rem' }} />

          <Button
            variant="secondary"
            padding="1.8rem 6.4rem"
            tag="lg-subtitle-semibold"
            onClick={handleButtonClick}
          >
            파일 선택
          </Button>
        </Flex>
      ) : (
        // 파일이 있을 때: 파일 리스트 표시
        <>
          <FileList>
            {uploadedFiles.map((file, index) => (
              <FileItem key={index}>
                {/* 썸네일 */}
                {file.type.startsWith('image/') ? (
                  <FilePreview src={URL.createObjectURL(file)} alt={file.name} />
                ) : (
                  <FilePreview as="div">📄</FilePreview>
                )}

                {/* 파일명 & 크기 */}
                <Flex styles={{ direction: 'column', justify: 'center' }}>
                  <FileName>{file.name}</FileName>
                  <Text tag="sm-text-medium" css={{ color: colors.grayscale_50 }}>
                    {(file.size / 1024).toFixed(1)}kb
                  </Text>
                </Flex>

                {/* 삭제 버튼 */}
                <RemoveButton onClick={() => handleRemoveFile(index)}>
                </RemoveButton>
              </FileItem>
            ))}
          </FileList>

          {/* 하단 버튼 */}
          <Flex styles={{ justify: 'center', gap: '2rem', marginTop: '2rem' }}>
            <Button variant="secondary" padding="1.4rem 4rem" onClick={handleButtonClick}>
              파일 추가
            </Button>
            <Button variant="primary" padding="1.4rem 4rem">
              진위여부 확인하기
            </Button>
          </Flex>
        </>
      )}
    </UploadSectionContainer>
  );
};

export default UploadSection;
