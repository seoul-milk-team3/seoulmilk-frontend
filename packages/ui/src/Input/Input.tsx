import { IcInputError, IcPwActive, IcPwDefault } from "@seoulmilk/icon";
import { useState } from "react";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";

interface InputProps {
  title?: string;
  description?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  type?: "text" | "password";
  errorMessage?: string;
  variant?: "pc" | "mobile";
}

import {
  iconStyle,
  descriptionStyle,
  inputWrapperStyle,
  inputStyle,
  errorTextStyle,
} from "./Input.style";

const Input = ({
  title,
  description,
  placeholder = "",
  value,
  onChange,
  width = "100%",
  type = "text",
  errorMessage,
  variant = "pc",
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <Flex styles={{ direction: "column", gap: "1rem" }} {...props}>
      <Text tag="md1-text-semibold">{title}</Text>
      {description && (
        <Text tag="md2-text-regular" css={descriptionStyle}>
          {description}
        </Text>
      )}

      <div css={inputWrapperStyle(!!errorMessage, width, variant)}>
        <input
          type={isPassword && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          css={inputStyle}
        />

        {/* 비밀번호 입력값이 있을 때만 아이콘 표시 */}
        {isPassword && value.length > 0 && (
          <span
            css={iconStyle}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <IcPwActive width={24} height={24} />
            ) : (
              <IcPwDefault width={24} height={24} />
            )}
          </span>
        )}
      </div>

      {errorMessage && (
        <Flex styles={{ gap: "0.8rem", align: "center" }} css={errorTextStyle}>
          <IcInputError width={20} height={20} />
          {errorMessage}
        </Flex>
      )}
    </Flex>
  );
};

export default Input;
