// errorbox.tsx
import { useState } from "react";
import { css } from "@emotion/react";
import Text from "@/Text/Text";
import Button from "@/Button/Button";
import {
  ContainerStyle,
  imageContainerStyle,
  errorBoxWrapperStyle,
  fieldContainerStyle,
  buttonContainerStyle,
  imageBox,
  bigImageIconStyle ,
  overlayStyle ,
  enlargedImageStyle 
}from "./ErrorBox.style";
import ErrorTextBox from "../ErrorTextBox/ErrorTextBox";
import { imageStyle } from "@/Image/ImageModal/ImageModal.style";
import {IcImageZoom} from "@seoulmilk/icon";

export interface ErrorBoxProps {
  imageUrl: string;
  fields?: { label: string; value?: string; placeholder?: string }[];
  onSave?: () => void;
  onReview?: () => void;
}


const ErrorBox = ({ imageUrl, fields = [], onSave, onReview }: ErrorBoxProps) => {
  const [isSaved, setIsSaved] = useState(false); // 저장 상태 관리
const [isImageEnlarged, setIsImageEnlarged] = useState(false); // 확대 상태 관리

const handleImageClick = () => {
  setIsImageEnlarged(true); // 이미지 클릭 시 확대 상태로 변경
};

const closeImage = () => {
  setIsImageEnlarged(false); // 확대된 이미지 닫기
};
  const handleSave = () => {
  if (onSave) {
    onSave();
  }
  setIsSaved(true); // 저장 버튼 클릭 시 isSaved 상태를 true로 설정
};
const [values, setValues] = useState<Record<string, string>>(
    fields.reduce((acc, field) => {
      acc[field.label] = field.value || "";
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (label: string, value: string) => {
    setValues((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <div css={ContainerStyle}>
      {/* 왼쪽에 이미지 표시 */}
      <div css={imageContainerStyle}>
        <div css={imageBox}>
        <img css={imageStyle}
        src={imageUrl} 
        alt="세금 계산서 이미지"
        onClick={handleImageClick}  />
        <IcImageZoom
          css={bigImageIconStyle} 
          onClick={handleImageClick} 
        />
       </div>
      </div>
        {/* 확대된 이미지 모달 */}
    {isImageEnlarged && (
      <div css={overlayStyle} onClick={closeImage}>
        <img
          src={imageUrl}
          alt="Enlarged Image"
          css={enlargedImageStyle} 
          onClick={(e) => e.stopPropagation()} 
        />
          </div>
    )}



      {/* 오른쪽에 오류 검토 박스 */}
      <div css={errorBoxWrapperStyle}>
        <Text tag="xxl-title-bold">올바르게 입력되었는지<br /> 확인해주세요</Text>
        <div css={fieldContainerStyle}>
          {fields.length > 0 ? (
            fields.map((field) => (
              <ErrorTextBox
                key={field.label}
                label={field.label}
                value={values[field.label]}
                placeholder={field.placeholder}
                onChange={(value) => handleChange(field.label, value)}
              />
            ))
          ) : (
            <Text tag="xxl-title-bold">입력할 항목이 없습니다.</Text>
          )}
        </div>

        {/* 버튼 영역 */}
        <div css={buttonContainerStyle}>
          <Button variant="primary" padding="1.7rem 9.5rem" onClick={onSave} 
            css={{ whiteSpace: "nowrap", height: "5rem", width: "8rem" }}>
            저장
          </Button>
          <Button
            variant="secondary"
            onClick={onReview}
            padding="1.7rem 9.5rem"
            disabled={!isSaved} 
            css={{ height: "5rem", whiteSpace: "nowrap", width: "8rem" }}
          >
          진위여부 확인
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBox;
