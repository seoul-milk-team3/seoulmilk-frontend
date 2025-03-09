import React from "react";
import { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import { useOutsideClick } from "@seoulmilk/utils";
import { useOverlay } from "@seoulmilk/utils";
import { DropdownContext } from "@/DropDown/context";
import { dropdownRootStyle } from "@/DropDown/Dropdown.style";

interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  label?: string;
}

const DropdownRoot = ({ children, ...props }: DropdownProps) => {
  const { isOpen, close, open, toggle } = useOverlay();

  const ref = useOutsideClick(close);

  return (
    <DropdownContext.Provider value={{ open, close, toggle, isOpen }}>
      <div ref={ref} css={dropdownRootStyle} {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export default DropdownRoot;
