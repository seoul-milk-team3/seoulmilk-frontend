import { IcClose } from '@seoulmilk/icon';
import { Flex, Button, Text, ImagePreview } from '@seoulmilk/ui';
import { useParams, useNavigate } from 'react-router-dom';
import { useTaxInvoiceDetailQuery } from '@seoulmilk/api';
import {
  detailContainerStyle,
  detailListWrapperStyle,
  buttonContainerStyle,
  detailListStyle,
} from './ErrorCheckPage.style';
import ErrorBox from './components/ErrorBox/ErrorBox';

const detailLabels = [
  { key: 'id', label: '승인 번호' },
  { key: 'suId', label: '공급자 사업자등록번호' },
  { key: 'ipId', label: '공급받는자 사업자등록번호' },
  { key: 'issueDate', label: '작성일자' },
  { key: 'chargeTotal', label: '총 공급가액 합계' },
];

const ErrorCheckPage = () => {
  const { id } = useParams(); // URL에서 오류 ID 가져오기
  const navigate = useNavigate();
  const taxId = id ? parseInt(id, 10) : undefined;

  // ✅ React Query로 서버 데이터 가져오기
  const { data: item, isLoading, error } = useTaxInvoiceDetailQuery(taxId!);

  if (isLoading) return <Text tag="md2-text-medium">로딩 중...</Text>;
  if (error || !item) return <Text tag="md2-text-medium">데이터를 불러오는 데 실패했습니다.</Text>;

  return (
    <Flex css={detailContainerStyle}>
      {/* 좌측: 이미지 프리뷰 */}
      {item.imageUrl && (
        <Flex styles={{ justify: 'center', align: 'center', width: '100%', height: '100%' }} css={{ flex: '1' }}>
          <ImagePreview imageUrl={item.imageUrl} />
        </Flex>
      )}

      {/* 우측: 오류 입력 박스 */}
      <Flex styles={{ direction: 'column', width: '48.4rem' }} css={detailListWrapperStyle}>
        <Flex css={detailListStyle}>
          <Flex styles={{ direction: 'column', width: '100%' }}>
            <Flex styles={{ justify: 'flex-end', width: '100%', marginBottom: '1rem' }}>
              <IcClose width={24} height={24} onClick={() => navigate(-1)} css={{ cursor: 'pointer' }} />
            </Flex>
            <Text tag="xxl-title-bold">올바르게 입력되었는지</Text>
            <Text tag="xxl-title-bold">확인해주세요</Text>
          </Flex>

          {/* 상세 정보 입력 필드 */}
          {detailLabels.map(({ key, label }) => (
            <ErrorBox
              key={key}
              label={label}
              value={item[key as keyof typeof item] ?? 'N/A'}
            />
          ))}
        </Flex>

        {/* 버튼 영역 */}
        <Flex css={buttonContainerStyle}>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            닫기
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ErrorCheckPage;