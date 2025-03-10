import Tabs from '@main/components/Tabs/Tabs';
import { Flex, Text } from '@seoulmilk/ui';
import { useState, useCallback } from 'react';
import FilterContainer from './components/Filter/FilterContainer';
import ListContainer from './components/ListContainer/ListContainer';

const initialFilters = {
  startDate: '날짜',
  endDate: '날짜',
  region: '지역',
  storeName: '',
  status: '처리결과',
};

const ListPage = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [resetCheckBoxesTrigger, setResetCheckBoxesTrigger] = useState(false); // ✅ 체크박스 초기화 트리거

  // ✅ useCallback으로 handleReset 최적화
  const handleReset = useCallback(() => {
    //setCurrentPage(1);
    setResetCheckBoxesTrigger((prev) => !prev); // ✅ 트리거 변경하여 체크박스 상태 초기화
  }, []);

  return (
    <Flex styles={{ direction: 'column', gap: '2.6rem', padding: '4rem 4.8rem' }}>
      <Text tag="xxl-title-bold">자료 조회</Text>
      <FilterContainer onFilter={setFilters} onReset={handleReset} />
      <ListContainer
        filters={filters}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        resetCheckBoxesTrigger={resetCheckBoxesTrigger} // ✅ 트리거 전달
      />
    </Flex>
  );
};

export default ListPage;
