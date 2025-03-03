import { IcDetailArrow, IcErrorArrow, IcErrorDot } from '@seoulmilk/icon';
import { Text, Flex } from '@seoulmilk/ui';
import { buttonStyle } from './ActionButton.style';

const ActionButton = ({ status }: { status: '정상' | '비정상' | '미입금' }) => {
  const isError = status === '비정상';

  return (
    <button css={buttonStyle(isError)}>
      {isError ? (
        <Flex styles={{ align: 'center', gap: '0.2rem', width: '13.2rem', height: '4.4rem', justify: 'center' }}>
          <IcErrorDot width={6} height={6} css={{ marginRight: '0.4rem' }} />
          <Text tag="md2-text-medium">오류 확인</Text>
          <IcErrorArrow width={20} height={20} />
        </Flex>
      ) : (
        <Flex styles={{ align: 'center', gap: '0.2rem', width: '13.2rem', height: '4.4rem', justify: 'center' }}>
          <Text tag="md2-text-medium">상세보기</Text>
          <IcDetailArrow width={20} height={20} />
        </Flex>
      )}
    </button>
  );
};

export default ActionButton;
