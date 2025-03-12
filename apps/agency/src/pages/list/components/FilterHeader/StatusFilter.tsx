import { Text, Flex } from '@seoulmilk/ui';
import { statusFilterWrapper, statusButton } from './StatusFilter.style';

interface StatusFilterProps {
  selectedStatus: string;
  onSelect: (status: string) => void;
}

const STATUS_LABELS: Record<string, string> = {
  PAID_YET: '입금 전',
  PAID: '입금 완료',
  ABNORMAL: '비정상',
};

const StatusFilter = ({ selectedStatus, onSelect }: StatusFilterProps) => {
  return (
    <div css={statusFilterWrapper}>
      {Object.entries(STATUS_LABELS).map(([key, label]) => (
        <Flex tag="button" key={key} css={statusButton(selectedStatus === key)} onClick={() => onSelect(key)}>
          <Text tag="md2-text-medium">{label}</Text>
        </Flex>
      ))}
    </div>
  );
};

export default StatusFilter;
