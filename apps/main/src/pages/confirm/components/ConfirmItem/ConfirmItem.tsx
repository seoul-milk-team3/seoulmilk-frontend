import { Flex, Text, CheckBox } from '@seoulmilk/ui';
import { listItemStyle } from './ConfirmItem.style';

interface ConfirmItemProps {
  id: number;
  date: string;
  supplier: string;
  isChecked: boolean;
  onCheck: (id: number) => void;
}

const ConfirmItem = ({ id, date, supplier, isChecked, onCheck }: ConfirmItemProps) => {
  return (
    <Flex css={listItemStyle}>
      <CheckBox isChecked={isChecked} onChange={() => onCheck(id)} />
      <Text tag="md2-text-medium" css={{ width: '15.6rem', marginLeft: '1.2rem' }}>
        {date}
      </Text>
      <Text tag="md2-text-medium">{supplier}</Text>
    </Flex>
  );
};

export default ConfirmItem;
