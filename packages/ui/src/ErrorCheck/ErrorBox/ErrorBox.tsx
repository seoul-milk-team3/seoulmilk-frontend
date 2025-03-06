import { useState } from "react";
import ErrorTextBox from "../ErrorTextBox/ErrorTextBox";
import Button from "@/Button/Button";
import Flex from "@/Flex/Flex";
import {
  containerStyle,
  inputContainerStyle,
  buttonContainerStyle,
  imageContainerStyle,
  imageWrapperStyle,
  pageIndicatorStyle,
  paginationStyle,
} from "./ErrorBox.style";
import Text from "@/Text/Text";
import CheckDone from "@/CheckDone/CheckDone";

export interface ErrorBoxProps {
  images: string[]; // 여러 개의 이미지 배열을 받음
}

const ErrorBox = ({ images }: ErrorBoxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setIsCompleted(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (isCompleted) {
    return <CheckDone variant="secondary" onClose={() => setIsCompleted(false)} isNormal={true} />;
  }

  return (
    <Flex css={containerStyle}>
      {/* 이미지 컨테이너 */}
      <Flex tag="div" css={imageContainerStyle}>
        {/* 상단 (현재 이미지 인덱스 표시) */}
        <Text tag="lg-subtitle-semibold" css={{ position: "absolute", top: "-40px", left: "0" }}>{`(${currentIndex + 1}/${images.length})`}</Text>

        {/* 이미지 */}
        <Flex tag="div" css={imageWrapperStyle}>
          <img src={images[currentIndex]} alt={`OCR 인식된 세금계산서 ${currentIndex + 1}`} />
        </Flex>

        {/* 하단 페이지네이션 (동그라미) */}
        <Flex tag="div" css={paginationStyle}>
          {images.map((_, index) => (
            <span
              key={index}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "#009857" : "#D4D4D4",
                margin: "0 5px",
                display: "inline-block",
              }}
            />
          ))}
        </Flex>
      </Flex>

      {/* 입력 폼 컨테이너 */}
      <Flex tag="div" css={inputContainerStyle}>
        <ErrorTextBox label="공급자 사업자등록번호" value="214-82-00250" />
        <ErrorTextBox label="공급자 등록번호" value="216-82-00028" />
        <ErrorTextBox label="승인번호" value="20220630-41000115-a3lgrxs" />
        <ErrorTextBox label="작성일자" value="2022/06/30" />
        <ErrorTextBox label="공급가액" value="5,400,000" />
      </Flex>

      {/* 버튼 컨테이너 */}
      <Flex tag="div" css={buttonContainerStyle}>
        <Button variant="primary" onClick={handlePrev} disabled={currentIndex === 0}>
          이전 파일
        </Button>
        <Button variant="secondary" onClick={handleNext}>
          {currentIndex === images.length - 1 ? "완료" : "다음 파일"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ErrorBox;
