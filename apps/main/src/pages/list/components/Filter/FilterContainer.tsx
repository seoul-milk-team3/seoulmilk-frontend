import { IcSearchInput, IcReset } from '@seoulmilk/icon';
import { SelectDropdown } from '@seoulmilk/ui';
import { Flex } from '@seoulmilk/ui';
import { Text } from '@seoulmilk/ui';
import { useState, useEffect } from 'react';
import {
  inputStyle,
  inputContainerStyle,
  iconStyle,
  textColorStyle,
  resetBtnStyle,
  searchBtnStyle,
} from './FilterContainer.style';

type FilterState = {
  startDate: string;
  endDate: string;
  region: string;
  storeName: string;
};

const initialFilters: FilterState = {
  startDate: '날짜',
  endDate: '날짜',
  region: '지역',
  storeName: '',
};

const FilterContainer = ({ onFilter }: { onFilter: (filters: FilterState) => void }) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [searchTerm, setSearchTerm] = useState<string>(''); // 실시간 검색 입력 상태

  // 필터 변경 핸들러
  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // 디바운싱 적용 (검색어 변경 후 300ms 후 실행)
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleChange('storeName', searchTerm);
      onFilter({ ...filters, storeName: searchTerm });
    }, 300); // 300ms 디바운스 적용

    return () => clearTimeout(delaySearch); // 이전 타이머 제거
  }, [searchTerm]); // 사용자가 입력할 때마다 실행

  // 초기화 버튼 클릭 시
  const handleReset = () => {
    setFilters(initialFilters);
    setSearchTerm('');
    onFilter(initialFilters);
  };

  // 검색 버튼 클릭 시 (날짜, 지역 필터)
  const handleSearch = () => {
    onFilter(filters);
  };

  return (
    <Flex styles={{ justify: 'space-between', width: '100%' }}>
      <Flex styles={{ align: 'center', gap: '1.2rem' }}>
        <div css={inputContainerStyle}>
          <IcSearchInput css={iconStyle} />
          <input
            type="text"
            placeholder="대리점명을 검색해주세요"
            value={searchTerm}
            css={inputStyle}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <SelectDropdown
          type="date"
          value={filters.startDate}
          onSelect={(val: string) => handleChange('startDate', val)}
        />
        <Text tag="md1-text-semibold" css={textColorStyle}>
          ~
        </Text>
        <SelectDropdown type="date" value={filters.endDate} onSelect={(val: string) => handleChange('endDate', val)} />
        <SelectDropdown type="region" value={filters.region} onSelect={(val: string) => handleChange('region', val)} />
      </Flex>
      <Flex styles={{ align: 'center', gap: '1.2rem' }}>
        <Flex
          tag="button"
          onClick={handleReset}
          styles={{ gap: '1rem', align: 'center', justify: 'center' }}
          css={resetBtnStyle}>
          <IcReset width={24} height={24} />
          초기화
        </Flex>
        <Flex tag="button" styles={{ align: 'center', justify: 'center' }} onClick={handleSearch} css={searchBtnStyle}>
          검색
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FilterContainer;
