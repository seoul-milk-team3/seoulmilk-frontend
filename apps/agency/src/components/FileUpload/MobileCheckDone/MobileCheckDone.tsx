import React from "react";
import { 
  Container, 
  Card, 
  SuccessIcon, 
  Message, 
  ButtonWrapper, 
  UploadButton, 
  ConfirmButton ,
  HeaderWrapper
} from "./MobileCheckDone.style";
import { CheckDoneIcon } from "@seoulmilk/icon"; // 성공 아이콘
import { Text } from "@seoulmilk/ui"; // UI 텍스트
import { useNavigate } from "react-router-dom";

const MobileCheckDone = () => {
  const navigate = useNavigate();

  return (
    <Container>
            <div style={{ position: "relative", display: "inline-block" }}>

<Text tag="md1-text-bold" css={{ textAlign: "left", width: "100%" ,marginBottom: "0.5rem" }}>세금계산서 업로드를 완료했어요</Text>
        <Text tag="xs-text-medium" css={{ textAlign: "left", width: "100%", color: "#6B7280", marginBottom: "1rem" }}>
업로드한 세금계산서의 진위 여부 판별을 기다려주세요.</Text></div>
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
          <ConfirmButton onClick={() => {
            navigate("/");
            window.location.reload(); // ✅ 페이지 강제 새로고침
          }}>새로운 파일 업로드하기</ConfirmButton>
        </ButtonWrapper>
      </Card>
    </Container>
  );
};


export default MobileCheckDone;
