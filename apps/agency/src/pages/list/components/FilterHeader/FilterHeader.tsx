import { SelectDropdown } from '@seoulmilk/ui';
import { Flex, Text } from '@seoulmilk/ui';
import { useState, useEffect } from 'react';
import { textColorStyle } from './FilterHeader.style';
import StatusFilter from './StatusFilter';

const FilterHeader = ({ onFilterChange }: { onFilterChange: (filter: string) => void }) => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status);
    onFilterChange(status);
  };

  return (
    <Flex styles={{ justify: 'space-between', align: 'center', width: '100%' }}>
      <Flex styles={{ align: 'center', gap: '1.2rem' }}>
        <SelectDropdown type="date" onSelect={() => {}} />
        <Text tag="md1-text-semibold" css={textColorStyle}>
          ~
        </Text>
        <SelectDropdown type="date" onSelect={() => {}} />
      </Flex>

      <StatusFilter selectedStatus={selectedStatus} onSelect={handleStatusClick} />
    </Flex>
  );
};

export default FilterHeader;
