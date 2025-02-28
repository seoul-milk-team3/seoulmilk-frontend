import { Link } from "react-router-dom";
import { menuItemStyle, menuIconStyle } from "@/Sidebar/Sidebar.style";
import Text from "@/Text/Text";

const SidebarItem = ({
  to,
  icon,
  label,
  isActive,
}: {
  to: string;
  icon: React.ReactElement;
  label: string;
  isActive: boolean;
}) => {
  return (
    <li css={{ position: "relative" }}>
      <Link to={to} css={menuItemStyle(isActive)}>
        <span css={menuIconStyle}>{icon}</span>
        <Text tag="md2-text-medium">{label}</Text>
      </Link>
    </li>
  );
};

export default SidebarItem;
