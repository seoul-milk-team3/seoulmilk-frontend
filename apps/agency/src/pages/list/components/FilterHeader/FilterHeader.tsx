import { TaxInvoiceFilters } from '@seoulmilk/api/src/agencyList/types';
import { SelectDropdown } from '@seoulmilk/ui';
import { Flex, Text } from '@seoulmilk/ui';
import { useState } from 'react';
import StatusFilter from './StatusFilter';

interface FilterHeaderProps {
  onFilterChange: (filters: Partial<TaxInvoiceFilters>) => void;
}

const FilterHeader = ({ onFilterChange }: FilterHeaderProps) => {
  const [selectedStartDate, setSelectedStartDate] = useState<string>('');
  const [selectedEndDate, setSelectedEndDate] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<'' | 'PAID_YET' | 'PAID' | 'ABNORMAL'>('');

  const handleStatusClick = (status: '' | 'PAID_YET' | 'PAID' | 'ABNORMAL') => {
    const newStatus = selectedStatus === status ? '' : status;
    setSelectedStatus(newStatus);
    onFilterChange({ payStatus: newStatus });
  };

  const handleStartDateSelect = (date: string) => {
    setSelectedStartDate(date);
    onFilterChange({ startDate: date });
  };

  const handleEndDateSelect = (date: string) => {
    setSelectedEndDate(date);
    onFilterChange({ endDate: date });
  };

  return (
    <Flex styles={{ justify: 'space-between', align: 'center', width: '100%' }}>
      <Flex styles={{ align: 'center', gap: '1.2rem' }}>
        <SelectDropdown
          type="date"
          value={selectedStartDate || '날짜'} // ✅ 기본값 유지
          onSelect={handleStartDateSelect}
        />
        <Text tag="md1-text-semibold">~</Text>
        <SelectDropdown
          type="date"
          value={selectedEndDate || '날짜'} // ✅ 기본값 유지
          onSelect={handleEndDateSelect}
        />
      </Flex>
      <StatusFilter selectedStatus={selectedStatus} onSelect={handleStatusClick} />
    </Flex>
  );
};

export default FilterHeader;
