import { dataList } from '@main/constants/listData';
import { StoreItem } from '@main/types';
import { getChosung } from '@main/utils';
import { Flex, Text } from '@seoulmilk/ui';
import ListItem from '../ListItem/ListItem';
import { textStyle, text1Style, text2Style } from './ListContainer.style';

interface ListContainerProps {
  activeTab: string;
  filters: {
    startDate: string;
    endDate: string;
    region: string;
    storeName: string;
  };
}

const ListContainer = ({ activeTab, filters }: ListContainerProps) => {
  const filteredData = dataList.filter((item: StoreItem) => {
    const dateMatch =
      filters.startDate === '날짜' ||
      filters.endDate === '날짜' ||
      (item.date >= filters.startDate && item.date <= filters.endDate);
    const regionMatch = filters.region === '지역' || item.region === filters.region;

    const storeNameChosung = getChosung(item.store); // 데이터의 초성 변환
    const searchChosung = getChosung(filters.storeName.trim().toLowerCase()); // 검색어 초성 변환

    const storeMatch =
      filters.storeName.trim() === '' ||
      item.store.toLowerCase().includes(filters.storeName.trim().toLowerCase()) || // 기존 검색 (포함 여부)
      storeNameChosung.startsWith(searchChosung); // ✅ 초성 검색 (순서 유지)

    return dateMatch && regionMatch && storeMatch;
  });

  const data = activeTab === '오류 내역' ? filteredData.filter((item) => item.status === '비정상') : filteredData;

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
      {data.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </Flex>
  );
};

export default ListContainer;
