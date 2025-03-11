import { css } from '@emotion/react';
import { Text } from '@seoulmilk/ui';
import { useState } from 'react';
import { containerStyle, labelStyle, inputStyle } from './ErrorBox.style';

export interface ErrorBoxProps {
  label: string;
  value: string | number;
  onChange?: (value: string) => void;
}

const ErrorBox = ({ label, value = '', onChange }: ErrorBoxProps) => {
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
      <Text tag="md2-text-medium" css={labelStyle}>
        {label}
      </Text>
      <input type="text" value={inputValue} onChange={handleChange} css={inputStyle} />
    </div>
  );
};

export default ErrorBox;
