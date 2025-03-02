import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  uploadWrapperStyle,
  uploadSectionContainerStyle,
  fileListStyle,
  fileItemStyle,
  filePreviewStyle,
  fileNameStyle,
  buttonStyle
} from "./UploadSection.style";
import UploadTopMessage from "@/FileUpload/UploadTopMessage/UploadTopMessage"; // 🔥 메시지 컴포넌트 추가
import Flex from "@/Flex/Flex";
import Button from "@/Button/Button";
import Text from "@/Text/Text";
import { FileUploadIcon } from "@seoulmilk/icon";
import { colors } from "@seoulmilk/styles";
import FileCheck from "../FileCheck/FileCheck";
import CheckDone from "../CheckDone/CheckDone";

const MAX_FILES = 1;

const UploadSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles.slice(0, MAX_FILES));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    noClick: false,
    disabled: uploadedFiles.length >= MAX_FILES,
  });

  const handleButtonClick = () => {
    if (uploadedFiles.length < MAX_FILES) {
      fileInputRef.current?.click();
    }
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
    <Flex styles={{ direction: "column", width: "100%" }}>
      {/* 🔥 UploadTopMessage 추가 */}
      <UploadTopMessage
        title={isDone ? "세금계산서 업로드를 완료했어요" : uploadedFiles.length > 0 ? "세금계산서 업로드를 완료했어요" : "세금계산서를 업로드해주세요"}
        subTitle={
          isChecking
            ? "업로드한 세금계산서의 진위 여부를 분석하러 가볼까요?"
            : isDone
            ? "업로드한 세금계산서의 진위 여부를 분석하러 가볼까요?"
            : uploadedFiles.length > 0
            ? "업로드한 세금계산서의 진위 여부를 분석해보세요"
            : "진위여부를 확인 할 세금계산서를 업로드해주세요."
        }
      />

      <Flex css={uploadWrapperStyle} {...getRootProps()} style={{ backgroundColor: uploadedFiles.length === 0 && isDragActive ? colors.grayscale_30 : "transparent" }}>
        <input {...getInputProps()} ref={fileInputRef} style={{ display: "none" }} />

        {isChecking ? (
          <FileCheck onComplete={() => setIsChecking(false)} checkFiles={checkFiles} />
        ) : isDone ? (
          <CheckDone onClose={handleCloseCheckDone} />
        ) : (
          <Flex
            css={uploadSectionContainerStyle(uploadedFiles.length > 0)}
            styles={{
              direction: "column",
              justify: "center",
              align: "center",
              position: "relative",
              height: "100%",
            }}
          >
            {uploadedFiles.length === 0 ? (
              <Flex styles={{ direction: "column", align: "center", gap: "9rem", flexGrow: 1 }}>
                <Flex styles={{ direction: "column", align: "center" }}>
                  <Text tag="xxl-title-bold">파일 업로드</Text>
                  <Text tag="md1-text-medium" css={{ color: colors.grayscale_50, marginTop: "0.8rem" }}>
                    여기에 파일을 끌어다 놓거나 클릭하여 업로드하세요.
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
                <Flex css={fileListStyle} styles={{ justify: "center", align: "center", flexGrow: 1, overflowY: "auto" }}>
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
                    </Flex>
                  ))}
                </Flex>
                <Flex styles={{ position: "absolute", bottom: "0", left: "0", width: "100%", padding: "2rem 0", marginBottom:'1rem'}}>
                  <Flex styles={{ direction: "row", justify: "center", gap: "2rem", width: "100%" }}>
                    <Button css={buttonStyle} variant="primary" onClick={handleButtonClick} disabled={uploadedFiles.length >= MAX_FILES}>
                      새 파일 업로드하기
                    </Button>
                    <Button css={buttonStyle} variant="secondary" onClick={checkFiles} disabled={uploadedFiles.length === 0}>
                      진위여부 분석
                    </Button>
                  </Flex>
                </Flex>
              </>
            )}
          </Flex>
        )}
        <Text tag="md1-text-medium" css={{ color: colors.grayscale_40, marginTop: "1rem" }}>
          지원형식 : png, jpeg, jpg, pdf (최대 : 1 mb)
        </Text>
      </Flex>
    </Flex>
  );
};

export default UploadSection;
