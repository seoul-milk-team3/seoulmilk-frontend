import { useState, useRef, useEffect } from "react";
import { HeaderDropdownIcon } from "@seoulmilk/icon";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import {
  dropdownMenuStyle,
  dropdownItemStyle,
} from "@/Header/HeaderDropdown/HeaderDropdown.style";

interface HeaderDropdownProps {
  variant?: "primary" | "secondary";
}

const HeaderDropdown = ({ variant = "primary" }: HeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconFilter = variant === "primary" ? "invert(1)" : "invert(0)";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <HeaderDropdownIcon
        css={{
          width: "2.4rem",
          height: "2.4rem",
          cursor: "pointer",
          filter: iconFilter,
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <Flex css={dropdownMenuStyle}>
          <Text tag="md2-text-medium" css={dropdownItemStyle}>
            프로필 수정
          </Text>
          <Text tag="md2-text-medium" css={dropdownItemStyle}>
            로그아웃
          </Text>
        </Flex>
      )}
    </div>
  );
};

export default HeaderDropdown;
