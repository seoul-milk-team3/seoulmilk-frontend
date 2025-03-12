import { Text, Flex } from '@seoulmilk/ui';
import { statusChipStyles } from './StatusChip.style';

interface StatusChipProps {
  status: 'PAID_YET' | 'PAID' | 'ABNORMAL';
}

const statusText = {
  PAID_YET: '입금전',
  PAID: '입금완료',
  ABNORMAL: '비정상',
};

const StatusChip = ({ status }: StatusChipProps) => {
  return (
    <Flex tag="button" css={statusChipStyles(status)}>
      <Text tag="md2-text-medium">{statusText[status]}</Text>
    </Flex>
  );
};

export default StatusChip;
