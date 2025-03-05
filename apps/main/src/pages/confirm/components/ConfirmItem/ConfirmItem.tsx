import { IcErrorArrow, IcErrorDot } from '@seoulmilk/icon';
import { Flex, Text } from '@seoulmilk/ui';
import { listItemStyle, confirmTextStyle } from './ConfirmItem.style';

interface ConfirmItemProps {
  date: string;
  supplier: string;
  onClick: () => void;
}

const ConfirmItem = ({ date, supplier, onClick }: ConfirmItemProps) => {
  return (
    <Flex css={listItemStyle} onClick={onClick}>
      <Flex styles={{ align: 'center' }}>
        <Text tag="md2-text-medium" css={{ width: '15.6rem' }}>
          {date}
        </Text>
        <Text tag="md2-text-medium">{supplier}</Text>
      </Flex>
      <Flex tag="button" styles={{ align: 'center', gap: '0.2rem' }}>
        <IcErrorDot width={6} height={6} />
        <Text tag="md2-text-medium" css={confirmTextStyle}>
          진위여부확인
        </Text>
        <IcErrorArrow width={20} height={20} />
      </Flex>
    </Flex>
  );
};

export default ConfirmItem;
