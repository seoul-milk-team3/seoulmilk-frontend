import { mockList } from '@agency/constants';
import { Flex, Pagination, Text } from '@seoulmilk/ui';
import { useState } from 'react';
import { text1Style, text2Style, textStyle } from './ListPage.style';
import InvoiceItem from './components/Accordion/InvoiceItem';
import FilterHeader from './components/FilterHeader/FilterHeader';

const ListPage = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('ALL');

  const totalPages = Math.ceil(mockList.length / itemsPerPage);
  const filteredInvoices = filter === 'ALL' ? mockList : mockList.filter((invoice) => invoice.status === filter);
  const paginatedInvoices = filteredInvoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Flex styles={{ direction: 'column', gap: '2.4rem', padding: '4rem 4.8rem' }}>
      <Text tag="xxl-title-bold">자료 조회</Text>
      {/* 필터 헤더 */}
      <FilterHeader onFilterChange={setFilter} />
      <Flex styles={{ align: 'center', padding: '1.4rem 2.6rem', width: '100%', justify: 'space-between' }}>
        <Flex>
          <Text tag="md2-text-medium" css={text1Style}>
            세금계산서 일련번호
          </Text>
          <Text tag="md2-text-medium" css={text2Style}>
            생성일자
          </Text>
        </Flex>
        <Text tag="md2-text-medium" css={textStyle}>
          지급상태
        </Text>
      </Flex>

      {paginatedInvoices.map((invoice) => (
        <InvoiceItem key={invoice.id} {...invoice} />
      ))}

      <Pagination
        totalItems={filteredInvoices.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Flex>
  );
};

export default ListPage;
