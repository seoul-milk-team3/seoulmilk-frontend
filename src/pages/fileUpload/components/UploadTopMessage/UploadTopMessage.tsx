import React from "react";
import { Container, Title, SubTitle } from "./UploadTopMessage.style";

interface UploadTopMessageProps {
  title: string;
  subTitle?: string;
}

const UploadTopMessage: React.FC<UploadTopMessageProps> = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
};

export default UploadTopMessage;
