import { theme } from '@seoulmilk/styles';
import { Spinner } from '@seoulmilk/ui';
import { Flex, Text } from '@seoulmilk/ui';

const ConfirmLoading = () => {
  return (
    <Flex styles={{ align: 'center', direction: 'column' }}>
      <Text tag="xxl-title-bold">진위여부를 분석중이에요</Text>
      <Text tag="md1-text-medium" css={{ color: theme.colors.grayscale_50, marginTop: '1rem', marginBottom: '4.1rem' }}>
        잠시만 기다려주세요
      </Text>
      <Spinner size={92} />
    </Flex>
  );
};

export default ConfirmLoading;
