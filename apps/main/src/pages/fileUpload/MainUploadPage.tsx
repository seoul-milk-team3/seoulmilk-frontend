import { pageContainerStyle, uploadContentStyle, uploadBoxStyle } from '@main/pages/fileUpload/MainUploadPage.style';
import { Flex } from '@seoulmilk/ui';
import { FileCheck } from '@seoulmilk/ui';
import { UploadSection } from '@seoulmilk/ui';
import { useState } from 'react';

const FileUploadPage = () => {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'uploaded' | 'checking'>('idle');

  return (
    <Flex css={pageContainerStyle}>
      <Flex css={uploadContentStyle}>
        <Flex css={uploadBoxStyle}>
          {uploadState === 'uploading' && (
            <FileCheck variant="primary" onComplete={() => setUploadState('uploaded')} checkFiles={async () => {}} />
          )}
          {uploadState === 'checking' && (
            <FileCheck variant="secondary" onComplete={() => setUploadState('uploaded')} checkFiles={async () => {}} />
          )}
          {uploadState !== 'uploading' && uploadState !== 'checking' && (
            <UploadSection
              onUploadStart={() => setUploadState('uploading')}
              onUploadSuccess={() => setUploadState('uploaded')}
              onCheckValidity={() => setUploadState('checking')}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FileUploadPage;
