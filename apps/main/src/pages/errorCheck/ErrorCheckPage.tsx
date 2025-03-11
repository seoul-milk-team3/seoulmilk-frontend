import { IcClose } from '@seoulmilk/icon';
import { Flex, Button, Text, ImagePreview } from '@seoulmilk/ui';
import { useParams, useNavigate } from 'react-router-dom';
import {
  detailContainerStyle,
  detailListWrapperStyle,
  buttonContainerStyle,
  detailListStyle,
} from './ErrorCheckPage.style';
import ErrorBox from './components/ErrorBox/ErrorBox';
import { useErrorDetailQuery } from '@seoulmilk/api';
import { saveModifiedTaxInvoice } from '@seoulmilk/api';
import { TaxInvoiceRequest } from '@seoulmilk/api/src/errorstore/types';
import { useState } from 'react';

const errordetailLabels = [
  { key: 'arap', label: '매출/매입 구분' },
  { key: 'suId', label: '공급자 사업자등록번호' },
  { key: 'ipId', label: '공급받는자 사업자등록번호' },
  { key: 'chargeTotal', label: '총 공급가액 합계' },
  { key: 'grandTotal', label: '총액 (공급가액 + 세액)' },
  { key: 'taxTotal', label: '총 세액 합계' },
];

const ErrorCheckPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taxId = id ? parseInt(id, 10) : undefined;

  const { data: item, isLoading, error } = useErrorDetailQuery(taxId!);

  const [modifiedData, setModifiedData] = useState(item || {});
  const [isSaved, setIsSaved] = useState(false); // 저장 성공 여부

  if (isLoading) return <Text tag="md2-text-medium">로딩 중...</Text>;
  if (error || !item) return <Text tag="md2-text-medium">데이터를 불러오는 데 실패했습니다.</Text>;

  const handleInputChange = (key: string, value: string) => {
    setModifiedData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    if (!taxId) return;

    // API에 맞는 데이터 변환
    const requestData: TaxInvoiceRequest = {
      requests: [
        {
          fields: Object.entries(modifiedData).map(([key, value]) => ({
            name: key,
            inferText: String(value),
          })),
        },
      ],
    }; 

    console.log("저장 요청 데이터:", requestData);
    console.log("API 호출 URL:", `/tax-invoices/office?taxId=${taxId}`);

    try {
      await saveModifiedTaxInvoice(taxId, requestData);
      alert('수정된 세금 계산서가 저장되었습니다.');
      setIsSaved(true); 
    } catch (err) {
      console.error('세금 계산서 저장 실패:', err);
      alert('저장에 실패했습니다.');
    }
  };

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
          {errordetailLabels.map(({ key, label }) => (
            <ErrorBox
              key={key}
              label={label}
              value={modifiedData[key as keyof typeof modifiedData] ?? 'N/A'}
              onChange={(value) => handleInputChange(key, value)}
            />
          ))}
        </Flex>

        {/* 버튼 영역 */}
        <Flex css={buttonContainerStyle}>
    
          <Button 
            variant="primary" 
            padding="1.7rem 9.5rem" 
            onClick={handleSave} 
            css={{ whiteSpace: "nowrap", height: "5rem", width: "8rem" }}
          >
            저장
          </Button>

          <Button
            variant="secondary"
            padding="1.7rem 9.5rem"
            css={{ height: "5rem", whiteSpace: "nowrap", width: "8rem" }}
            disabled={!isSaved} 
          >
            진위여부 확인
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ErrorCheckPage;
