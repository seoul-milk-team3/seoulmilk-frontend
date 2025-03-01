import { IcError, IcHome, IcNotice, IcSearch } from "@seoulmilk/icon";
import { useLocation } from "react-router-dom";
import SidebarItem from "@/Sidebar/SidebarItem/SidebarItem";
import { sidebarContainerStyle, menuListStyle } from "@/Sidebar/Sidebar.style";

type SidebarVariant = "main" | "agency" | "admin";

const menuConfig: Record<
  SidebarVariant,
  { to: string; icon: React.ReactElement; label: string }[]
> = {
  main: [
    { to: "/", icon: <IcHome />, label: "홈" },
    { to: "/error-list", icon: <IcError />, label: "오류 내역" },
    { to: "/list", icon: <IcSearch />, label: "자료 조회" },
    { to: "/notices", icon: <IcNotice />, label: "공지사항" },
  ],
  agency: [
    { to: "/", icon: <IcHome />, label: "홈" },
    { to: "/list", icon: <IcSearch />, label: "자료 조회" },
  ],

  // 추후 디자인대로 수정 필요
  admin: [
    { to: "/dashboard", icon: <IcHome />, label: "수정필요" },
    { to: "/users", icon: <IcSearch />, label: "수정필요" },
    { to: "/logs", icon: <IcError />, label: "수정필요" },
    { to: "/settings", icon: <IcNotice />, label: "수정필요" },
  ],
};

const Sidebar = ({ variant }: { variant: SidebarVariant }) => {
  const { pathname } = useLocation();

  const menuItems = menuConfig[variant];

  return (
    <aside css={sidebarContainerStyle}>
      <ul css={menuListStyle}>
        {menuItems.map(({ to, icon, label }) => (
          <SidebarItem
            key={to}
            to={to}
            icon={icon}
            label={label}
            isActive={pathname === to}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
