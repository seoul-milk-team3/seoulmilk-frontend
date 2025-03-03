import { ComponentPropsWithoutRef } from "react";

import { dropdownListStyle } from "@/DropDown/Dropdown.style";
import { useDropdownContext } from "@/DropDown/context";

type DropdownListProps = ComponentPropsWithoutRef<"ul">;

const DropdownList = ({ children, ...props }: DropdownListProps) => {
  const { isOpen } = useDropdownContext();

  return (
    isOpen && (
      <ul css={dropdownListStyle} {...props}>
        {children}
      </ul>
    )
  );
};

export default DropdownList;
