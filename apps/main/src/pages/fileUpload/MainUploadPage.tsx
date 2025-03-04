import { Flex } from '@seoulmilk/ui';
import { FileCheck } from '@seoulmilk/ui';
import { UploadSection } from '@seoulmilk/ui';
import { useState } from 'react';

const MainUploadPage = () => {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'uploaded' | 'checking'>('idle');

  return (
    <Flex styles={{ direction: 'column', align: 'center', height: '100%', paddingTop: '9.2rem' }}>
      <UploadSection
        onUploadStart={() => setUploadState('uploading')}
        onUploadSuccess={() => setUploadState('uploaded')}
        onCheckValidity={() => setUploadState('checking')}
      />

      {uploadState === 'uploading' && (
        <FileCheck variant="primary" onComplete={() => setUploadState('uploaded')} checkFiles={async () => {}} />
      )}
      {uploadState === 'checking' && (
        <FileCheck variant="secondary" onComplete={() => setUploadState('uploaded')} checkFiles={async () => {}} />
      )}
    </Flex>
  );
};

export default MainUploadPage;
