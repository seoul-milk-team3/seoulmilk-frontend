import { useEffect, useState } from "react";
import { fileCheckContainerStyle, spinnerStyle, titleText,subtitleText } from "./FileCheck.style";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import { colors } from "@seoulmilk/styles";

interface FileCheckProps {
  onComplete: () => void; // 서버 응답이 오면 실행할 콜백 함수
  checkFiles: () => Promise<void>; // 서버 요청을 보내는 함수
}

const FileCheck = ({ onComplete, checkFiles }: FileCheckProps) => {
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
    <Flex css={fileCheckContainerStyle} styles={{ direction: "column", align: "center", justify: "center" }}>
      <Text tag="xxl-title-bold" css={titleText}>
        진위여부를 분석중이에요
      </Text>
      <Text tag="md1-text-medium" css={subtitleText}>
        잠시만 기다려주세요
      </Text>
      {isLoading && <div css={spinnerStyle} />}
    </Flex>
  );
};

export default FileCheck;
