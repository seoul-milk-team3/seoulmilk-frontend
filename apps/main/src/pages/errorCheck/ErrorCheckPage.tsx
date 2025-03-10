import { IcClose } from '@seoulmilk/icon';
import { Flex, Button, Text, ImagePreview } from '@seoulmilk/ui';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  detailContainerStyle,
  detailListWrapperStyle,
  buttonContainerStyle,
  detailListStyle,
} from './ErrorCheckPage.style';
import ErrorBox from './components/ErrorBox/ErrorBox';

// 🛠 Mock 데이터 (서버 없이 테스트)
const MOCK_ERROR_DATA = {
  id: '1',
  supplierId: '305-92-72619',
  buyerId: '314-05-71224',
  issueDate: '2024-06-30',
  chargeTotal: '483,230',
  imageUrl: 'https://github.com/user-attachments/assets/418a1198-a68a-45cc-b30f-691d723315c5', // 실제 이미지 경로로 변경
};

// 🔍 상세 정보 라벨 정의
const detailLabels = [
  { key: 'id', label: '승인 번호' },
  { key: 'supplierId', label: '공급자 사업자등록번호' },
  { key: 'buyerId', label: '공급받는자 사업자등록번호' },
  { key: 'issueDate', label: '작성일자' },
  { key: 'chargeTotal', label: '총 공급가액 합계' },
];

const ErrorCheckPage = () => {
  const { id } = useParams(); // URL에서 오류 ID 가져오기
  const navigate = useNavigate();
  const [data, setData] = useState(MOCK_ERROR_DATA); // Mock 데이터 사용
  const [isSaved, setIsSaved] = useState(false);

  // 입력값 변경 핸들러
  const handleInputChange = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  // 저장 버튼 클릭 시
  const handleSave = () => {
    //console.log('저장된 데이터:', data);
    setIsSaved(true);
  };

  return (
    <Flex css={detailContainerStyle}>
      {/* 좌측: 이미지 프리뷰 */}
      <Flex styles={{ justify: 'center', align: 'center', width: '100%', height: '100%' }} css={{ flex: '1' }}>
        <ImagePreview imageUrl={data.imageUrl} />
      </Flex>

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
              value={data[key as keyof typeof data]}
              onChange={(val) => handleInputChange(key, val)}
            />
          ))}
        </Flex>

        {/* 버튼 영역 */}
        <Flex css={buttonContainerStyle}>
          <Button variant="primary" onClick={handleSave} padding="1.7rem 7.45rem">
            저장
          </Button>
          <Button
            variant="secondary"
            disabled={!isSaved}
            onClick={() => navigate('/confirm-list/auth')}
            padding="1.7rem 3.75rem">
            진위여부 확인
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ErrorCheckPage;
