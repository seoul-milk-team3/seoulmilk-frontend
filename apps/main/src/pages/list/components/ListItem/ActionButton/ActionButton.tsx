import { IcDetailArrow, IcErrorArrow, IcErrorDot } from '@seoulmilk/icon';
import { Text, Flex } from '@seoulmilk/ui';
import { useNavigate } from 'react-router-dom';
import { buttonStyle } from './ActionButton.style';

const ActionButton = ({ status, id }: { status: '정상' | '비정상' | '미입금'; id: string; details?: object }) => {
  const navigate = useNavigate();
  const isError = status === '비정상';

  const handleClick = () => {
    if (status === '정상') {
      navigate(`/list/${id}/detail`);
    } else {
      navigate(`/list/${id}/error`);
    }
  };

  return (
    <button css={buttonStyle(isError)} onClick={handleClick}>
      {isError ? (
        <Flex styles={{ align: 'center', gap: '0.2rem' }}>
          <IcErrorDot width={6} height={6} />
          <Text tag="md2-text-medium">오류 확인</Text>
          <IcErrorArrow width={20} height={20} />
        </Flex>
      ) : (
        <Flex styles={{ align: 'center', gap: '0.2rem' }}>
          <Text tag="md2-text-medium">상세보기</Text>
          <IcDetailArrow width={20} height={20} />
        </Flex>
      )}
    </button>
  );
};

export default ActionButton;
