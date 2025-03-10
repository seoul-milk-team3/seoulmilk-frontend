import { theme } from '@seoulmilk/styles';
import { Spinner } from '@seoulmilk/ui';
import { Flex, Text } from '@seoulmilk/ui';
import { borderStyle } from './ConfirmLoading.style';

const ConfirmLoading = () => {
  return (
    <Flex styles={{ align: 'center', direction: 'column', justify: 'center' }} css={borderStyle}>
      <Text tag="xxl-title-bold">홈택스를 통해</Text>
      <Text tag="xxl-title-bold" css={{ marginTop: '1rem' }}>
        진위여부를 검증중이에요
      </Text>
      <Text tag="md1-text-medium" css={{ color: theme.colors.grayscale_50, marginTop: '2rem', marginBottom: '4.5rem' }}>
        잠시만 기다려주세요
      </Text>
      <Spinner size={92} />
    </Flex>
  );
};

export default ConfirmLoading;
