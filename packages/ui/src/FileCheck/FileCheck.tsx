import { useEffect, useState } from "react";
import {
  fileCheckContainerStyle,
  spinnerStyle,
  titleText,
  subtitleText,
  cancelButtonStyle,
} from "./FileCheck.style";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import Button from "@/Button/Button";
export interface FileCheckProps {
  onComplete: () => void;
  checkFiles: () => Promise<void>;
  onCancel?: () => void;
  variant?: "primary" | "secondary";
}

const FileCheck = ({
  onComplete,
  checkFiles,
  onCancel,
  variant = "primary",
}: FileCheckProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await checkFiles(); // 서버에 파일 정보 전달
      } finally {
        setIsLoading(false);
        onComplete(); // 서버 응답이 오면 UI를 원래대로 변경
      }
    };

    fetchData();
  }, [checkFiles, onComplete]);

  return (
    <Flex
  css={fileCheckContainerStyle(variant)} // variant에 따라 border 표시 여부 변경
  styles={{
    direction: "column",
    align: "center",
    justify: "center",
    gap: "8rem",
  }}
>
      {/* 제목과 부제목을 묶어 여백 조정 */}
      <Flex styles={{ direction: "column", align: "center", gap: "0.8rem" }}>
        <Text tag="xxl-title-bold" css={titleText}>
          {variant === "primary"
            ? "파일을 업로드 중이에요"
            : "진위여부를 분석 중이에요"}
        </Text>
        <Text tag="md1-text-medium" css={subtitleText}>
          잠시만 기다려주세요
        </Text>
      </Flex>

      {isLoading && <div css={spinnerStyle} />}
      {isLoading && variant === "primary" && (
        <Button variant="primary" onClick={onCancel}>
          업로드 취소
        </Button>
      )}
    </Flex>
  );
};

export default FileCheck;
