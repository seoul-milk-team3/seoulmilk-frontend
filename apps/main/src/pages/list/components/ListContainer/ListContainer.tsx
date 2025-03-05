import { dataList } from '@main/constants/listData';
import { StoreItem } from '@main/types';
import { getChosung } from '@main/utils';
import { IcDownload } from '@seoulmilk/icon';
import { Flex, Text, Pagination } from '@seoulmilk/ui';
import { CheckBox } from '@seoulmilk/ui';
import { useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import { textStyle, text1Style, text2Style, btnTextStyle, btnStyle } from './ListContainer.style';

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
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  // 필터링 로직
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

    const statusMatch = filters.status === '전체' || item.status === filters.status;

    return dateMatch && regionMatch && storeMatch && statusMatch;
  });

  const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // 전체 체크박스 클릭
  const handleSelectAll = () => {
    if (isAllChecked) {
      setSelectedItems([]); // 모든 아이템 선택 해제
    } else {
      setSelectedItems(filteredData.map((item) => item.id)); // 전체 선택
    }
    setIsAllChecked(!isAllChecked); // UI적으로는 유지
  };

  // 개별 체크박스 클릭
  const handleItemCheck = (id: string) => {
    setSelectedItems((prev) => {
      const newSelectedItems = prev.includes(id)
        ? prev.filter((item) => item !== id) // 개별 해제
        : [...prev, id]; // 개별 체크

      return newSelectedItems;
    });
  };

  useEffect(() => {
    // 개별 체크박스를 해제해도 전체 체크박스 UI를 유지
    if (isAllChecked && selectedItems.length !== filteredData.length) {
      return;
    }
    setIsAllChecked(selectedItems.length === filteredData.length);
  }, [selectedItems, filteredData.length]);

  return (
    <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }}>
      {/* 리스트 헤더  */}
      <Flex styles={{ justify: 'space-between', width: '100%', align: 'center' }}>
        <Flex styles={{ align: 'center', height: '5.2rem', padding: '1.4rem 2.6rem' }}>
          <CheckBox isChecked={isAllChecked} onChange={handleSelectAll} css={{ marginRight: '13rem' }} />
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
        <Flex tag="button" styles={{ align: 'center', gap: '1rem', padding: '1.2rem 2.4rem' }} css={btnStyle}>
          <IcDownload width={24} height={24} />
          <Text tag="md2-text-medium" css={btnTextStyle}>
            엑셀 다운로드
          </Text>
        </Flex>
      </Flex>

      {/* 리스트 아이템 */}
      <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }} css={{ minHeight: '59.6rem', flex: 1 }}>
        {paginatedData.map((item) => (
          <ListItem key={item.id} item={item} isChecked={selectedItems.includes(item.id)} onCheck={handleItemCheck} />
        ))}
      </Flex>

      {/* 페이지네이션 */}
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
