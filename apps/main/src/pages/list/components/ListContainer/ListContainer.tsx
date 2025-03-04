import { dataList } from '@main/constants/listData';
import { StoreItem } from '@main/types';
import { getChosung } from '@main/utils';
import { Flex, Text, Pagination } from '@seoulmilk/ui';
import { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import { textStyle, text1Style, text2Style } from './ListContainer.style';

interface ListContainerProps {
  filters: {
    startDate: string;
    endDate: string;
    region: string;
    storeName: string;
    status: string;
  };
}

const ITEMS_PER_PAGE = 8;

const ListContainer = ({ filters }: ListContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = dataList.filter((item: StoreItem) => {
    const dateMatch =
      filters.startDate === '날짜' ||
      filters.endDate === '날짜' ||
      (item.date >= filters.startDate && item.date <= filters.endDate);
    const regionMatch = filters.region === '지역' || item.region === filters.region;

    const storeNameChosung = getChosung(item.store);
    const searchChosung = getChosung(filters.storeName.trim().toLowerCase());

    const storeMatch =
      filters.storeName.trim() === '' ||
      item.store.toLowerCase().includes(filters.storeName.trim().toLowerCase()) ||
      storeNameChosung.startsWith(searchChosung);

    // 상태 필터링 로직
    const statusMatch = filters.status === '전체' || item.status === filters.status;

    return dateMatch && regionMatch && storeMatch && statusMatch;
  });

  const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }}>
      <Flex styles={{ align: 'center', height: '5.2rem', padding: '1.4rem 2.6rem' }}>
        <Text tag="md2-text-medium" css={text1Style}>
          일자
        </Text>
        <Text tag="md2-text-medium" css={text2Style}>
          공급자명
        </Text>
        <Text tag="md2-text-medium" css={textStyle}>
          처리결과
        </Text>
      </Flex>
      <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }} css={{ minHeight: '59.6rem', flex: 1 }}>
        {paginatedData.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Flex>
      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Flex>
  );
};

export default ListContainer;
