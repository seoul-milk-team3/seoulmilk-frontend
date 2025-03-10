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
import { useOutletContext } from "react-router-dom"; // ✅ Outlet에서 `layoutVariant` 가져오기
import { useNavigate } from "react-router-dom";
interface CheckDoneProps {
  onClose: () => void;
  variant: "primary" | "secondary";
  layoutVariant: "main" | "agency";  // ✅ MainLayout에서 전달받은 variant
  isNormal?: boolean;
  onErrorClick?: () => void;
}

const CheckDone = ({
  onClose,
  variant,
  isNormal,
  onErrorClick,
}: CheckDoneProps) => {
  const { layoutVariant } = useOutletContext<{ layoutVariant: string }>(); // ✅ 현재 레이아웃 타입 가져오기
  const navigate = useNavigate();

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
                세금계산서 업로드
              </span>
              <span>가 완료됐어요</span>
            </>
          )}
        </Text>
        {variant === "secondary" && (
          <Text
            tag="md1-text-medium"
            css={{ color: "#A3A3A3", marginTop: "0.8rem" }}
          >
            업로드한 세금계산서의 진위 여부를 분석하러 가볼까요?
          </Text>
        )}

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
        <Button
          css={buttonStyle}
          variant={layoutVariant === "main" ? "secondary" : "primary"}
            onClick={() => {
            navigate("/");
            window.location.reload(); // ✅ 페이지 강제 새로고침
          }}
        >
          새로운 파일 업로드하기
        </Button>
        {layoutVariant === "main" && ( // ✅ main일 때만 보이도록 조건 추가
          <Button css={buttonStyle}
          variant="secondary"
          onClick={() => navigate("/confirm-list")}>
            진위여부 확인하기
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default CheckDone;
