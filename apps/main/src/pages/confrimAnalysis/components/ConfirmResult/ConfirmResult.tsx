import { css } from '@emotion/react';
import { CheckDoneIcon } from '@seoulmilk/icon';
import { IcValidationError, IcValidationNormal, IcNoneFile } from '@seoulmilk/icon';
import { colors } from '@seoulmilk/styles';
import { Flex, Button, Text } from '@seoulmilk/ui';
import { useNavigate } from 'react-router-dom';
import { textColor, borderStyle, fileStyle, dividerStyle } from './ConfirmResult.style';

interface ConfirmResultProps {
  isError?: boolean; // 서버에서 받은 결과 (정상 여부)
  totalFiles?: number; // 총 파일 개수
  normalCount?: number; // 정상 개수
  errorCount?: number; // 비정상 개수
}

const ConfirmResult = ({ isError, totalFiles = 1, normalCount = 0, errorCount = 0 }: ConfirmResultProps) => {
  const navigate = useNavigate();
  const isSingleFile = totalFiles === 1; // 파일 개수가 1개인지 체크
  const hasError = errorCount > 0; // 비정상 개수가 1개 이상인지 체크

  // 버튼 텍스트 및 이동 경로 설정
  const buttonLabel = isSingleFile ? (isError ? '오류 확인' : '확인') : hasError ? '오류 확인' : '확인';

  const navigatePath = isSingleFile ? (isError ? '/error' : '/list') : hasError ? '/error' : '/list';

  return (
    <Flex styles={{ direction: 'column', align: 'center', justify: 'center' }} css={borderStyle}>
      {isSingleFile && isError ? (
        // 파일이 1개이고 비정상일 경우: "발급한 내역이 없습니다" & IcNoneFile 아이콘
        <>
          <Text tag="xxl-title-bold" css={{ color: '#E60012', marginBottom: '2.4rem' }}>
            발급한 내역이 없습니다
          </Text>
          <IcNoneFile width={80} height={80} />
        </>
      ) : (
        // 기본 UI "검증이 완료됐어요" & CheckDoneIcon
        <>
          <CheckDoneIcon width={64} height={64} />
          <Text tag="xxl-title-bold" css={{ marginTop: '3.2rem' }}>
            검증이 완료됐어요
          </Text>
        </>
      )}

      {/* 파일 개수가 1개 이상일 때만 "총 n개의 파일" 표시 */}
      {!isSingleFile && (
        <Text tag="md1-text-medium" css={fileStyle}>
          총 {totalFiles}개의 파일
        </Text>
      )}

      <div css={dividerStyle} />

      {isSingleFile ? (
        // 파일이 1개인 경우: "검증 결과 : 정상" 또는 "검증 결과 : 비정상"만 표시
        <Flex styles={{ align: 'center', gap: '1.4rem' }}>
          {isError ? (
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
        // 파일이 여러 개인 경우: "정상 : n개" / "비정상 및 오류 : m개"
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

      {/* 버튼: 조건에 맞게 텍스트와 이동 경로 설정 */}
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
