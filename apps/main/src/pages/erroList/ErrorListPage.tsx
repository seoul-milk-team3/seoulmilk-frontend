import { useErrorListQuery } from '@seoulmilk/api/src/errorlist/queries';
import { Flex, Text, Pagination } from '@seoulmilk/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorItem from './components/ErrorItem/ErrorItem';

const ITEMS_PER_PAGE = 8;

const ErrorListPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useErrorListQuery({
    filters: {},
    page: currentPage,
    size: ITEMS_PER_PAGE,
  });

  const handleCheckError = (id: number, suName: string) => {
    navigate(`/error/${id}`, { state: { from: 'ErrorListPage', suName } });
  };

  const displayedItems = data?.officeAbnormalTaxValidationResponses || [];

  console.log('📌 필터링된 비정상 항목:', displayedItems);

  return (
    <Flex styles={{ direction: 'column', padding: '4rem 4.8rem', width: '100%' }}>
      <Text tag="xxl-title-bold">오류 검토</Text>

      {/* 리스트 헤더 */}
      <Flex styles={{ align: 'center', height: '5.2rem', padding: '1.4rem 2.6rem', marginTop: '4rem' }}>
        <Text tag="md2-text-medium" css={{ width: '15.6rem', marginLeft: '1.2rem' }}>
          업로드 일자
        </Text>
        <Text tag="md2-text-medium" css={{ width: '17rem', marginLeft: '1.2rem' }}>
          공급자명
        </Text>
        <Text tag="md2-text-medium">처리결과</Text>
      </Flex>

      {/* 리스트 아이템 */}
      <Flex styles={{ direction: 'column', gap: '1.2rem', marginTop: '1.2rem', width: '100%' }}>
        {displayedItems.map((item) => (
          <ErrorItem
            key={item.id}
            id={item.id}
            date={item.createdDate}
            supplier={item.suName}
            status="비정상"
            onCheckError={() => handleCheckError(item.id, item.suName)}
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

export default ErrorListPage;
