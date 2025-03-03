import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  uploadSectionContainerStyle,
  uploadSectionContainerWithFileStyle,
  fileInfoStyle,
  buttonContainerStyle,
  modalOverlayStyle,
  modalContentStyle,
  modalButtonStyle,
  previewImageStyle,
  buttonStyle
} from "./UploadSection.style";
import { Button } from "@seoulmilk/ui";
import { Flex } from "@seoulmilk/ui";
import { Text } from "@seoulmilk/ui";
import { FileUploadIcon } from "@seoulmilk/icon";
import { CameraGray, Image } from "@seoulmilk/icon";
import { colors } from "@seoulmilk/styles";
import UploadTopMessage from "../UploadTopMessage/UploadTopMessage";
import CheckDone from "../CheckDone/CheckDone"; // ✅ CheckDone 컴포넌트 import

const UploadSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckDoneVisible, setIsCheckDoneVisible] = useState(false); // ✅ 진위여부 분석 상태 추가

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    accept: { "image/png": [], "image/jpeg": [], "application/pdf": [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        setFilePreview(URL.createObjectURL(file));
        setIsModalOpen(false);
      }
    },
  });

  const removeFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    setIsCheckDoneVisible(false); // ✅ CheckDone 숨기기 (업로드 UI로 복구)
  };

  return (
    <Flex styles={{ direction: "column", width: "100%" }}>
      <UploadTopMessage title="세금계산서를 업로드해주세요" />

      {/* ✅ CheckDone 표시 여부에 따라 UI 변경 */}
      {isCheckDoneVisible ? (
        <CheckDone onClose={() => setIsCheckDoneVisible(false)} />
      ) : (
        <Flex
          css={uploadSectionContainerStyle}
          styles={{
            direction: "column",
            justify: "center",
            align: "center",
            position: "relative",
            height: "100%",
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} ref={fileInputRef} style={{ display: "none" }} />

          {selectedFile ? (
            <Flex
              css={uploadSectionContainerWithFileStyle}
              styles={{
                direction: "column",
                justify: "center",
                align: "center",
                position: "relative",
                height: "100%",
              }}
            >
              <div css={fileInfoStyle}>
                {filePreview && <img src={filePreview} alt="미리보기" css={previewImageStyle} />}
                <div>
                  <Flex
                    styles={{
                      direction: "column",
                      justify: "flex-start",
                      align: "flex-start",
                      gap: "0.8rem",
                      paddingTop: "2rem",
                    }}
                  >
                    <Text tag="lg-subtitle-bold" css={{ color: colors.grayscale_90 }}>
                      {selectedFile.name}
                    </Text>
                    <Text tag="lg-subtitle-medium" css={{ color: colors.grayscale_40 }}>
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </Text>
                  </Flex>
                </div>
              </div>

              {/* ✅ 버튼 영역 */}
              <Flex css={buttonContainerStyle}>
                <Button css={buttonStyle} variant="primary" onClick={removeFile}>
                  새 파일
                </Button>
                <Button
                  css={buttonStyle}
                  variant="secondary"
                  onClick={() => setIsCheckDoneVisible(true)} // ✅ CheckDone로 변경
                >
                  진위여부 분석
                </Button>
              </Flex>
            </Flex>
          ) : (
            <Flex styles={{ direction: "column", align: "center", gap: "9rem", padding: "6rem" }}>
              <Flex styles={{ direction: "column", align: "center" }}>
                <Text tag="xxl-title-bold">파일 업로드</Text>
                <Text tag="md1-text-medium" css={{ color: colors.grayscale_50, marginTop: "0.8rem" }}>
                  여기에 파일을 끌어다 놓거나 클릭하여 업로드하세요.
                </Text>
              </Flex>

              <FileUploadIcon css={{ width: "9.8rem", height: "9.8rem" }} />

              <Button
                variant="secondary"
                padding="1.8rem 6.4rem"
                tag="lg-subtitle-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                파일 선택
              </Button>
            </Flex>
          )}
        </Flex>
      )}
      <Text
          tag="md1-text-medium"
          css={{ color: colors.grayscale_40, marginTop: "1rem" }}
        >
          지원형식 : png, jpeg, jpg, pdf (최대 : 1 mb)
        </Text>

      {/* ✅ 모달창 */}
      {isModalOpen && (
        <div css={modalOverlayStyle} onClick={() => setIsModalOpen(false)}>
          <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <Flex styles={{ direction: "column", align: "center", width: "100%" }}>
              <button css={modalButtonStyle} disabled>
                <CameraGray css={{ width: "24px", height: "24px", marginRight: "0.8rem" }} />
                카메라로 촬영하기
              </button>
              <button
                css={modalButtonStyle}
                onClick={() => {
                  setIsModalOpen(false);
                  fileInputRef.current?.click();
                }}
              >
                <Image css={{ width: "24px", height: "24px", marginRight: "0.8rem" }} />
                이미지 업로드
              </button>
            </Flex>
          </div>
        </div>
      )}
    </Flex>
  );
};

export default UploadSection;
