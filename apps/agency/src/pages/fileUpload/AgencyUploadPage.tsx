import React from "react";
import Flex from "@/Flex/Flex";
import UploadTopMessage from "@/FileUpload/UploadTopMessage/UploadTopMessage";
import UploadSection from "@/FileUpload/UploadSection/UploadSection";
import Header from "@/Header/Header";
import Sidebar from "@/Sidebar/Sidebar";
import { 
  pageContainerStyle, 
  sidebarStyle, 
  contentContainerStyle, 
  mainContentStyle, 
  uploadContentStyle, 
  uploadBoxStyle 
} from "./AgencyUploadPage.style";

const FileUploadPage = () => {
  return (
    <Flex css={pageContainerStyle}>
      {/* 메인 콘텐츠 영역 */}
      <Flex css={contentContainerStyle}>
        <Header variant="primary" />
        
        <Flex css={mainContentStyle}>
          {/* 사이드바 */}
          <Sidebar css={sidebarStyle} />

          {/* 업로드 섹션 */}
          <Flex css={uploadContentStyle}>
            <UploadTopMessage 
              title="세금계산서를 업로드해주세요" 
              subTitle="진위여부를 확인 할 세금계산서를 업로드해주세요"
            />
            <Flex css={uploadBoxStyle}>
              <UploadSection />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FileUploadPage;
