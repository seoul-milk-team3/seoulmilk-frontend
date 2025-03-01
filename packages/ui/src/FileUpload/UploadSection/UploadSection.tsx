import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  uploadWrapperStyle,
  uploadSectionContainerStyle,
  fileListStyle,
  fileItemStyle,
  filePreviewStyle,
  fileNameStyle,
} from "./UploadSection.style";
import Flex from "@/Flex/Flex";
import Button from "@/Button/Button";
import Text from "@/Text/Text";
import { FileUploadIcon, DeleteX } from "@seoulmilk/icon";
import { colors } from "@seoulmilk/styles";

const MAX_FILES = 10;

const UploadSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles((prev) => {
      const newFiles = [...prev, ...acceptedFiles];
      return newFiles.slice(0, MAX_FILES);
    });
  }, []);

  const { getInputProps } = useDropzone({
    onDrop,
    noClick: true,
    disabled: uploadedFiles.length >= MAX_FILES,
  });

  const handleButtonClick = () => {
    if (uploadedFiles.length < MAX_FILES) {
      fileInputRef.current?.click();
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const checkFiles = async () => {
    if (uploadedFiles.length === 0) return;
    
    setIsChecking(true);

    try {
      const formData = new FormData();
      uploadedFiles.forEach((file) => formData.append("files", file));

      const response = await fetch("/api/file-check", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("파일 검사 요청 실패");
      }

      const result = await response.json();
      console.log("파일 검사 결과:", result);
    } catch (error) {
      console.error("파일 검사 중 오류 발생:", error);
    } finally {
      setIsChecking(false);
      setIsDone(true);
    }
  };

  const handleCloseCheckDone = () => {
    setUploadedFiles([]);
    setIsDone(false);
  };

  return (
    <Flex css={uploadWrapperStyle}>
      
      {isChecking ? (
        <FileCheck onComplete={() => setIsChecking(false)} checkFiles={checkFiles} />
      ) : isDone ? (
        <CheckDone onClose={handleCloseCheckDone} />
      ) : (
        <Flex
          css={uploadSectionContainerStyle}
          styles={{ direction: "column", justify: "flex-start", align: "center", position: "relative", height: "100%" }}
        >
          <input {...getInputProps()} ref={fileInputRef} style={{ display: "none" }} />
          {uploadedFiles.length === 0 ? (
            <Flex styles={{ direction: "column", align: "center", gap: "9rem", flexGrow: 1 }}>
              <Flex styles={{ direction: "column", align: "center" }}>
                <Text tag="xxl-title-bold">파일 업로드</Text>
                <Text tag="md1-text-medium" css={{ color: colors.grayscale_50, marginTop: "0.8rem" }}>
                  여기에 파일을 끌어다 놓을 수 있습니다.
                </Text>
              </Flex>
              <FileUploadIcon css={{ width: "9.8rem", height: "9.8rem" }} />
              <Button variant="secondary" padding="1.8rem 6.4rem" tag="lg-subtitle-semibold" onClick={handleButtonClick} disabled={uploadedFiles.length >= MAX_FILES}>
                파일 선택
              </Button>
            </Flex>
          ) : (
            <>
              <Flex css={fileListStyle} styles={{ flexGrow: 1, overflowY: "auto" }}>
                {uploadedFiles.map((file, index) => (
                  <Flex key={index} css={fileItemStyle}>
                    {file.type.startsWith("image/") ? (
                      <img src={URL.createObjectURL(file)} alt={file.name} css={filePreviewStyle} />
                    ) : (
                      <Flex css={filePreviewStyle} styles={{ align: "center", justify: "center" }}>📄</Flex>
                    )}
                    <Flex styles={{ direction: "column", justify: "center", gap: "0.8rem" }}>
                      <Text tag="sm-text-medium" css={fileNameStyle}>{file.name}</Text>
                      <Text tag="sm-text-medium" css={{ color: colors.grayscale_40 }}>{(file.size / 1024).toFixed(1)} KB</Text>
                    </Flex>
                    <DeleteX css={{ position: "absolute", top: "0.8rem", right: "0.8rem", width: "1.8rem", height: "1.8rem", cursor: "pointer" }} onClick={() => handleRemoveFile(index)} />
                  </Flex>
                ))}
              </Flex>
            </>
          )}
        </Flex>
      )}<Text tag="md1-text-medium" css={{ color: colors.grayscale_40, marginTop: "1rem" }}>
        지원형식 : png, jpeg, jpg, pdf (최대 : 1 mb)
      </Text>
    </Flex>
  );
};

export default UploadSection;
