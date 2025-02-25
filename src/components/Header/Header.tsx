import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import SeoulmilkLogo from '@/assets/svg/SeoulmilkLogo';
import HeaderAlarm from '@/assets/svg/HeaderAlarm';
import HeaderDropdown from './HeaderDropdown/HeaderDropdown';
import {
  headerBaseStyle,
  headerVariantStyle,
  logoTextStyle,
  rightSectionStyle,
  profileImageStyle,
} from './Header.style';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate';
}

const Header = ({ variant = 'default', ...props }: HeaderProps) => {
  return (
    <header css={[headerBaseStyle, headerVariantStyle[variant]]} {...props}>
      <Flex css={{ width: '100%' }}>
        {/* 왼쪽: 로고 */}
        <Flex styles={{ gap: '0px', width: '101px', height: '36px' }}>
          <SeoulmilkLogo css={{ marginTop: '5px', width: '27px', height: '27px' }} /> 
          <Text tag="md1-text-bold" css={logoTextStyle(variant)}>
            서울우유
          </Text>
        </Flex>

        <Flex css={rightSectionStyle(variant)}>
          <img src="/profile.png" alt="Profile" css={profileImageStyle} />
          <Text tag="md2-text-medium" css={{ color: variant === 'default' ? 'black' : 'white' }}>
            a12123
          </Text>
          <HeaderDropdown />
          <HeaderAlarm css={{ width: '24px', height: '24px' }} />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
