import { css } from '@emotion/react';
import { CheckDoneIcon } from '@seoulmilk/icon';
import { colors } from '@seoulmilk/styles';
import { Flex, Button, Text } from '@seoulmilk/ui';
import { useNavigate } from 'react-router-dom';
import { textColor } from './ConfirmResult.style';

interface ConfirmResultProps {
  isError?: boolean; // 서버에서 받은 결과 (정상 여부)
}

const ConfirmResult = ({ isError }: ConfirmResultProps) => {
  const navigate = useNavigate();

  return (
    <Flex styles={{ direction: 'column', align: 'center' }}>
      <CheckDoneIcon width={64} height={64} />
      <Text tag="xxl-title-bold" css={{ marginTop: '3.2rem' }}>
        분석이 완료됐어요
      </Text>

      <Flex styles={{ align: 'center', marginTop: '2rem' }}>
        <Text tag="lg-subtitle-semibold">진위여부 결과 :</Text>
        <Text tag="lg-subtitle-semibold" css={textColor}>
          {isError ? '정상' : '비정상'}
        </Text>
      </Flex>

      <Button
        variant="secondary"
        css={{ width: '36.5rem', marginTop: '6.4rem' }}
        onClick={() => navigate('/confirm-list')}>
        확인
      </Button>
    </Flex>
  );
};
export default ConfirmResult;
