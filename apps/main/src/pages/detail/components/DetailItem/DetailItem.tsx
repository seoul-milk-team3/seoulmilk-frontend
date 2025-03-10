import { Flex, Text } from '@seoulmilk/ui';
import { titleStyle, textStyle } from './DetailItem.style';

interface DetailItemProps {
  label: string;
  value: string | number;
}

const DetailItem = ({ label, value }: DetailItemProps) => {
  return (
    <Flex styles={{ direction: 'column', gap: '0.8rem' }}>
      <Text tag="md2-text-medium" css={titleStyle}>
        {label}
      </Text>
      <Flex styles={{ align: 'center' }} css={textStyle}>
        <Text tag="md2-text-medium">{value}</Text>
      </Flex>
    </Flex>
  );
};

export default DetailItem;
