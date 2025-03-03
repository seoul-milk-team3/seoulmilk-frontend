import { useEffect, useState } from "react";
import {
  fileCheckContainerStyle,
  spinnerStyle,
  subtitleText,
} from "./FileCheck.style";
import { Flex } from "@seoulmilk/ui";
import { Text } from "@seoulmilk/ui";

export interface FileCheckProps {
  checkFiles: () => Promise<void>;
  onComplete: () => void;
}

const FileCheck = ({ checkFiles, onComplete }: FileCheckProps) => {
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
      css={fileCheckContainerStyle}
      styles={{
        direction: "column",
        align: "center",
        justify: "center",
        gap: "2rem",
      }}
    >
      {/* "잠시만 기다려주세요" 텍스트 */}
      <Text tag="md1-text-medium" css={subtitleText}>
        잠시만 기다려주세요
      </Text>

      {/* 로딩 스피너 */}
      {isLoading && <div css={spinnerStyle} />}
    </Flex>
  );
};

export default FileCheck;
