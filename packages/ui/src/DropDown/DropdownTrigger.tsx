import { useDropdownContext } from "@/DropDown/context";
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from "react";

type DropdownTriggerProps = PropsWithChildren & {
  variant?: "button" | "input";
};

const DropdownTrigger = ({
  variant = "button",
  children,
}: DropdownTriggerProps) => {
  const { isOpen, toggle, open, close } = useDropdownContext();

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement, {
            isOpen,
            onClick: variant === "button" ? toggle : undefined,
            onFocus: variant === "input" ? open : undefined,
            onBlur: variant === "input" ? close : undefined,
          });
        }
      })}
    </>
  );
};

export default DropdownTrigger;
