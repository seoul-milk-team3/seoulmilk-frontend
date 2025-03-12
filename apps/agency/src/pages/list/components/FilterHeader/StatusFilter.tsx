import { Text, Flex } from '@seoulmilk/ui';
import { statusFilterWrapper, statusButton } from './StatusFilter.style';

interface StatusFilterProps {
  selectedStatus: '' | 'PAID_YET' | 'PAID' | 'ABNORMAL';
  onSelect: (status: '' | 'PAID_YET' | 'PAID' | 'ABNORMAL') => void; // ✅ 타입 수정
}

const STATUS_LABELS: Record<'PAID_YET' | 'PAID' | 'ABNORMAL', string> = {
  PAID_YET: '입금 전',
  PAID: '입금 완료',
  ABNORMAL: '비정상',
};

const StatusFilter = ({ selectedStatus, onSelect }: StatusFilterProps) => {
  return (
    <div css={statusFilterWrapper}>
      {Object.entries(STATUS_LABELS).map(([key, label]) => (
        <Flex
          tag="button"
          key={key}
          css={statusButton(selectedStatus === key)}
          onClick={() => onSelect(key as 'PAID_YET' | 'PAID' | 'ABNORMAL')} // ✅ 타입 캐스팅
        >
          <Text tag="md2-text-medium">{label}</Text>
        </Flex>
      ))}
    </div>
  );
};

export default StatusFilter;
