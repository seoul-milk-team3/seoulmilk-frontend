import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { useDropzone } from "react-dropzone";
import {
  Container,
  UploadBox,
  FileList,
  FileItem,
  FilePreview,
  RemoveButton,
  UploadButton,
} from "./MobileUploadSection.style";
import { Button, Flex, Text } from "@seoulmilk/ui";
import { FileUploadIcon, Camera, Image, DeleteX} from "@seoulmilk/icon";
import { colors } from "@seoulmilk/styles";
import Modal from "./Modal/Modal";

const MobileSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const webcamRef = useRef<Webcam>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: { "image/png": [], "image/jpeg": [], "image/jpg": [], "application/pdf": [] },
    maxSize: 1024 * 1024, // 1MB 제한
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      setIsModalOpen(false);
    },
  });

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        fetch(imageSrc)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], `captured-image-${Date.now()}.png`, { type: "image/png" });
            setFiles((prevFiles) => [...prevFiles, file]);
          });
      }
      setIsCameraOpen(false);
    }
  }, []);

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Text tag="md1-text-bold" css={{ textAlign: "left", marginBottom: "1rem", width: "100%" }}>
        세금계산서를 업로드해주세요
      </Text>

      {/* UploadBox 내부에서 리스트 표시 */}
      <UploadBox onClick={() => setIsModalOpen(true)}>
        <input {...getInputProps()} ref={fileInputRef} style={{ display: "none" }} />

        {/* 파일 리스트 표시 */}
        {files.length > 0 ? (
          <FileList>
            {files.map((file, index) => (
              <FileItem key={index}>
                {file.type.startsWith("image/") ? (
                  <FilePreview src={URL.createObjectURL(file)} alt={file.name} />
                ) : (
                  <DeleteX width="48px" height="48px" />
                )}
                <div style={{ flex: 1 }}>
                  <Text>{file.name}</Text>
                  <Text css={{ color: colors.grayscale_40 }}>{(file.size / 1024).toFixed(1)}kb</Text>
                </div>
                <RemoveButton onClick={() => removeFile(index)}>
                  <DeleteX width="16px" height="16px" />
                </RemoveButton>
              </FileItem>
            ))}
          </FileList>
        ) : (
          // 파일이 없을 때만 업로드 안내 표시
          <>
            <Text tag="md1-text-bold" css={{ color: colors.grayscale_90 }}>
              파일 업로드
            </Text>
            <FileUploadIcon width="48px" height="48px" />
            <UploadButton>파일 선택</UploadButton>
          </>
        )}
      </UploadBox>

      <Text tag="xs-text-medium" css={{ textAlign: "left", marginTop: "1rem", width: "100%", color: colors.grayscale_40 }}>
        지원형식 : png, jpeg, jpg, pdf (최대 : 1mb)
      </Text>

      {/* 파일 업로드 & 카메라 선택 모달 */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Flex styles={{ direction: "column", align: "center", width: "100%" }}>
          <button
            style={{ display: "flex", alignItems: "center", padding: "12px", cursor: "pointer", width: "100%" }}
            onClick={() => setIsCameraOpen(true)}
          >
            <Camera style={{ width: "24px", height: "24px", marginRight: "0.8rem" }} />
            카메라로 촬영하기
          </button>
          <button
            style={{ display: "flex", alignItems: "center", padding: "12px", cursor: "pointer", width: "100%" }}
            onClick={() => {
              setIsModalOpen(false);
              fileInputRef.current?.click();
            }}
          >
            <Image style={{ width: "24px", height: "24px", marginRight: "0.8rem" }} />
            이미지 업로드
          </button>
        </Flex>
      </Modal>

      {/* 카메라 촬영 모달 */}
      <Modal isOpen={isCameraOpen} onClose={() => setIsCameraOpen(false)}>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/png" width={320} height={240} />
        <button style={{ marginTop: "10px", padding: "10px", cursor: "pointer" }} onClick={capture}>
          촬영하기
        </button>
      </Modal>
    </Container>
  );
};

export default MobileSection;
