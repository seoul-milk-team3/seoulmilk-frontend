import Tabs from '@main/components/Tabs/Tabs';
import { Flex } from '@seoulmilk/ui';
import { useState } from 'react';
import FilterContainer from './components/Filter/FilterContainer';
import DataTable from './components/Table/DataTable';

const initialFilters = {
  startDate: '날짜',
  endDate: '날짜',
  region: '지역',
  storeName: '',
};

const ListPage = () => {
  const [activeTab, setActiveTab] = useState('자료 조회');
  const [filters, setFilters] = useState(initialFilters);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setFilters(initialFilters); //탭 변경 시 필터 초기화
  };

  return (
    <Flex styles={{ direction: 'column', gap: '3.4rem', padding: '4rem 4.8rem' }}>
      <Tabs tabs={['자료 조회', '오류 내역']} activeTab={activeTab} onChange={handleTabChange} />
      <FilterContainer onFilter={setFilters} />
      <DataTable filters={filters} />
    </Flex>
  );
};

export default ListPage;
