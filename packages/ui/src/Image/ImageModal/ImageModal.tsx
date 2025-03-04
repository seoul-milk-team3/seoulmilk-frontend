import { createPortal } from "react-dom";
import { IcImageClose } from "@seoulmilk/icon";

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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 4,
        padding: "10rem 5rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "32px",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <IcImageClose width={40} height={40} fill="white" />
        </button>
        <img
          src={imageUrl}
          alt={altText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
