import { SeoulmilkLogo } from "@seoulmilk/icon";
import { HeaderAlarm } from "@seoulmilk/icon";
import { UserProfile } from "@seoulmilk/icon";
import { Telephone } from "@seoulmilk/icon";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import {
  headerBaseStyle,
  headerVariantStyle,
  logoTextStyle,
  rightSectionStyle,
} from "@/Header/Header.style";
import HeaderDropdownCo from "@/Header/HeaderDropdown/HeaderDropdown";
import { colors } from "@seoulmilk/styles";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary";
}

const Header = ({ variant = "primary", ...props }: HeaderProps) => {
  const isPrimary = variant === "primary";
  const iconFilter = isPrimary ? "invert(1)" : "none";

  return (
    <header css={[headerBaseStyle, headerVariantStyle[variant]]} {...props}>
      <Flex styles={{ align: "center", gap: "0.2rem" }}>
        <SeoulmilkLogo css={{ width: "2.7rem", height: "2.7rem" }} />
        <Text tag="md1-text-bold" css={logoTextStyle(variant)}>
          서울우유
        </Text>
      </Flex>

      <Flex css={rightSectionStyle(variant)}>
        <UserProfile
          css={{ width: "3.2rem", height: "3.2rem", borderRadius: "50%" }}
        />
        <Text
          tag="md2-text-medium"
          css={{
            color: isPrimary ? "black" : "white",
            marginLeft: "0.8rem",
            marginRight: "1.2rem",
          }}
        >
          a12123
        </Text>
        <HeaderDropdownCo variant={variant} />

        <HeaderAlarm
          css={{
            filter: iconFilter,
            width: "2.4rem",
            height: "2.4rem",
            marginLeft: "1.6rem",
          }}
        />
        {isPrimary && (
          <Flex styles={{ align: "center", gap: "0.8rem", marginLeft: "1.2rem" }}>
            <Telephone
              css={{
                width: "2.4rem",
                height: "2.4rem",
              }}
            />
            <Text
              tag="md2-text-medium"
              css={{
                textDecoration: "underline",
                color: colors.grayscale_60
  
              }}
            >
              본사문의
            </Text>
          </Flex>
        )}
      </Flex>
    </header>
  );
};

export default Header;
