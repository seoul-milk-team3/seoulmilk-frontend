import { usePostVerification } from '@seoulmilk/api';
import { PostVerificationResponse } from '@seoulmilk/api/src/validation/types';
import { Flex } from '@seoulmilk/ui';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ConfirmLoading from './components/ConfirmLoading/ConfirmLoading';
import ConfirmResult from './components/ConfirmResult/ConfirmResult';

const ConfirmAnalysisPage = () => {
  const { state } = useLocation();
  console.log('select', state);
  const [verificationResult, setVerificationResult] = useState<PostVerificationResponse | null>(null);

  const { mutate: postVerify, isPending } = usePostVerification();

  useEffect(() => {
    postVerify(
      state.selectedIds.map((id: number) => ({ id })),
      {
        onSuccess: (data) => setVerificationResult(data),
      }
    );
  }, []);

  return (
    <Flex styles={{ align: 'center', justify: 'center', height: '100%', width: '100%' }}>
      {isPending ? (
        <ConfirmLoading />
      ) : verificationResult?.data ? (
        (() => {
          const data = verificationResult.data ?? [];
          const normalCount = data.filter((item) => item.isNormal === 'NORMAL').length;
          const errorCount = data.filter((item) => item.isNormal === 'ABNORMAL').length;

          return (
            <ConfirmResult
              isError={errorCount > 0}
              totalFiles={data.length}
              normalCount={normalCount}
              errorCount={errorCount}
            />
          );
        })()
      ) : null}
    </Flex>
  );
};

export default ConfirmAnalysisPage;
