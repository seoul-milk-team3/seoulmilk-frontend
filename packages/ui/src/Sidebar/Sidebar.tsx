import { IcError, IcHome, IcNotice, IcSearch } from "@seoulmilk/icon";
import { useLocation } from "react-router-dom";
import SidebarItem from "@/Sidebar/SidebarItem/SidebarItem";
import { sidebarContainerStyle, menuListStyle } from "@/Sidebar/Sidebar.style";

const Sidebar = () => {
  const { pathname } = useLocation();

  console.log(IcHome, IcError, IcSearch, IcNotice);

  return (
    <aside css={sidebarContainerStyle}>
      <ul css={menuListStyle}>
        <SidebarItem
          to="/"
          icon={<IcHome />}
          label="홈"
          isActive={pathname === "/"}
        />
        <SidebarItem
          to="/error-list"
          icon={<IcError />}
          label="오류 내역"
          isActive={pathname === "/error-list"}
        />
        <SidebarItem
          to="/list"
          icon={<IcSearch />}
          label="자료 조회"
          isActive={pathname === "/list"}
        />
        <SidebarItem
          to="/notices"
          icon={<IcNotice />}
          label="공지사항"
          isActive={pathname === "/notices"}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
