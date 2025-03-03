import { Flex } from '@seoulmilk/ui';
import { UploadTopMessage } from '@seoulmilk/ui';
import { UploadSection } from '@seoulmilk/ui';
import React, { useState } from 'react';
import {
  pageContainerStyle,
  contentContainerStyle,
  mainContentStyle,
  uploadContentStyle,
  uploadBoxStyle,
} from './AgencyUploadPage.style';

const FileUploadPage = () => {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'uploaded' | 'checking'>('idle');

  return (
    <Flex css={pageContainerStyle}>
      {/* 메인 콘텐츠 영역 */}
      <Flex css={contentContainerStyle}>
        <Flex css={mainContentStyle}>
          {/* 업로드 섹션 */}
          <Flex css={uploadContentStyle}>
            <UploadTopMessage
              title="세금계산서를 업로드해주세요"
              subTitle="진위여부를 확인 할 세금계산서를 업로드해주세요"
            />
            <Flex css={uploadBoxStyle}>
              <UploadSection
                onUploadStart={() => setUploadState('uploading')} // ✅ 업로드 시작
                onUploadSuccess={() => setUploadState('uploaded')} // ✅ 업로드 성공
                onCheckValidity={() => setUploadState('checking')} // ✅ 진위 여부 확인
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FileUploadPage;
