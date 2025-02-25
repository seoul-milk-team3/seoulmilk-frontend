import { useState, useRef, useEffect } from 'react';
import HeaderDropdownIcon from '@/assets/svg/HeaderDropdown';
import { dropdownMenuStyle, dropdownItemStyle } from './HeaderDropdown.style';
import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';

const HeaderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <HeaderDropdownIcon
        css={{ width: '24px', height: '24px', cursor: 'pointer' }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <Flex css={dropdownMenuStyle}>
          <Text tag="md2-text-medium" css={dropdownItemStyle}>프로필 수정</Text>
          <Text tag="md2-text-medium"css={dropdownItemStyle}>로그아웃</Text>
        </Flex>
      )}
    </div>
  );
};

export default HeaderDropdown;
