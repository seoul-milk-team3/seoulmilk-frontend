import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { useDropzone } from "react-dropzone";
import {
  Container,
  UploadBox,
  FileList,
  FileItem,
  RemoveButton,
  ConfirmButton,
  UploadButton,
  FilePreview,
  ActionButtons,
  FileUploadButton,
  CameraButton
} from "./MobileUploadSection.style";
import { Button, Flex, Text } from "@seoulmilk/ui";
import { FileUploadIcon, Camera, Image, DeleteX } from "@seoulmilk/icon";
import { colors } from "@seoulmilk/styles";
import Modal from "./Modal/Modal";
import MobileErrorBox from "../../ErrorCheck/MobileErrorBox/MobileErrorBox"

const MobileSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const webcamRef = useRef<Webcam>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]); // ⬅️ 업로드된 이미지 URL 저장

  // 파일 추가 핸들러 (10개 제한)
  const onDropHandler = (acceptedFiles: File[]) => {
    if (files.length + acceptedFiles.length > 10) {
      alert("최대 10개의 파일만 업로드할 수 있습니다.");
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    setIsModalOpen(false);
  };

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc && files.length < 10) {
        fetch(imageSrc)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], `captured-image-${Date.now()}.png`, { type: "image/png" });
            setFiles((prevFiles) => [...prevFiles, file]);
            setIsCameraOpen(false);
            setIsModalOpen(false); // 촬영 후 모든 모달 닫기
          });
      } else {
        alert("최대 10개의 파일만 업로드할 수 있습니다.");
        setIsCameraOpen(false);
        setIsModalOpen(false); // 파일 개수 초과 시에도 모든 모달 닫기
      }
    }
  }, [files]);
  
  
  

  const removeFile = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const toggleCamera = () => {
    setIsFrontCamera((prev) => !prev);
  };

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: { "image/png": [], "image/jpeg": [], "image/jpg": [], "application/pdf": [] },
    maxSize: 1024 * 1024, // 1MB 제한
    onDrop: onDropHandler,
  });

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("파일을 업로드해주세요.");
      return;
    }
  
    // 서버 없이 파일을 업로드한 것처럼 로컬에서 처리
    const uploadedUrls = files.map((file) => URL.createObjectURL(file));
  
    setUploadedImages(uploadedUrls); // 업로드된 파일을 미리보기용 URL로 저장
    setAnalysisResult("success"); // 분석이 완료된 것처럼 처리
  
  };

  // 분석 결과가 있으면 MobileCheckDone으로 이동
  if (analysisResult !== null) {
    return <MobileErrorBox images={uploadedImages} />;
  }
  return ( <> {/* 파일 업로드 & 카메라 선택 모달 */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Flex styles={{ direction: "column", align: "center", width: "100%" }}>
          <button style={{ display: "flex", alignItems: "center", padding: "12px", cursor: "pointer", width: "100%" }} onClick={() => setIsCameraOpen(true)}>
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
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          width='100%'
          height='100%'
          videoConstraints={{ facingMode: isFrontCamera ? "user" : "environment" }}
        />
        <Flex styles={{ gap: "1rem", marginTop: "1rem" }}>
          <CameraButton onClick={toggleCamera}>
            카메라 전환
          </CameraButton>
          <CameraButton onClick={capture}>촬영하기</CameraButton>
        </Flex>
      </Modal>
      
      <Container>
      {/* 파일 입력 필드 - 최상단에서 관리 */}
      <input 
        type="file"
        multiple 
        accept="image/png, image/jpeg, image/jpg, application/pdf"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => onDropHandler(Array.from(e.target.files || []))}
      />

      {/* UploadBox를 감싸는 div */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* 오른쪽 상단 텍스트 */}
        <Text
          tag="md1-text-bold"
          css={{
            position: "absolute",
            top: "0rem",
            left: "0",
            textAlign: "left",
          }}
        >
          세금계산서를 업로드해주세요
        </Text>
        <Text
          tag="xs-text-medium"
          css={{
            position: "absolute",
            top: "2rem",
            left: "0",
            textAlign: "left",
            color: "#6B7280",
          }}
        >
          진위여부를 확인할 세금계산서를 업로드해주세요
        </Text>

        {/* 파일 업로드 박스 */}
        <UploadBox {...getRootProps()} hasFiles={files.length > 0} css={{ marginTop: "4rem", position: "relative" }}>
          {files.length > 0 ? (
            <>
              <FileList>
                {files.map((file, index) => (
                  <FileItem key={index}>
                    {file.type.startsWith("image/") ? (
                      <FilePreview src={URL.createObjectURL(file)} alt={file.name} />
                    ) : (
                      <DeleteX width="48px" height="48px" />
                    )}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <Text tag="sm-text-medium">{file.name}</Text>
                      <Text tag="sm-text-medium" css={{ color: colors.grayscale_40 }}>
                        {(file.size / 1024).toFixed(1)}kb
                      </Text>
                    </div>
                    <RemoveButton onClick={(event) => removeFile(index, event)}>
                      <DeleteX width="16px" height="16px" />
                    </RemoveButton>
                  </FileItem>
                ))}
              </FileList>

              <ActionButtons>
                <Flex styles={{ gap: "2rem", width: "100%", justify: "center" }}>
                  <UploadButton onClick={() => setIsModalOpen(true)}>파일 추가</UploadButton>
                  <ConfirmButton onClick={handleUpload}>확인</ConfirmButton>
                </Flex>
              </ActionButtons>
            </>
          ) : (
            <Flex styles={{ direction: "column", align: "center", gap: "3rem", marginTop: "3rem", width: "100%" }}>
              <Text tag="md1-text-bold" css={{ color: colors.grayscale_90 }}>
                파일 업로드
              </Text>
              <FileUploadIcon width="72px" height="72px" />
              <FileUploadButton onClick={() => setIsModalOpen(true)}>
  파일 선택
</FileUploadButton>

            </Flex>
          )}
        </UploadBox>

        {/* 왼쪽 하단 텍스트 */}
        <Text
          tag="xs-text-medium"
          css={{
            position: "absolute",
            bottom: "-3rem",
            left: "0",
            width: "auto",
            color: colors.grayscale_40,
          }}
        >
          지원형식 : png, jpeg, jpg, pdf (최대 : 1 mb) <br />
          * 파일 첨부는 최대 10개까지 가능해요.
        </Text>
      </div>
    </Container></>
  )
        };

export default MobileSection;