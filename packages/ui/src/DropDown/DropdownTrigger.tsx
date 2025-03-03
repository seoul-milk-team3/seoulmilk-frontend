import { useDropdownContext } from "@/DropDown/context";
import { IcArrowDropdown } from "@seoulmilk/icon";
import { PropsWithChildren } from "react";
import { triggerStyle, arrowStyle } from "@/DropDown/Dropdown.style";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import { theme } from "@seoulmilk/styles";

type DropdownTriggerProps = PropsWithChildren & {
  icon?: React.ReactNode;
  type: "date" | "region" | "email";
  selected: string;
  isDefault?: boolean;
};

const DropdownTrigger = ({
  icon,
  type,
  selected,
  isDefault = false,
}: DropdownTriggerProps) => {
  const { isOpen, toggle } = useDropdownContext();

  return (
    <button type="button" onClick={toggle} css={triggerStyle(type)}>
      <Flex styles={{ gap: "1rem", align: "center" }}>
        {icon}
        <Text
          tag={type === "email" ? "md2-text-regular" : "md2-text-medium"}
          css={{
            color: isDefault
              ? theme.colors.grayscale_40
              : theme.colors.grayscale_80,
          }}
        >
          {selected}
        </Text>
      </Flex>
      <IcArrowDropdown width={24} height={24} css={arrowStyle(isOpen)} />
    </button>
  );
};

export default DropdownTrigger;
