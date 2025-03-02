import React, { useState } from "react";
import Flex from "@/Flex/Flex";
import UploadSection from "@/FileUpload/UploadSection/UploadSection";
import Header from "@/Header/Header";
import Sidebar from "@/Sidebar/Sidebar";
import FileCheck from "@/FileUpload/FileCheck/FileCheck"; // fileCheck 컴포넌트 추가
import {
  pageContainerStyle,
  sidebarStyle,
  contentContainerStyle,
  mainContentStyle,
  uploadContentStyle,
  uploadBoxStyle,
} from "./MainUploadPage.style";

const FileUploadPage = () => {
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "uploaded" | "checking">("idle");

  return (
    <Flex css={pageContainerStyle}>
      {/* 메인 콘텐츠 영역 */}
      <Flex css={contentContainerStyle}>
        <Header variant="secondary" />

        <Flex css={mainContentStyle}>
          {/* 사이드바 */}
          <Sidebar css={sidebarStyle} />

          {/* 업로드 섹션 */}
          <Flex css={uploadContentStyle}>
           

            <Flex css={uploadBoxStyle}>
              {uploadState === "uploading" && <FileCheck variant="primary" />}
              {uploadState === "checking" && <FileCheck variant="secondary" />}
              {uploadState !== "uploading" && uploadState !== "checking" && (
                <UploadSection
                  onUploadStart={() => setUploadState("uploading")}
                  onUploadSuccess={() => setUploadState("uploaded")}
                  onCheckValidity={() => setUploadState("checking")}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FileUploadPage;
