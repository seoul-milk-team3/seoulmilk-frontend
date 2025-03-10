import { IcArrowRed } from '@seoulmilk/icon';
import { Flex, Text, Button } from '@seoulmilk/ui';
import { listItemStyle, labelBackgroundStyle, labelTextStyle, errorButtonStyle } from './ErrorItem.style';

interface ErrorItemProps {
  id: number;
  date: string;
  supplier: string;
  status: string;
  onCheckError: () => void;
}

const ErrorItem = ({ id, date, supplier, status, onCheckError }: ErrorItemProps) => {
  return (
    <Flex css={listItemStyle}>
      <Flex styles={{ align: 'center' }}>
        <Text tag="md2-text-medium" css={{ width: '15.6rem', marginLeft: '1.2rem' }}>
          {date}
        </Text>
        <Text tag="md2-text-medium" css={{ width: '17rem', marginLeft: '1.2rem' }}>
          {supplier}
        </Text>
        <Flex styles={{ align: 'center', justify: 'center' }} css={labelBackgroundStyle}>
          <Text tag="md2-text-medium" css={labelTextStyle}>
            {status}
          </Text>
        </Flex>
      </Flex>
      <Flex tag="button" onClick={onCheckError} css={errorButtonStyle}>
        <Text tag="md2-text-medium">오류확인</Text>
        <IcArrowRed width={20} height={20} />
      </Flex>
    </Flex>
  );
};

export default ErrorItem;
