import { Flex, Text, Button, Pagination } from '@seoulmilk/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorItem from './components/ErrorItem/ErrorItem';

// ✅ Mock 데이터 (오류 리스트)
const MOCK_ERROR_LIST = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  date: '2024.12.25',
  supplier: '목동지점',
  status: '비정상',
}));

const ITEMS_PER_PAGE = 8;

const ErrorListPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 맞게 데이터 Slice
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedItems = MOCK_ERROR_LIST.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Flex styles={{ direction: 'column', padding: '4rem 4.8rem', width: '100%' }}>
      <Text tag="xxl-title-bold">오류 검토</Text>

      {/* ✅ 리스트 헤더 */}
      <Flex styles={{ align: 'center', height: '5.2rem', padding: '1.4rem 2.6rem', marginTop: '4rem' }}>
        <Text tag="md2-text-medium" css={{ width: '15.6rem', marginLeft: '1.2rem' }}>
          업로드 일자
        </Text>
        <Text tag="md2-text-medium" css={{ width: '17rem', marginLeft: '1.2rem' }}>
          공급자명
        </Text>
        <Text tag="md2-text-medium">처리결과</Text>
      </Flex>

      {/* ✅ 리스트 아이템 */}
      <Flex styles={{ direction: 'column', gap: '1.2rem', marginTop: '1.2rem', width: '100%' }}>
        {displayedItems.map((item) => (
          <ErrorItem
            key={item.id}
            id={item.id}
            date={item.date}
            supplier={item.supplier}
            status={item.status}
            onCheckError={() => navigate(`/error/${item.id}`)}
          />
        ))}
      </Flex>

      {/* ✅ 페이지네이션 */}
      <Pagination
        totalItems={MOCK_ERROR_LIST.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Flex>
  );
};

export default ErrorListPage;
