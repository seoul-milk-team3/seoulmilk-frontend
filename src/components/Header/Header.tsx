import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import SeoulmilkLogo from '@/assets/svg/SeoulmilkLogo';
import HeaderAlarm from '@/assets/svg/HeaderAlarm';
import HeaderDropdown from './HeaderDropdown/HeaderDropdown';
import UserProfile from '@/assets/svg/UserProfile';

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
        <Flex styles={{ gap: '0rem', width: '10.1rem', height: '3.6rem' }}>
          <SeoulmilkLogo css={{ marginTop: '0.5rem', width: '2.7rem', height: '2.7rem' }} /> 
          <Text tag="md1-text-bold" css={logoTextStyle(variant)}>
            서울우유
          </Text>
        </Flex>

        <Flex css={rightSectionStyle(variant)}>
          <UserProfile css={{ width: '3.2rem', height: '3.2rem', borderRadius: '50%' }} />
          <Text tag="md2-text-medium" css={{ color: isPrimary ? 'black' : 'white' }}>
            a12123
          </Text>
          <HeaderDropdown variant={variant} />

          <HeaderAlarm css={{ filter: iconFilter, width: '2.4rem', height: '2.4rem' }} />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
