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
// import { colors } from "@seoulmilk/styles";
import FileCheck from "../../FileCheck/FileCheck";
 import CheckDone from "../../CheckDone/CheckDone";

const MAX_FILES = 10;

const UploadSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isChecking, setIsChecking] = useState(false); // 진위여부 확인 중 상태
  const [isDone, setIsDone] = useState(false); // 완료 화면 상태 추가

  // 파일 드롭 시 업데이트
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

  // 파일 선택 버튼 클릭 핸들러
  const handleButtonClick = () => {
    if (uploadedFiles.length < MAX_FILES) {
      fileInputRef.current?.click();
    }
  };

  // 파일 삭제 핸들러
  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // 진위여부 확인 버튼 클릭 시 실행
  const checkFiles = async () => {
    if (uploadedFiles.length === 0) return;
    
    setIsChecking(true); // 로딩 시작

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
      setIsChecking(false); // 로딩 종료
      setIsDone(true); // 완료 화면 표시
    }
  };

  // 완료 후 화면에서 확인 버튼 클릭 시
  const handleCloseCheckDone = () => {
    setUploadedFiles([]); // 파일 초기화
    setIsDone(false); // 업로드 화면으로 복귀
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
          styles={{
            direction: "column",
            justify: "flex-start",
            align: "center",
            position: "relative",
            height: "100%",
          }}
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

              <Button
                variant="secondary"
                padding="1.8rem 6.4rem"
                tag="lg-subtitle-semibold"
                onClick={handleButtonClick}
                disabled={uploadedFiles.length >= MAX_FILES}
              >
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
                      <Text tag="sm-text-medium" css={fileNameStyle}>
                        {file.name}
                      </Text>
                      <Text tag="sm-text-medium" css={{ color: colors.grayscale_40 }}>
                        {(file.size / 1024).toFixed(1)} KB
                      </Text>
                    </Flex>

                    <DeleteX
                      css={{
                        position: "absolute",
                        top: "0.8rem",
                        right: "0.8rem",
                        width: "1.8rem",
                        height: "1.8rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleRemoveFile(index)}
                    />
                  </Flex>
                ))}
              </Flex>

              <Flex styles={{ position: "absolute", bottom: "0", left: "0", width: "100%", padding: "2rem 0" }}>
                <Flex styles={{ direction: "row", justify: "center", gap: "2rem", width: "100%" }}>
                  <Button variant="primary" onClick={handleButtonClick}>파일 추가</Button>
                  <Button variant="secondary" onClick={checkFiles} disabled={uploadedFiles.length === 0}>진위여부 확인</Button>
                </Flex>
              </Flex>
            </>
          )}
        </Flex>
      )}
      <Text tag="md1-text-medium" css={{ color: colors.grayscale_40, marginTop: "1rem" }}>
      지원형식 : png, jpeg, jpg, pdf (최대 : 1 mb) | * 파일 첨부는 최대 10개까지 가능해요.    </Text>
    </Flex>
    
  );
};

export default UploadSection;
