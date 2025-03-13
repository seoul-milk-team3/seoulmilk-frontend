import { useErrorDetailQuery, useSaveModifiedTaxInvoice } from '@seoulmilk/api';
import { TaxInvoiceRequest } from '@seoulmilk/api/src/errorstore/types';
import { IcClose } from '@seoulmilk/icon';
import { Flex, Button, Text, ImagePreview } from '@seoulmilk/ui';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  detailContainerStyle,
  detailListWrapperStyle,
  buttonContainerStyle,
  detailListStyle,
} from './ErrorCheckPage.style';
import ErrorBox from './components/ErrorBox/ErrorBox';

const errordetailLabels = [
  { key: 'suId', name: '공급자 등록번호' },
  { key: 'issueId', name: '승인번호' },
  { key: 'chargeTotal', name: '공급가액' },
  { key: 'ipId', name: '공급받는자 등록번호' },
  { key: 'issueDate', name: '작성일자' },
];

const ErrorCheckPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taxId = id ? parseInt(id, 10) : undefined;
  const location = useLocation();
  const suNameFromList = location.state?.suName || '';
  console.log(suNameFromList);

  const { data: item, isLoading, error } = useErrorDetailQuery(taxId!);
  const mutation = useSaveModifiedTaxInvoice();

  const [modifiedData, setModifiedData] = useState<Record<string, string | number>>({});

  const isModifiedDataReady = Object.keys(modifiedData).length > 0;

  useEffect(() => {
    if (item) {
      const validKeys = [
        'issueId',
        'arap',
        'issueDate',
        'suId',
        'suName',
        'ipId',
        'chargeTotal',
        'grandTotal',
        'taxTotal',
        'createdDate',
        'createdTime',
        'imageUrl',
      ];

      const formattedData: Record<string, string | number> = Object.entries(item)
        .filter(([key, value]) => validKeys.includes(key))
        .reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: value !== null && value !== undefined ? value : undefined,
          }),
          {}
        );

      setModifiedData(formattedData);
    }
  }, [item]);

  const [isSaved, setIsSaved] = useState(false);

  if (isLoading) return <Text tag="md2-text-medium">로딩 중...</Text>;
  if (error || !item) return <Text tag="md2-text-medium">데이터를 불러오는 데 실패했습니다.</Text>;

  const handleVerify = () => {
    if (taxId) {
      navigate('/confirm-list/auth', { state: { selectedIds: [taxId], from: 'ErrorListPage' } });
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setModifiedData((prev) => ({
      ...prev,
      [key]: isNaN(Number(value)) ? value : Number(value),
    }));
  };
  const handleSave = async () => {
    if (!taxId) return;

    const validKeys = [
      'issueId',
      'arap',
      'issueDate',
      'suId',
      'suName',
      'ipId',
      'chargeTotal',
      'grandTotal',
      'taxTotal',
      'createdDate',
      'createdTime',
      'imageUrl',
    ];

    const updatedData = { ...item, ...modifiedData };

    //  suName 필드 필터링
    const cleanedData = Object.fromEntries(
      Object.entries(updatedData).filter(
        ([key, value]) => validKeys.includes(key) && key !== 'suName' && value !== undefined && value !== ''
      )
    );

    const requestData: TaxInvoiceRequest = {
      requests: [
        {
          fields: [
            ...errordetailLabels.map(({ key, name }) => ({
              name,
              inferText: String(cleanedData[key] ?? ''),
            })),
            {
              name: '공급자명', // 공급자명 추가
              inferText: String(suNameFromList), // 리스트에서 가져온 값이 우선
            },
          ],
        },
      ],
    };

    console.log('저장 요청 데이터:', JSON.stringify(requestData, null, 2));

    mutation.mutate(
      { taxId, requestData },
      {
        onSuccess: () => {
          console.log('수정된 세금 계산서가 저장되었습니다.');
          //alert('수정된 세금 계산서가 저장되었습니다.');
          setIsSaved(true);
        },
        onError: (err) => {
          console.error('세금 계산서 저장 실패:', err);
          alert('저장에 실패했습니다.');
        },
      }
    );
    console.log('최종 요청 데이터:', JSON.stringify(requestData, null, 2));
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
          {isModifiedDataReady &&
            errordetailLabels.map(({ key, name }) => (
              <ErrorBox
                key={key}
                label={name}
                value={modifiedData[key] ?? ''}
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
            css={{ whiteSpace: 'nowrap', height: '5rem', width: '8rem' }}>
            저장
          </Button>

          <Button
            variant="secondary"
            onClick={handleVerify}
            padding="1.7rem 9.5rem"
            css={{ height: '5rem', whiteSpace: 'nowrap', width: '8rem' }}
            disabled={!isSaved}>
            진위여부 확인
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ErrorCheckPage;
