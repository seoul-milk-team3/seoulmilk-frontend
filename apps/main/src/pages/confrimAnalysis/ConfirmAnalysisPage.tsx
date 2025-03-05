import { Flex } from '@seoulmilk/ui';
import { useEffect, useState } from 'react';
import ConfirmLoading from './components/ConfirmLoading/ConfirmLoading';
import ConfirmResult from './components/ConfirmResult/ConfirmResult';

const ConfirmAnalysisPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    //  3초 후 서버 응답 (정상/비정상 랜덤 결정) --> 추후 api 연동하기
    const timer = setTimeout(() => {
      const randomResult = Math.random() < 0.7;
      setIsError(!randomResult);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex styles={{ align: 'center', justify: 'center', height: '100%', width: '100%' }}>
      {isLoading ? <ConfirmLoading /> : <ConfirmResult isError={isError} />}
    </Flex>
  );
};

export default ConfirmAnalysisPage;
