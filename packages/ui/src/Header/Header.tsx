import {
  HeaderAlarm,
  IcHeaderLogo,
  IcPhone,
  UserProfile,
} from "@seoulmilk/icon";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import {
  headerBaseStyle,
  headerVariantStyle,
  rightSectionStyle,
  phoneStyle,
} from "@/Header/Header.style";
import HeaderDropdown from "@/Header/HeaderDropdown/HeaderDropdown";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "agency" | "main";
}

const Header = ({ variant = "main", ...props }: HeaderProps) => {
  const isAgency = variant === "agency";
  const iconFilter = isAgency ? "invert(1)" : "none";

  return (
    <header css={[headerBaseStyle, headerVariantStyle[variant]]} {...props}>
      <IcHeaderLogo width={101} height={36} />

      <Flex css={rightSectionStyle(variant)}>
        <UserProfile
          css={{ width: "3.2rem", height: "3.2rem", borderRadius: "50%" }}
        />
        <Text
          tag="md2-text-medium"
          css={{
            color: isAgency ? "black" : "white",
            marginLeft: "0.8rem",
            marginRight: "1.2rem",
          }}
        >
          a12123
        </Text>
        <HeaderDropdown />

        <HeaderAlarm
          css={{
            filter: iconFilter,
            width: "2.4rem",
            height: "2.4rem",
            marginLeft: "1.6rem",
          }}
        />

        {/* agency일 때만 본사 문의 표시 */}
        {isAgency && (
          <Flex
            styles={{ gap: "0.8rem", align: "center", marginLeft: "2.4rem" }}
          >
            <IcPhone width={24} height={24} />
            <Text tag="md2-text-medium" css={phoneStyle}>
              본사 문의
            </Text>
          </Flex>
        )}
      </Flex>
    </header>
  );
};

export default Header;
