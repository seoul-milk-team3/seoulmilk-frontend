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
  variant?: 'primary' | 'secondary';
}

const Header = ({ variant = 'primary', ...props }: HeaderProps) => {
  const isPrimary = variant === 'primary';
  const iconFilter = isPrimary ? 'invert(1)' : 'none';

  return (
    <header css={[headerBaseStyle, headerVariantStyle[variant]]} {...props}>
      <Flex css={{ width: '100%' }}>
        <Flex styles={{ gap: '0px', width: '101px', height: '36px' }}>
          <SeoulmilkLogo css={{ marginTop: '5px', width: '27px', height: '27px' }} /> 
          <Text tag="md1-text-bold" css={logoTextStyle(variant)}>
            서울우유
          </Text>
        </Flex>

        <Flex css={rightSectionStyle(variant)}>
          <img 
            src="/profile.png" 
            alt="Profile" 
            css={[profileImageStyle]} 
          />
          <Text tag="md2-text-medium" css={{ color: isPrimary ? 'black' : 'white' }}>
            a12123
          </Text>
          <HeaderDropdown variant={variant} />

          <HeaderAlarm css={{ filter: iconFilter, width: '24px', height: '24px' }} />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
