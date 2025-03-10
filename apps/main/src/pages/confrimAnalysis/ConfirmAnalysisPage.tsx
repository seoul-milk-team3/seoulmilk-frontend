import { Flex } from '@seoulmilk/ui';
import { useEffect, useState } from 'react';
import ConfirmLoading from './components/ConfirmLoading/ConfirmLoading';
import ConfirmResult from './components/ConfirmResult/ConfirmResult';

const ConfirmAnalysisPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalFiles, setTotalFiles] = useState(10); // 총 파일 개수
  const [normalCount, setNormalCount] = useState(7); // 정상 개수
  const [errorCount, setErrorCount] = useState(3); // 오류 개수

  useEffect(() => {
    // 3초 후 서버 응답 (정상/비정상 랜덤 결정) --> 추후 API 연동 예정
    const timer = setTimeout(() => {
      const randomResult = Math.random() < 0.7;
      setIsError(!randomResult);

      // ✅ 파일 개수가 1개인지 여부를 테스트 (실제 API 연동 시 데이터 받아오도록 수정)
      const singleFileTest = Math.random() < 0.3;
      if (singleFileTest) {
        setTotalFiles(1);
        setNormalCount(isError ? 0 : 1);
        setErrorCount(isError ? 0 : 1);
      }

      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex styles={{ align: 'center', justify: 'center', height: '100%', width: '100%' }}>
      {isLoading ? (
        <ConfirmLoading />
      ) : (
        <ConfirmResult isError={isError} totalFiles={totalFiles} normalCount={normalCount} errorCount={errorCount} />
      )}
    </Flex>
  );
};

export default ConfirmAnalysisPage;
