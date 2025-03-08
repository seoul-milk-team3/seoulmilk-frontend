import {
  checkDoneContainer,
  titleText,
  buttonContainer,
  buttonStyle,
  contentWrapper,
} from "./CheckDone.style";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import { Button } from "..";
import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";
import { CheckDoneIcon } from "@seoulmilk/icon";
import UploadTopMessage from "@/FileUpload/UploadTopMessage/UploadTopMessage";

interface CheckDoneProps {
  onClose: () => void;
  variant: "primary" | "secondary";
  isNormal?: boolean;
  onErrorClick?: () => void;
}

const CheckDone = ({ onClose, variant, isNormal, onErrorClick }: CheckDoneProps) => {
  return (
    <Flex
      css={[
        checkDoneContainer,
        variant === "secondary" &&
          css`
            border: 3px dashed #d4d4d4;
          `,
      ]}
      styles={{ direction: "column", align: "center" }}
    >
      {variant === "secondary" && (
        <div
          css={css`
            position: absolute;
            top: -8rem;
            left: 0rem;
          `}
        >
          <UploadTopMessage
            title="세금계산서 업로드를 완료했어요"
            subTitle="업로드한 세금계산서의 진위 여부를 확인하러 가볼까요?"
          />
        </div>
      )}
      
      <Flex css={contentWrapper}>
        <CheckDoneIcon css={{ width: "6.4rem", height: "6.4rem" }} />
        <Text tag="xxl-title-bold" css={titleText}>
          {variant === "primary" ? (
            "분석이 완료됐어요"
          ) : (
            <>
              <span> </span>
              <span
                css={css`
                  color: red;
                `}
              >
                업로드가
              </span>
              <span> 완료됐어요</span>
            </>
          )}
        </Text>
        {variant === "primary" && (
          <Text tag="xxl-title-semibold">
            진위여부 결과 :{" "}
            <span
              css={css`
                color: ${colors.main};
                font-weight: bold;
              `}
            >
              {isNormal ? "정상" : "비정상"}
            </span>
          </Text>
        )}
        {variant === "primary" && !isNormal && (
          <Text
            tag="lg-subtitle-medium"
            css={css`
              font-size: 1.8rem;
              font-weight: bold;
              color: ${colors.main};
              text-decoration: underline;
              cursor: pointer;
              margin-top: 5rem;
            `}
            onClick={onErrorClick}
          >
            오류내역 확인하기
          </Text>
        )}
      </Flex>

      <Flex css={buttonContainer}>
        <Button css={buttonStyle} variant="primary" onClick={onClose}>
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
