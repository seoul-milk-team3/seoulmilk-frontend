import React from "react";
import { 
  Container, 
  Card, 
  SuccessIcon, 
  Message, 
  ButtonWrapper, 
  UploadButton, 
  ConfirmButton 
} from "./MobileCheckDone.style";
import { CheckDoneIcon } from "@seoulmilk/icon"; // 성공 아이콘
import { Text } from "@seoulmilk/ui"; // UI 텍스트

const MobileCheckDone = () => {
  return (
    <Container>
      <Text tag="md1-text-bold" css={{ textAlign: "left", marginBottom: "1rem", width: "100%" }}>세금계산서 업로드를 완료했어요</Text>
      <Text tag="xs-text-medium" css={{ color: "#6B7280", marginBottom: "1rem" }}>
        업로드한 세금계산서의 진위 여부 판별을 기다려주세요.
      </Text>

      <Card>
        <SuccessIcon>
          <CheckDoneIcon width="48px" height="48px" color="#008E3D" />
        </SuccessIcon>
        <Message>
          <Text tag="sm-text-medium" css={{ color: "#E00000", fontWeight: 600 }}>
            업로드가 완료됐어요
          </Text>
        </Message>
        
        <ButtonWrapper>
          <UploadButton>새로운 파일 업로드하기</UploadButton>
          <ConfirmButton>확인하기</ConfirmButton>
        </ButtonWrapper>
      </Card>
    </Container>
  );
};

export default MobileCheckDone;
