import { useTaxInvoicesQueryBeforeValidation } from '@seoulmilk/api';
import { Flex, Text, CheckBox, Button, Pagination } from '@seoulmilk/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmItem from './components/ConfirmItem/ConfirmItem';

const ITEMS_PER_PAGE = 8;

const ConfirmPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { data } = useTaxInvoicesQueryBeforeValidation({ page: currentPage, size: ITEMS_PER_PAGE });

  // 전체 선택 체크박스
  const handleSelectAll = () => {
    if (selectedIds.length === (data?.data.length || 0)) {
      setSelectedIds([]);
    } else {
      setSelectedIds(data?.data.map((item) => item.id) || []);
    }
  };

  // 개별 체크박스
  const handleItemCheck = (id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  // 진위여부 확인 버튼 클릭 시 (선택한 ID 배열 넘기기)
  const handleConfirm = () => {
    if (selectedIds.length > 0) {
      navigate('/confirm-list/auth', { state: { selectedIds } });
      console.log('체크된 id', selectedIds);
    }
  };

  return (
    <Flex styles={{ direction: 'column', padding: '4rem 4.8rem', width: '100%' }}>
      <Text tag="xxl-title-bold">업로드된 리스트</Text>

      {/* 리스트 헤더 */}
      <Flex
        styles={{
          width: '100%',
          align: 'center',
          marginTop: '1.4rem',
          justify: 'space-between',
        }}>
        <Flex styles={{ align: 'center', padding: '1.4rem 2.6rem' }}>
          <CheckBox isChecked={selectedIds.length === (data?.data.length || 0)} onChange={handleSelectAll} />
          <Text tag="md2-text-medium" css={{ width: '15.6rem', marginLeft: '1.2rem' }}>
            일자
          </Text>
          <Text tag="md2-text-medium" css={{ width: '17rem', marginLeft: '1.2rem' }}>
            공급자명
          </Text>
          <Text tag="md2-text-medium">처리결과</Text>
        </Flex>
        <Flex>
          <Button
            variant="secondary"
            tag="md2-text-semibold"
            onClick={handleConfirm}
            disabled={selectedIds.length === 0}
            padding="2.6rem 5rem">
            진위여부 검증하기
          </Button>
        </Flex>
      </Flex>

      {/* 리스트 아이템 */}
      <Flex
        styles={{ direction: 'column', gap: '1.2rem', marginTop: '1.6rem', width: '100%' }}
        css={{ minHeight: '59.6rem', flex: 1 }}>
        {data?.data.map((item) => (
          <ConfirmItem
            key={item.id}
            id={item.id}
            date={item.createdDate}
            supplier={item.suName}
            isChecked={selectedIds.includes(item.id)}
            onCheck={handleItemCheck}
          />
        ))}
      </Flex>

      {/* 페이지네이션 */}
      <Pagination
        totalItems={data?.totalPageSize || 0}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Flex>
  );
};

export default ConfirmPage;
