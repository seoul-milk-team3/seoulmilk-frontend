import { useState } from "react";
import { IcImageZoom } from "@seoulmilk/icon";
import ImageModal from "../ImageModal/ImageModal";

interface ImagePreviewProps {
  imageUrl: string;
  altText?: string;
  width?: string;
  height?: string;
}

const ImagePreview = ({
  imageUrl,
  altText = "이미지",
  width = "62rem",
  height = "38.3rem",
}: ImagePreviewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={imageUrl}
        alt={altText}
        css={{
          width,
          height,
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
      <button
        onClick={() => setIsModalOpen(true)}
        css={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IcImageZoom width={50} height={50} />
      </button>

      <ImageModal
        imageUrl={imageUrl}
        altText={altText}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ImagePreview;
