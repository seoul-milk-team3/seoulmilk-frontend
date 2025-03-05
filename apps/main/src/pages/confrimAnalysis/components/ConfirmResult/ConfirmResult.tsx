import { css } from '@emotion/react';
import { CheckDoneIcon } from '@seoulmilk/icon';
import { colors } from '@seoulmilk/styles';
import { Flex, Button, Text } from '@seoulmilk/ui';
import { textColor } from './ConfirmResult.style';

interface ConfirmResultProps {
  isError?: boolean; // 서버에서 받은 결과 (정상 여부)
  onErrorClick?: () => void; // 오류 내역 확인 버튼 클릭 시 실행할 콜백
}

const ConfirmResult = ({ isError, onErrorClick }: ConfirmResultProps) => {
  return (
    <Flex styles={{ direction: 'column', align: 'center' }}>
      <CheckDoneIcon width={64} height={64} />
      <Text tag="xxl-title-bold">분석이 완료됐어요</Text>

      <Flex styles={{ align: 'center' }}>
        <Text tag="lg-subtitle-semibold">진위여부 결과 :</Text>
        <Text tag="lg-subtitle-semibold" css={textColor}>
          {isError ? '정상' : '비정상'}
        </Text>
      </Flex>

      <Button variant="secondary" css={{ width: '36.5rem' }}>
        확인
      </Button>
    </Flex>
  );
};
export default ConfirmResult;
