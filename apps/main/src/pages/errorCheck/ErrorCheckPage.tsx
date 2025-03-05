import { dataList } from '@main/constants/listData';
import { StoreItem } from '@main/types';
import { Flex, Button } from '@seoulmilk/ui';
import { ImagePreview } from '@seoulmilk/ui';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ErrorCheckItem from './components/ErrorCheckItem/ErrorCheckItem';

const ErrorCheckPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<StoreItem | null>(null);
  const [formData, setFormData] = useState({
    approvalNumber: '',
    supplierBusinessNumber: '',
    createdAt: '',
    transactionType: '',
    totalAmount: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const foundItem = dataList.find((data) => data.id === id);
    if (foundItem) {
      setItem(foundItem);
      setFormData({
        approvalNumber: foundItem.details?.approvalNumber ?? '',
        supplierBusinessNumber: foundItem.details?.supplierBusinessNumber ?? '',
        createdAt: foundItem.details?.createdAt ?? '',
        transactionType: foundItem.details?.transactionType ?? '',
        totalAmount: (foundItem.details?.totalAmount ?? 0).toLocaleString(),
      });
    }
  }, [id]);

  if (!item) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('저장된 데이터:', formData);
    setIsEditing(false);
  };

  return (
    <Flex styles={{ direction: 'column', align: 'center', padding: '4rem 4.8rem' }}>
      <ImagePreview imageUrl={item.details?.imageUrl ?? ''} />
      <Flex styles={{ direction: 'column', gap: '2.2rem', marginTop: '9.9rem' }}>
        <ErrorCheckItem
          leftTitle="승인 번호"
          leftField="approvalNumber"
          leftValue={formData.approvalNumber}
          rightTitle="공급자 사업자등록번호"
          rightField="supplierBusinessNumber"
          rightValue={formData.supplierBusinessNumber}
          isEditing={isEditing}
          onChange={handleInputChange}
        />
        <ErrorCheckItem
          leftTitle="작성일자"
          leftField="createdAt"
          leftValue={formData.createdAt}
          rightTitle="매출/매입 구분"
          rightField="transactionType"
          rightValue={formData.transactionType}
          isEditing={isEditing}
          onChange={handleInputChange}
        />
        <ErrorCheckItem
          leftTitle="공급가액"
          leftField="totalAmount"
          leftValue={formData.totalAmount}
          isEditing={isEditing}
          onChange={handleInputChange}
        />
      </Flex>

      <Flex styles={{ gap: '1.2rem', marginTop: '10rem' }}>
        <Button variant="primary" onClick={() => navigate(-1)}>
          닫기
        </Button>
        <Button variant="secondary" onClick={isEditing ? handleSave : () => setIsEditing(true)}>
          {isEditing ? '저장하기' : '수정하기'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ErrorCheckPage;
