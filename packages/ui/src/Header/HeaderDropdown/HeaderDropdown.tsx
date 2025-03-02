import { useState, useRef, useEffect } from "react";
import { HeaderDropdownIcon } from "@seoulmilk/icon";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import {
  dropdownMenuStyle,
  dropdownItemStyle,
} from "@/Header/HeaderDropdown/HeaderDropdown.style";

interface HeaderDropdownProps {
  variant?: "agency" | "main";
}

const HeaderDropdown = ({ variant = "agency" }: HeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // variant 값에 따라 아이콘 스타일 변경
  const iconFilter = variant === "agency" ? "none" : "invert(1)";

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
          filter: iconFilter, // 여기서 variant에 따라 색상 변경
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <Flex css={dropdownMenuStyle} data-variant={variant}>
          <Text tag="md2-text-medium" css={dropdownItemStyle} data-variant={variant}>
            프로필 수정
          </Text>
          <Text tag="md2-text-medium" css={dropdownItemStyle} data-variant={variant}>
            로그아웃
          </Text>
        </Flex>
      )}
    </div>
  );
};

export default HeaderDropdown;
