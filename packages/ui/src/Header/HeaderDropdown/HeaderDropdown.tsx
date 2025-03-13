import { useState, useRef, useEffect } from "react";
import { HeaderDropdownIcon } from "@seoulmilk/icon";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import Modal from "@/Modal/Modal"; // Modal 컴포넌트 import
import {
  dropdownMenuStyle,
  dropdownItemStyle,
} from "@/Header/HeaderDropdown/HeaderDropdown.style";
import { REFRESH_TOKEN_KEY, USER_ID_KEY } from "@seoulmilk/utils";
import { axiosInstance } from "@seoulmilk/api/src/instance";

interface HeaderDropdownProps {
  variant?: "agency" | "main";
}

const HeaderDropdown = ({ variant = "agency" }: HeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // 로그아웃 모달 상태 추가
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true); // 로그아웃 버튼 클릭 시 모달 표시
  };

  const handleCancelLogout = () => {
    setIsLogoutModalOpen(false); // 취소 버튼 클릭 시 모달 닫기
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);

    delete axiosInstance.defaults.headers.Authorization;

    window.location.href = "/login";

    setIsLogoutModalOpen(false);
  };

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
        <Flex css={dropdownMenuStyle} data-variant={variant}>
          <Text
            tag="md2-text-medium"
            css={dropdownItemStyle}
            data-variant={variant}
          >
            프로필 수정
          </Text>
          <Text
            tag="md2-text-medium"
            css={dropdownItemStyle}
            data-variant={variant}
            onClick={handleLogoutClick} // 로그아웃 클릭 시 모달 열기
          >
            로그아웃
          </Text>
        </Flex>
      )}

      {isLogoutModalOpen && (
        <Modal
          title="로그아웃"
          message="로그아웃 하시겠습니까?"
          leftButtonText="취소"
          rightButtonText="로그아웃"
          onLeftButtonClick={handleCancelLogout}
          onRightButtonClick={handleConfirmLogout}
        />
      )}
    </div>
  );
};

export default HeaderDropdown;
