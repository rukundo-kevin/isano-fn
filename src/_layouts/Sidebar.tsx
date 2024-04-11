import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  HiChartPie,
  HiCog,
  HiFolder,
  HiBell,
} from "react-icons/hi2";
import Tooltip from "../components/Tooltip";
import { FaSignOutAlt, FaPhone } from "react-icons/fa";
// import { UserContext } from "../hook/useAuth";
import CheckRole from "../helpers/CheckRoles";
import SideNavLink from "../components/SideNavLink";

function Sidebar({ style, toggle }: { style: string; toggle: () => void }) {
  // const { logout } = useContext(UserContext);
  const [togglei, setTogglei] = useState(false);
  useEffect(() => {}, [togglei]);
  return (
    <div
      className={`${style} flex-col  fixed h-[100%] pt-[3vh] lg:pt-[11vh] bg-gray-800 dark:bg-dark-bg border-r p-2`}
    >
      <div className="list-none pr-8">
        <SideNavLink onClick={toggle} name="Dashboard" to="/dashboard/">
          <HiChartPie className="w-5 mr-2 " />
        </SideNavLink>

        {/* Shared Links */}
        <SideNavLink
          onClick={toggle}
          name="Notifications"
          to="/dashboard/notifications"
        >
          <HiBell className="w-5 mr-2" />
        </SideNavLink>

        <SideNavLink onClick={toggle} name="Docs" to="/dashboard/docs">
          <HiFolder className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink onClick={toggle} name="Help" to="/dashboard/support">
          <FaPhone className="w-5 mr-2 " />
        </SideNavLink>
        {/* Add icons */}
        <div className="flex flex-row ml-10 mt-20 list-none mt">
          <li className="px-2">
            <NavLink to="#link">
              <Tooltip message="Logout">
                <FaSignOutAlt
                  // onClick={logout}
                  className="w-5 text-red-700 dark:text-red-600 hover:text-red-900"
                />
              </Tooltip>
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="/dashboard/settings"
              className={(navData) => {
                if (navData.isActive) {
                  return "flex flex-row font-bold text-primary dark:text-primary";
                }
                return "flex flex-row dark:text-dark-text-fill";
              }}
            >
              <Tooltip message="Settings">
                <HiCog
                  className="w-5 text-white hover:text-primary "
                  onClick={toggle}
                />
              </Tooltip>
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
