import { css } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";
import { buttonBaseStyle, buttonVariantStyle } from "@/Button/Button.style";
import Text from "@/Text/Text";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  padding?: string;
  tag?: React.ComponentProps<typeof Text>["tag"];
}

const Button = ({
  variant = "primary",
  padding = "1.7rem 14.45rem",
  tag = "lg-subtitle-semibold",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      css={[buttonBaseStyle, buttonVariantStyle[variant], css({ padding })]}
      {...props}
    >
      <Text tag={tag}>{children}</Text>
    </button>
  );
};

export default Button;
