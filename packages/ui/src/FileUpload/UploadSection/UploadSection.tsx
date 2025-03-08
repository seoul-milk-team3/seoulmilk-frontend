import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  uploadWrapperStyle,
  uploadSectionContainerStyle,
  fileListStyle,
  fileItemStyle,
  filePreviewStyle,
  fileNameStyle,
} from "./UploadSection.style";
import Flex from "@/Flex/Flex";
import Button from "@/Button/Button";
import Text from "@/Text/Text";
import UploadTopMessage from "../UploadTopMessage/UploadTopMessage";
import { FileUploadIcon, DeleteX } from "@seoulmilk/icon";
import { colors } from "@seoulmilk/styles";
import FileCheck from "../../FileCheck/FileCheck";
import ErrorBox from "@/ErrorCheck/ErrorBox/ErrorBox";
import { useOcrTaxInvoices, useSaveTaxInvoices } from "@seoulmilk/api/src/fileupload/taxInvoice";

const MAX_FILES = 10;

interface UploadSectionProps {
  onUploadStart?: () => void;
  onUploadSuccess?: () => void;
  onCheckValidity?: () => void;
}

const UploadSection = ({ onUploadStart, onUploadSuccess, onCheckValidity }: UploadSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isErrorBoxVisible, setIsErrorBoxVisible] = useState(false);
  const [ocrResults, setOcrResults] = useState<any[]>([]); // Store OCR extracted data
  const { mutate: analyzeOcr, isPending } = useOcrTaxInvoices();
  const { mutate: saveTaxInvoices } = useSaveTaxInvoices();

  const getTopMessage = () => ({
    title: "세금계산서를 업로드해주세요",
    subTitle: isChecking ? "업로드한 세금계산서의 내용을 확인해주세요." : "진위여부를 확인 할 세금계산서를 업로드해주세요",
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setUploadedFiles((prev) => {
        const newFiles = [...prev, ...acceptedFiles];
        return newFiles.slice(0, MAX_FILES);
      });
      onUploadStart?.();
    },
    [onUploadStart]
  );

  const { getInputProps } = useDropzone({
    onDrop,
    noClick: true,
    disabled: uploadedFiles.length >= MAX_FILES,
  });

  const handleButtonClick = () => {
    if (uploadedFiles.length < MAX_FILES) fileInputRef.current?.click();
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const checkFiles = async () => {
    if (uploadedFiles.length === 0) return;
    setIsChecking(true);
    onCheckValidity?.();
  
    console.log("🔍 OCR 분석 시작! 업로드된 파일 목록:", uploadedFiles); // ✅ 파일 목록 출력
  
    analyzeOcr(uploadedFiles, {
      onSuccess: (data) => {
        console.log("✅ OCR 분석 결과:", data); // ✅ 서버에서 받은 결과 출력
        setOcrResults(data.requests);
        setIsChecking(false);
        setIsErrorBoxVisible(true);
      },
      onError: (error) => {
        console.error("❌ OCR 분석 실패:", error); // ✅ 에러 출력
        setIsChecking(false);
        setIsErrorBoxVisible(true);
      },
    });
  };
  

  const handleConfirm = () => {
    saveTaxInvoices(
      { requestList: ocrResults, files: uploadedFiles },
      {
        onSuccess: () => {
          setUploadedFiles([]);
          setIsErrorBoxVisible(false);
          onUploadSuccess?.();
        },
      }
    );
  };


  const topMessage = getTopMessage();

  return (
    <Flex css={uploadWrapperStyle} styles={{ align: "center", position: "relative" }}>
      {isChecking ? (
        <FileCheck onComplete={() => setIsChecking(false)} checkFiles={checkFiles} />
      ) : isErrorBoxVisible ? (
        <Flex
          css={uploadSectionContainerStyle}
          styles={{
            direction: "column",
            justify: "flex-start",
            align: "center",
            position: "relative",
            height: "100%",
          }}
        >
          
          <ErrorBox images={uploadedFiles.map((file) => URL.createObjectURL(file))} ocrResults={ocrResults} onConfirm={handleConfirm} />
        </Flex>
      ) : (
        <Flex
          css={uploadSectionContainerStyle}
          styles={{
            direction: "column",
            justify: "flex-start",
            align: "center",
            position: "relative",
            height: "100%",
          }}
        >
          <Flex css={{ position: "absolute", top: "-8rem", left: "0rem" }}>
            
              <UploadTopMessage title={topMessage.title} subTitle={topMessage.subTitle} />
            
          </Flex>
          <input {...getInputProps()} ref={fileInputRef} style={{ display: "none" }} />

          {uploadedFiles.length === 0 ? (
            <Flex styles={{ direction: "column", align: "center", gap: "9rem" }}>
              <Flex styles={{ direction: "column", align: "center" }}>
                <Text tag="xxl-title-bold">파일 업로드</Text>
                <Text tag="md1-text-medium" css={{ color: colors.grayscale_50, marginTop: "0.8rem" }}>
                  여기에 파일을 끌어다 놓을 수 있습니다.
                </Text>
              </Flex>

              <FileUploadIcon css={{ width: "9.8rem", height: "9.8rem" }} />

              <Button
                variant="secondary"
                padding="1.8rem 6.4rem"
                tag="lg-subtitle-semibold"
                onClick={handleButtonClick}
                disabled={uploadedFiles.length >= MAX_FILES}
              >
                파일 선택
              </Button>
            </Flex>
          ) : (
            <>
              <Flex css={fileListStyle}>
                {uploadedFiles.map((file, index) => (
                  <Flex key={index} css={fileItemStyle}>
                    {file.type.startsWith("image/") ? (
                      <img src={URL.createObjectURL(file)} alt={file.name} css={filePreviewStyle} />
                    ) : (
                      <Flex css={filePreviewStyle} styles={{ align: "center", justify: "center" }}>
                        📄
                      </Flex>
                    )}

                    <Flex styles={{ direction: "column", justify: "center", gap: "0.8rem" }}>
                      <Text tag="sm-text-medium" css={fileNameStyle}>
                        {file.name}
                      </Text>
                      <Text tag="sm-text-medium" css={{ color: colors.grayscale_40 }}>
                        {(file.size / 1024).toFixed(1)} KB
                      </Text>
                    </Flex>

                    <DeleteX
                      css={{
                        position: "absolute",
                        top: "0.8rem",
                        right: "0.8rem",
                        width: "1.8rem",
                        height: "1.8rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleRemoveFile(index)}
                    />
                  </Flex>
                ))}
              </Flex>

              <Flex styles={{ position: "absolute", bottom: "0", left: "0", width: "100%", padding: "2rem 0" }}>
                <Flex styles={{ direction: "row", justify: "center", gap: "2rem", width: "100%" }}>
                  <Button variant="primary" onClick={handleButtonClick}>
                    파일 추가
                  </Button>
                  <Button variant="secondary" onClick={checkFiles} disabled={uploadedFiles.length === 0 || isPending}>
                {isPending ? "확인 중..." : "진위여부 확인"}
              </Button>
                </Flex>
              </Flex>
            </>
)} {!isErrorBoxVisible && (
            <Text
              tag="md1-text-medium"
              css={{
                color: colors.grayscale_40,
                marginTop: "1rem",
                position: "absolute",
                bottom: "-2.5rem", // 컨테이너 하단보다 아래로 배치
                left: "0",
              }}
            >
              지원형식 : png, jpeg, jpg, pdf (최대 : 1 mb) | * 파일 첨부는 최대 10개까지 가능해요.
            </Text>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default UploadSection;
