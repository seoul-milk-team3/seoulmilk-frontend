import { css } from '@emotion/react';
import { CheckDoneIcon } from '@seoulmilk/icon';
import { IcValidationError, IcValidationNormal } from '@seoulmilk/icon';
import { colors } from '@seoulmilk/styles';
import { Flex, Button, Text } from '@seoulmilk/ui';
import { useNavigate } from 'react-router-dom';
import { textColor, borderStyle, fileStyle, dividerStyle } from './ConfirmResult.style';

interface ConfirmResultProps {
  isError?: boolean; // 서버에서 받은 결과 (정상 여부)
}

const ConfirmResult = ({ isError }: ConfirmResultProps) => {
  const navigate = useNavigate();

  return (
    <Flex styles={{ direction: 'column', align: 'center', justify: 'center' }} css={borderStyle}>
      <CheckDoneIcon width={64} height={64} />
      <Text tag="xxl-title-bold" css={{ marginTop: '3.2rem' }}>
        검증이 완료됐어요
      </Text>
      <Text tag="md1-text-medium" css={fileStyle}>
        총 10개의 파일
      </Text>
      <div css={dividerStyle} />

      <Flex styles={{ direction: 'column', gap: '1.2rem' }}>
        <Flex styles={{ align: 'center', gap: '1.4rem' }}>
          <IcValidationNormal width={28} height={28} />
          <Text tag="xl-title-semibold">정상 : 7개</Text>
        </Flex>
        <Flex styles={{ align: 'center', gap: '1.4rem' }}>
          <IcValidationError width={28} height={28} />
          <Text tag="xl-title-semibold" css={textColor}>
            비정상 및 오류 : 3개
          </Text>
        </Flex>
      </Flex>

      <Button
        variant="secondary"
        tag="lg-subtitle-semibold"
        padding="1.7rem 14.2rem"
        css={{ marginTop: '6rem' }}
        onClick={() => navigate('/confirm-list')}>
        오류 확인
      </Button>
    </Flex>
  );
};
export default ConfirmResult;
