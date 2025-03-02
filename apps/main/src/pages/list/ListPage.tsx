import { useState } from 'react';
import FilterContainer from './components/Filter/FilterContainer';
import DataTable from './components/Table/DataTable';

const ListPage = () => {
  const [filters, setFilters] = useState({
    startDate: '날짜',
    endDate: '날짜',
    region: '지역',
    storeName: '',
  });

  return (
    <div>
      <FilterContainer onFilter={setFilters} />
      <DataTable filters={filters} />
    </div>
  );
};

export default ListPage;
