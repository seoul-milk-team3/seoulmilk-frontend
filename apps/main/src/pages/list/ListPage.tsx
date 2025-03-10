import Tabs from '@main/components/Tabs/Tabs';
import { Flex, Text } from '@seoulmilk/ui';
import { useState } from 'react';
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

  return (
    <Flex styles={{ direction: 'column', gap: '2.6rem', padding: '4rem 4.8rem' }}>
      <Text tag="xxl-title-bold">자료 조회</Text>
      <FilterContainer onFilter={setFilters} />
      <ListContainer filters={filters} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Flex>
  );
};

export default ListPage;
