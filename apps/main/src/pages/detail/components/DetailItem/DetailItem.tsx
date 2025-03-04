import { Flex, Text } from '@seoulmilk/ui';
import { titleStyle, textStyle } from './DetailItem.style';

interface DetailItemProps {
  leftTitle: string;
  leftValue: string | number;
  rightTitle: string;
  rightValue: string | number;
}

const DetailItem = ({ leftTitle, leftValue, rightTitle, rightValue }: DetailItemProps) => {
  return (
    <Flex styles={{ justify: 'space-between', align: 'center', width: '100%', gap: '2.1rem' }}>
      <Flex styles={{ justify: 'space-between', align: 'center', width: '54.5rem' }}>
        <Text tag="md2-text-medium" css={titleStyle}>
          {leftTitle}
        </Text>
        <Flex css={textStyle} styles={{ align: 'center', paddingLeft: '1.9rem' }}>
          <Text tag="md2-text-medium">{typeof leftValue === 'number' ? leftValue.toLocaleString() : leftValue}</Text>
        </Flex>
      </Flex>
      <Flex styles={{ justify: 'space-between', align: 'center', width: '54.5rem' }}>
        <Text tag="md2-text-medium" css={titleStyle}>
          {rightTitle}
        </Text>
        <Flex css={textStyle} styles={{ align: 'center', paddingLeft: '1.9rem' }}>
          <Text tag="md2-text-medium">{typeof rightValue === 'number' ? rightValue.toLocaleString() : rightValue}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DetailItem;
