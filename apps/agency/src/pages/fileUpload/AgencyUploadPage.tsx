import { pageContainerStyle, uploadContentStyle, uploadBoxStyle } from '@agency/pages/fileUpload/AgencyUploadPage.style';
import { Flex } from '@seoulmilk/ui';
import  FileCheck  from '@agency/components/FileUpload/FileCheck/FileCheck';
import  UploadSection  from '@agency/components/FileUpload/UploadSection/UploadSection';
import { useState } from 'react';

const AgencyUploadPage = () => {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'uploaded' | 'checking'>('idle');

  return (
    <Flex css={pageContainerStyle}>
      <Flex css={uploadContentStyle}>
        <Flex css={uploadBoxStyle}>
          <UploadSection
          />
      </Flex>
    </Flex>
    </Flex>
  );
};


export default AgencyUploadPage;
