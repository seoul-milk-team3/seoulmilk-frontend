import { Flex, Text } from '@seoulmilk/ui';
import { Pagination } from '@seoulmilk/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { text1Style, text2Style } from './ConfirmPage.style';
import ConfirmItem from './components/ConfirmItem/ConfirmItem';

const ITEMS_PER_PAGE = 8;

const dummyData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  date: '2024.12.25',
  supplier: '서울지점',
}));

const ConfirmPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedItems = dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleItemClick = (id: number) => {
    navigate(`/confirm-list/${id}/auth`);
  };

  return (
    <Flex styles={{ direction: 'column', padding: '4rem 4.8rem', width: '100%' }}>
      <Text tag="xxl-title-bold">진위여부 확인 전 리스트</Text>

      {/* 리스트 헤더  */}
      <Flex styles={{ align: 'center', height: '5.2rem', padding: '1.4rem 2.6rem', marginTop: '4rem' }}>
        <Text tag="md2-text-medium" css={text1Style}>
          일자
        </Text>
        <Text tag="md2-text-medium" css={text2Style}>
          공급자명
        </Text>
      </Flex>

      {/* 리스트 아이템 */}
      <Flex
        styles={{ direction: 'column', gap: '1.2rem', marginTop: '1.2rem', width: '100%' }}
        css={{ minHeight: '59.6rem', flex: 1 }}>
        {displayedItems.map((item) => (
          <ConfirmItem
            key={item.id}
            date={item.date}
            supplier={item.supplier}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </Flex>

      <Pagination
        totalItems={dummyData.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Flex>
  );
};

export default ConfirmPage;
