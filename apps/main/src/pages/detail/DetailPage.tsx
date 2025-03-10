import { useTaxInvoiceDetailQuery } from '@seoulmilk/api';
import { Flex, Button } from '@seoulmilk/ui';
import { ImagePreview } from '@seoulmilk/ui';
import { useParams, useNavigate } from 'react-router-dom';
import {
  detailContainerStyle,
  detailListStyle,
  buttonContainerStyle,
  detailListWrapperStyle,
} from './DetailPage.style';
import DetailItem from './components/DetailItem/DetailItem';

const detailLabels = [
  { key: 'id', label: '승인 번호' },
  { key: 'arap', label: '매출/매입 구분' },
  { key: 'issueDate', label: '작성일자' },
  { key: 'suId', label: '공급자 사업자등록번호' },
  { key: 'ipId', label: '공급받는자 사업자등록번호' },
  { key: 'chargeTotal', label: '총 공급가액 합계' },
  { key: 'grandTotal', label: '총액 (공급가액 + 세액)' },
  { key: 'taxTotal', label: '총 세액 합계' },
  { key: 'createdDate', label: '생성일' },
  { key: 'createdTime', label: '생성시간' },
];

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taxId = id ? parseInt(id, 10) : undefined;

  // ✅ React Query로 서버 데이터 가져오기
  const { data: item, isLoading, error } = useTaxInvoiceDetailQuery(taxId!);

  if (isLoading) return <p>로딩 중...</p>;
  if (error || !item) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <Flex css={detailContainerStyle}>
      {item.imageUrl && (
        <Flex styles={{ justify: 'center', align: 'center', width: '100%', height: '100%' }} css={{ flex: '1' }}>
          <ImagePreview imageUrl={item.imageUrl} />
        </Flex>
      )}

      <Flex styles={{ direction: 'column', width: '48.4rem' }} css={detailListWrapperStyle}>
        <Flex css={detailListStyle}>
          {detailLabels.map(({ key, label }) => (
            <DetailItem key={key} label={label} value={item[key as keyof typeof item] ?? 'N/A'} />
          ))}
        </Flex>

        <Flex css={buttonContainerStyle}>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            닫기
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DetailPage;
