import { useState, useEffect, useRef } from "react";
import { IcImageZoom } from "@seoulmilk/icon";
import ImageModal from "../ImageModal/ImageModal";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.mjs`;

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
  const [pdfPreview, setPdfPreview] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderPdfPreview = async () => {
      if (!imageUrl.endsWith(".pdf")) return;

      try {
        const loadingTask = pdfjsLib.getDocument(imageUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = { canvasContext: context, viewport };
        await page.render(renderContext).promise;

        setPdfPreview(canvas.toDataURL("image/png"));
      } catch (error) {
        console.error("❌ PDF 미리보기 렌더링 실패:", error);
      }
    };

    renderPdfPreview();
  }, [imageUrl]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {imageUrl.endsWith(".pdf") ? (
        <canvas
          ref={canvasRef}
          css={{
            width,
            height,
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      ) : (
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
      )}

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
        imageUrl={pdfPreview || imageUrl}
        altText={altText}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ImagePreview;
