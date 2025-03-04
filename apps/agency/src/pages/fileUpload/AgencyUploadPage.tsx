import { pageContainerStyle, uploadContentStyle, uploadBoxStyle } from '@agency/pages/fileUpload/AgencyUploadPage.style';
import { Flex } from '@seoulmilk/ui';
import { UploadSection } from '@seoulmilk/ui';
import MobileUploadSection from '@agency/components/FileUpload/MobileUploadSection/MobileUploadSection';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const AgencyUploadPage = () => {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'uploaded' | 'checking'>('idle');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Flex css={pageContainerStyle}>
      <Flex css={uploadContentStyle}>
        <Flex css={uploadBoxStyle}>
          {isMobile ? (
            <MobileUploadSection />
          ) : (
            <UploadSection
              onUploadStart={() => setUploadState("uploading")}
              onUploadSuccess={() => setUploadState("uploaded")}
              onCheckValidity={() => setUploadState("checking")}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AgencyUploadPage;
