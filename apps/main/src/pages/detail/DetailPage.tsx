import { dataList } from '@main/constants/listData';
import { StoreItem } from '@main/types';
import { Flex, Button } from '@seoulmilk/ui';
import { ImagePreview } from '@seoulmilk/ui';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  detailContainerStyle,
  detailListStyle,
  buttonContainerStyle,
  detailListWrapperStyle,
} from './DetailPage.style';
import DetailItem from './components/DetailItem/DetailItem';

const detailLabels = [
  { key: 'approvalNumber', label: '승인 번호' },
  { key: 'transactionType', label: '매출/매입 구분' },
  { key: 'createdAt', label: '작성일자' },
  { key: 'supplierBusinessNumber', label: '공급자 사업자등록번호' },
  { key: 'receiverBusinessNumber', label: '공급받는자 사업자등록번호' },
  { key: 'totalAmount', label: '총 공급가액 합계' },
  { key: 'totalPrice', label: '총액 (공급가액 + 세액)' },
  { key: 'totalTaxAmount', label: '총 세액 합계' },
  { key: 'createdDate', label: '생성일' },
  { key: 'createdTime', label: '생성시간' },
];

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<StoreItem | null>(null);

  useEffect(() => {
    const foundItem = dataList.find((data) => data.id === id);
    setItem(foundItem || null);
  }, [id]);

  if (!item || !item.details) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }

  return (
    <Flex css={detailContainerStyle}>
      {item.details.imageUrl && (
        <Flex styles={{ justify: 'center', align: 'center', width: '100%', height: '100%' }} css={{ flex: '1' }}>
          <ImagePreview imageUrl={item.details.imageUrl} />
        </Flex>
      )}

      <Flex styles={{ direction: 'column', width: '48.4rem' }} css={detailListWrapperStyle}>
        <Flex css={detailListStyle}>
          {detailLabels.map(({ key, label }) => (
            <DetailItem key={key} label={label} value={item.details?.[key as keyof typeof item.details] ?? 'N/A'} />
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
