import { ComponentPropsWithoutRef } from "react";
import { dropdownItemStyle } from "@/DropDown/Dropdown.style";
import { useDropdownContext } from "@/DropDown/context";
import Text from "@/Text/Text";

interface DropdownItemProps extends ComponentPropsWithoutRef<"li"> {
  onSelect?: () => void;
}

/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
const DropdownItem = ({ onSelect, children, ...props }: DropdownItemProps) => {
  const { close } = useDropdownContext();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter") {
      onSelect?.();

      close();
    }
  };

  return (
    <li
      css={dropdownItemStyle}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseDown={() => {
        onSelect?.();
        close();
      }}
      {...props}
    >
      <Text tag="md2-text-medium">{children}</Text>
    </li>
  );
};

export default DropdownItem;
