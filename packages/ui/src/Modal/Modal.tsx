/** @jsxImportSource @emotion/react */
import Button from '@/Button/Button';
import Flex from '@/Flex/Flex';
import Text from '@/Text/Text';
import {
  modalOverlayStyle,
  modalStyle,
  buttonContainerStyle,
  titleStyle,
  messageStyle,
  buttonStyle,
} from './Modal.style';

interface ModalProps {
  title: string;
  message: string;
  leftButtonText: string;
  rightButtonText: string;
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
}

const Modal = ({
  title,
  message,
  leftButtonText,
  rightButtonText,
  onLeftButtonClick,
  onRightButtonClick,
}: ModalProps) => {
  return (
    <Flex styles={{ align: 'center', justify: 'center' }} css={modalOverlayStyle}>
      <Flex
        tag="div"
        styles={{ direction: 'column', align: 'center', gap: '1.6rem', padding: '2.4rem' }}
        css={modalStyle}>
        <Text tag="lg-subtitle-semibold" css={titleStyle}>
          {title}
        </Text>
        <Text tag="md2-text-regular" css={messageStyle}>
          {message}
        </Text>

        <Flex styles={{ justify: 'center', gap: '1.2rem' }} css={buttonContainerStyle}>
          <Button variant="primary" css={buttonStyle} tag="md2-text-medium" onClick={onLeftButtonClick}>
            {leftButtonText}
          </Button>
          <Button variant="secondary" css={buttonStyle} tag="md2-text-medium" onClick={onRightButtonClick}>
            {rightButtonText}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Modal;
