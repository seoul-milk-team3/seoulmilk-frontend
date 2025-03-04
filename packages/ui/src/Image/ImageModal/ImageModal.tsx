import { createPortal } from "react-dom";
import { IcImageClose } from "@seoulmilk/icon";
import {
  modalOverlayStyle,
  modalContainerStyle,
  closeButtonStyle,
  imageStyle,
} from "./ImageModal.style";

interface ImageModalProps {
  imageUrl: string;
  altText?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({
  imageUrl,
  altText = "이미지",
  isOpen,
  onClose,
}: ImageModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div css={modalOverlayStyle} onClick={onClose}>
      <div css={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} css={closeButtonStyle}>
          <IcImageClose width={40} height={40} />
        </button>
        <img src={imageUrl} alt={altText} css={imageStyle} />
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
