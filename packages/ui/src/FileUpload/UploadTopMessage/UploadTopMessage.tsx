import React from "react";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import { Container, Title, SubTitle } from "./UploadTopMessage.style";

interface UploadTopMessageProps {
  title: string;
  subTitle?: string;
}

const UploadTopMessage: React.FC<UploadTopMessageProps> = ({ title, subTitle }) => {
  return (
    <Flex css={Container} styles={{ direction: "column", gap: "0.8rem" }}>
      <Text tag="xxl-title-bold" css={Title}>
        {title}
      </Text>
      {subTitle && (
        <Text tag="md1-text-medium" css={SubTitle}>
          {subTitle}
        </Text>
      )}
    </Flex>
  );
};

export default UploadTopMessage;
