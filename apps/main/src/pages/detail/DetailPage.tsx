import { dataList } from '@main/constants/listData';
import { StoreItem } from '@main/types';
import { Flex, Button } from '@seoulmilk/ui';
import { ImagePreview } from '@seoulmilk/ui';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailItem from './components/DetailItem/DetailItem';

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

  const { details } = item;

  return (
    <Flex styles={{ direction: 'column', align: 'center', padding: '4rem 4.8rem', gap: '2rem' }}>
      <ImagePreview imageUrl={details.imageUrl} />
      <Flex styles={{ direction: 'column', gap: '2.2rem' }}>
        <DetailItem
          leftTitle="승인 번호"
          leftValue={details.approvalNumber}
          rightTitle="총 공급가액 합계"
          rightValue={details.totalAmount}
        />
        <DetailItem
          leftTitle="매출/매입 구분"
          leftValue={details.transactionType}
          rightTitle="총액(공급가액 + 세액)"
          rightValue={details.totalPrice}
        />
        <DetailItem
          leftTitle="작성일자"
          leftValue={details.createdAt}
          rightTitle="총 세액 합계"
          rightValue={details.totalTaxAmount}
        />
        <DetailItem
          leftTitle="공급자 사업자등록번호"
          leftValue={details.supplierBusinessNumber}
          rightTitle="생성일"
          rightValue={details.createdDate}
        />
        <DetailItem
          leftTitle="공급받는자 사업자등록번호"
          leftValue={details.receiverBusinessNumber}
          rightTitle="생성시간"
          rightValue={details.createdTime}
        />
      </Flex>
      <Button variant="secondary" onClick={() => navigate(-1)}>
        닫기
      </Button>
    </Flex>
  );
};

export default DetailPage;
