import { HTMLAttributes } from "react";
import { textStyle } from "@/Text/Text.style";
import { TextTag } from "@seoulmilk/utils";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?: TextTag;
}

const Text = ({ tag = "md1-text-regular", children, ...props }: TextProps) => {
  return (
    <p css={textStyle[tag]} {...props}>
      {children}
    </p>
  );
};

export default Text;
