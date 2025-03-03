import {
  checkDoneContainer,
  titleText,
  subtitleText,
  buttonContainer,
  buttonStyle,
  contentWrapper,
} from "./CheckDone.style";
import { Button } from "@seoulmilk/ui";
import { Flex } from "@seoulmilk/ui";
import { Text } from "@seoulmilk/ui";
import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";
import { CheckDoneIcon } from "@seoulmilk/icon";

interface CheckDoneProps {
  onClose: () => void; // 확인 버튼 클릭 시 실행할 콜백
  isNormal?: boolean; // 서버에서 받은 결과 (정상 여부)
  onErrorClick?: () => void; // 오류 내역 확인 버튼 클릭 시 실행할 콜백
}

const CheckDone = ({ onClose, isNormal, onErrorClick }: CheckDoneProps) => {
  return (
    <Flex
      css={checkDoneContainer}
      styles={{ direction: "column", align: "center" }}
    >
      {/* 아이콘과 텍스트를 감싸는 Wrapper */}
      <Flex css={contentWrapper}>
        <CheckDoneIcon css={{ width: "6.4rem", height: "6.4rem" }} />
        <Text tag="xxl-title-bold" css={titleText}>
          <span css={css`color: red;`}>업로드가</span> 완료됐어요
        </Text>
      </Flex>

      {/* 버튼을 하단에 배치 */}
      <Flex css={buttonContainer}>
        <Button css={buttonStyle} variant="primary">
          새로운 파일 업로드하기
        </Button>
        <Button css={buttonStyle} variant="secondary" onClick={onClose}>
          확인하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default CheckDone;
