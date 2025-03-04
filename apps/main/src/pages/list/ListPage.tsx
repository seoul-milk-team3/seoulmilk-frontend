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
};

const ListPage = () => {
  const [filters, setFilters] = useState(initialFilters);

  return (
    <Flex styles={{ direction: 'column', gap: '2.6rem', padding: '4rem 4.8rem' }}>
      <Text tag="xxl-title-bold">자료 조회</Text>
      <FilterContainer onFilter={setFilters} />
      <ListContainer filters={filters} />
    </Flex>
  );
};

export default ListPage;
