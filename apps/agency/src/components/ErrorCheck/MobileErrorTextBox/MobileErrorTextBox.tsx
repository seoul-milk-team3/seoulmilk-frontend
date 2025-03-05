import { useState } from "react";
import { css } from "@emotion/react";
import { Button, Flex, Text } from "@seoulmilk/ui";
import { containerStyle, labelStyle, inputStyle } from "./MobileErrorTextBox.style";

export interface ErrorTextBoxProps {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  
}

const ErrorTextBox = ({ label, value = "", placeholder, onChange }: ErrorTextBoxProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div css={containerStyle}>
      <Text tag="md2-text-semibold" css={labelStyle}>
        {label}
      </Text>
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        css={inputStyle}
      />
    </div>
  );
};

export default ErrorTextBox;
