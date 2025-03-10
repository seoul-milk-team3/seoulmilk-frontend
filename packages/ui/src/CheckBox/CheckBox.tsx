import { HTMLAttributes } from "react";
import { inputStyle, iconStyle, wrapperStyle } from "./CheckBox.style";
import { IcCheck } from "@seoulmilk/icon";

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  onChange: () => void;
}

const CheckBox = ({ isChecked, onChange, ...props }: CheckBoxProps) => {
  return (
    <label css={wrapperStyle}>
      <input
        aria-checked={isChecked}
        type="checkbox"
        css={inputStyle}
        onChange={onChange}
        checked={isChecked}
        {...props}
      />
      <IcCheck width={16} height={16} css={iconStyle(isChecked)} />
    </label>
  );
};

export default CheckBox;
