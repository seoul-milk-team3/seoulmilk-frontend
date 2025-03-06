import MobileUploadSection from '@agency/components/FileUpload/MobileUploadSection/MobileUploadSection';
import { Flex } from '@seoulmilk/ui';
import { UploadSection } from '@seoulmilk/ui';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const AgencyUploadPage = () => {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'uploaded' | 'checking'>('idle');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Flex styles={{ direction: 'column', align: 'center', paddingTop: '12rem',}}>
      {isMobile ? (
        <MobileUploadSection />
      ) : (
        <UploadSection
          onUploadStart={() => setUploadState('uploading')}
          onUploadSuccess={() => setUploadState('uploaded')}
          onCheckValidity={() => setUploadState('checking')}
        />
      )}
    </Flex>
  );
};

export default AgencyUploadPage;
