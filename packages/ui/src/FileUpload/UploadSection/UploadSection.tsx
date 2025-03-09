import { useCallback, useRef, useState, useEffect } from "react";
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
import { FileUploadIcon, DeleteX, Loading } from "@seoulmilk/icon";
import { colors } from "@seoulmilk/styles";
import CheckDone from "@/CheckDone/CheckDone"; 
import { useTaxInvoiceOCRMutation } from "@seoulmilk/api";

const MAX_FILES = 10;

const UploadModal = ({ onClose }: { onClose: () => void }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        background: "white",
        width: "418px",
      height: "286px",
        padding: "2rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Loading css={{ margin:"20px", width: "9.2rem", height: "9.2rem", animation: "spin 1s linear infinite" }} />
      <Text tag="lg-subtitle-semibold" css={{marginTop:"1rem"}}>세금계산서를 업로드중이에요</Text>
      <Text tag="md2-text-regular" css={{ color: "#989BA2", marginTop: "0.8rem", paddingBottom:"5px" }}>
        잠시만 기다려주세요
      </Text>
      <Button variant="primary" padding="1.7rem 13.5rem"onClick={onClose} css={{ height: "5rem" , marginTop: "0.8rem",}}>업로드 취소</Button>
    </div>
  </div>
);


interface UploadSectionProps {
  onUploadStart?: () => void;
  onUploadSuccess?: (data: any) => void;
  onCheckValidity?: () => void;
}

const UploadSection = ({ onUploadStart, onUploadSuccess, onCheckValidity }: UploadSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [ocrResults, setOcrResults] = useState<any>(null); // OCR 분석된 데이터 저장
  const [isUploading, setIsUploading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // ✅ OCR 분석 Mutation 훅
  const { mutate: analyzeTaxInvoice, isPending } = useTaxInvoiceOCRMutation();

  const getTopMessage = () => ({
    title: "세금계산서를 업로드해주세요",
    subTitle: isChecking ? "OCR 분석 중..." : "진위여부를 확인할 세금계산서를 업로드해주세요.",
  });
  
  const uploadedFilesRef = useRef<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setUploadedFiles((prev) => {
        const newFiles = [...prev, ...acceptedFiles];
        uploadedFilesRef.current = newFiles; // ✅ useRef로 최신 상태 유지
        console.log("📂 파일 드롭 후 최신 파일 목록:", uploadedFilesRef.current);
        return newFiles.slice(0, MAX_FILES);
      });
      onUploadStart?.();
    },
    [onUploadStart]
  );
useEffect(() => {
  uploadedFilesRef.current = uploadedFiles;
}, [uploadedFiles]);

const { getInputProps, getRootProps } = useDropzone({
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

  //--------------------------------------------------------------------------

  console.log("📝 현재 업로드된 파일 목록:", uploadedFiles);
  uploadedFiles.forEach((file, index) => {
    console.log(`📂 ${index + 1}번째 파일:`, file);
  });
  uploadedFiles.forEach((file) => {
    console.log("📂 FormData에 추가하는 파일:", file, typeof file);
  });
  
  const checkFiles = async () => {
    if (uploadedFilesRef.current.length === 0 || isChecking) {
      console.error("🚨 업로드된 파일이 없습니다. 최신 상태:", uploadedFilesRef.current);
      return;
    }
  
    console.log("📂 최종 업로드된 파일 목록:", uploadedFilesRef.current);
  
    const formData = new FormData();
    uploadedFilesRef.current.forEach((file) => {
      formData.append("files", file); // ✅ 'files[]' → 'files' 로 변경
    });
  
    console.log("📤 최종 FormData 확인:");
const formDataEntries = [...formData.entries()];
formDataEntries.forEach(([key, value]) => {
  console.log(`🔹 Key: ${key}, Value:`, value);
});

if (formDataEntries.length === 0) {
  console.error("🚨 FormData가 비어 있습니다!");
  return;
}

    analyzeTaxInvoice(formData, {
      onSuccess: (data) => {
        console.log("✅ OCR 분석 성공:", data);
      
        if (!data || Object.keys(data).length === 0) {
          console.warn("🚨 OCR 분석이 성공했지만, 응답이 비어 있습니다.");
        }
        setIsUploading(true);  
        setOcrResults(data);
        setIsCompleted(true);
      },
      onError: (error) => {
        setIsUploading(false);  
         setIsCompleted(true);

        console.error("❌ OCR 분석 실패:", error);
      },
    });
  };
  

  useEffect(() => {
    console.log("📌 OCR 분석 결과 상태 업데이트됨:", ocrResults);
  
    if (!ocrResults || Object.keys(ocrResults).length === 0) {
      console.warn("⚠️ OCR 결과 데이터가 없습니다.");
    }
  }, [ocrResults]);
//--------------------------------------------------------------------------
  

  const topMessage = getTopMessage();

  return (
    <>
     {isUploading && <UploadModal onClose={() => setIsUploading(false)} />}
    {isCompleted ? (
      <CheckDone variant="secondary" onClose={() => setIsCompleted(false)} />
    ) : (
    <Flex css={uploadWrapperStyle} styles={{ align: "center", position: "relative" }}>
        <Flex
           {...getRootProps()}
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
                    확인
                  </Button>
                </Flex>
              </Flex>
            </>
          )}

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
지원형식 : png, jpeg, jpg, pdf (최대 : 1 mb) |
          <span style={{ color: "red" }}> * 파일 첨부는 최대 10개까지 가능해요.</span>            </Text>
        </Flex>
      )
    </Flex>)}
    </>
  );
};

export default UploadSection;
