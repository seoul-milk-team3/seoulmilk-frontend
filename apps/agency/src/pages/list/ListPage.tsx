import { useAgencyTaxInvoicesQuery } from '@seoulmilk/api';
import { Flex, Pagination, Text } from '@seoulmilk/ui';
import { useState } from 'react';
import InvoiceItem from './components/Accordion/InvoiceItem';
import FilterHeader from './components/FilterHeader/FilterHeader';

// ✅ TaxInvoiceFilters 타입을 직접 지정하여 payStatus 타입을 맞춤
const ListPage = () => {
  const [filters, setFilters] = useState<{
    startDate: string;
    endDate: string;
    payStatus: '' | 'PAID_YET' | 'PAID' | 'ABNORMAL';
    page: number;
    size: number;
  }>({
    startDate: '',
    endDate: '',
    payStatus: '', // ✅ 빈 문자열 ""을 초기값으로 설정
    page: 1,
    size: 8,
  });

  const { data } = useAgencyTaxInvoicesQuery(filters);

  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  // ✅ payStatus 타입을 맞추도록 수정
  const handleFilterChange = (updatedFilter: Partial<typeof filters>) => {
    setFilters((prev) => ({
      ...prev,
      ...updatedFilter,
      page: 1,
    }));
  };

  return (
    <Flex styles={{ direction: 'column', gap: '2.4rem', padding: '4rem 4.8rem' }}>
      <Text tag="xxl-title-bold">자료 조회</Text>
      <FilterHeader onFilterChange={handleFilterChange} />

      {data?.branchTaxFilterResponses.map((invoice) => <InvoiceItem key={invoice.id} {...invoice} />)}

      <Pagination
        totalItems={data?.totalPageSize || 0}
        itemsPerPage={filters.size}
        currentPage={filters.page}
        onPageChange={handlePageChange}
      />
    </Flex>
  );
};

export default ListPage;
