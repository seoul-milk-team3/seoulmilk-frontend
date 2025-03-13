import { CheckDoneIcon, IcValidationError, IcValidationNormal, IcNoneFile } from '@seoulmilk/icon';
import { Flex, Button, Text } from '@seoulmilk/ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { borderStyle, textColor, fileStyle, dividerStyle } from './ConfirmResult.style';

interface ConfirmResultProps {
  totalFiles?: number; // 총 파일 개수
  normalCount?: number; // 정상 개수
  errorCount?: number; // 비정상 개수
}

const ConfirmResult = ({ totalFiles = 1, normalCount = 0, errorCount = 0 }: ConfirmResultProps) => {
  const navigate = useNavigate();
  const { state } = useLocation(); // ✅ 어떤 페이지에서 왔는지 확인하기 위해 state 사용
  const isSingleFile = totalFiles === 1;
  const hasError = errorCount > 0;
  const isFromErrorList = state?.from === 'ErrorListPage'; // ✅ 오류 검토 페이지에서 온 경우 체크

  console.log('어디서왔나용', state);
  // ✅ 버튼 텍스트 및 이동 경로 설정
  let buttonLabel = '확인';
  let navigatePath = '/list';

  if (!isFromErrorList) {
    if (isSingleFile) {
      buttonLabel = hasError ? '오류 확인' : '확인';
      navigatePath = hasError ? '/error' : '/list';
    } else {
      buttonLabel = hasError ? '오류 확인' : '확인';
      navigatePath = hasError ? '/error' : '/list';
    }
  }

  return (
    <Flex styles={{ direction: 'column', align: 'center', justify: 'center' }} css={borderStyle}>
      {isSingleFile && hasError ? (
        <>
          <Text tag="xxl-title-bold" css={{ color: '#E60012', marginBottom: '2.4rem' }}>
            발급한 내역이 없습니다
          </Text>
          <IcNoneFile width={80} height={80} />
        </>
      ) : (
        <>
          <CheckDoneIcon width={64} height={64} />
          <Text tag="xxl-title-bold" css={{ marginTop: '3.2rem' }}>
            검증이 완료됐어요
          </Text>
        </>
      )}

      {!isSingleFile && (
        <Text tag="md1-text-medium" css={fileStyle}>
          총 {totalFiles}개의 파일
        </Text>
      )}

      <div css={dividerStyle} />

      {isSingleFile ? (
        <Flex styles={{ align: 'center', gap: '1.4rem' }}>
          {hasError ? (
            <>
              <IcValidationError width={28} height={28} />
              <Text tag="xl-title-semibold" css={textColor}>
                검증 결과 : 비정상
              </Text>
            </>
          ) : (
            <>
              <IcValidationNormal width={28} height={28} />
              <Text tag="xl-title-semibold">검증 결과 : 정상</Text>
            </>
          )}
        </Flex>
      ) : (
        <Flex styles={{ direction: 'column', gap: '1.2rem' }}>
          <Flex styles={{ align: 'center', gap: '1.4rem' }}>
            <IcValidationNormal width={28} height={28} />
            <Text tag="xl-title-semibold">정상 : {normalCount}개</Text>
          </Flex>
          <Flex styles={{ align: 'center', gap: '1.4rem' }}>
            <IcValidationError width={28} height={28} />
            <Text tag="xl-title-semibold" css={textColor}>
              비정상 및 오류 : {errorCount}개
            </Text>
          </Flex>
        </Flex>
      )}

      <Button
        variant="secondary"
        tag="lg-subtitle-semibold"
        padding="1.7rem 14.2rem"
        css={{ marginTop: '6rem' }}
        onClick={() => navigate(navigatePath)}>
        {buttonLabel}
      </Button>
    </Flex>
  );
};

export default ConfirmResult;
