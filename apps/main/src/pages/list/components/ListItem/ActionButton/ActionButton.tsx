import { IcDetailArrow, IcErrorArrow, IcErrorDot } from '@seoulmilk/icon';
import { Text, Flex } from '@seoulmilk/ui';
import { useNavigate } from 'react-router-dom';
import { buttonStyle } from './ActionButton.style';

const ActionButton = ({ id }: { id: number; details?: object }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/list/${id}/detail`);
  };

  return (
    <button css={buttonStyle} onClick={handleClick}>
      <Flex styles={{ align: 'center', gap: '0.2rem' }}>
        <Text tag="md2-text-medium">상세보기</Text>
        <IcDetailArrow width={20} height={20} />
      </Flex>
    </button>
  );
};

export default ActionButton;
