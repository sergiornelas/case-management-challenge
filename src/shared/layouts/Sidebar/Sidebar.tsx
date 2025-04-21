import { BiSolidUser } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { LuUserSearch } from "react-icons/lu";
import {
  MdAddBusiness,
  MdOutlineAutoAwesomeMosaic,
  MdOutlineCalendarMonth,
  MdOutlineFormatLineSpacing,
  MdOutlineLogout,
  MdOutlinePersonAddAlt,
  MdOutlineSettingsAccessibility,
} from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const topIconsMenu = [
    { path: "/", icon: <MdOutlineFormatLineSpacing color="#423fbd" /> },
    { path: "/cases", icon: <MdOutlineAutoAwesomeMosaic /> },
    { path: "/clients", icon: <LuUserSearch /> },
    { path: "/staff", icon: <MdOutlinePersonAddAlt /> },
    { path: "/calendar", icon: <MdAddBusiness /> },
    { path: "/firms", icon: <MdOutlineCalendarMonth /> },
    { path: "/tasks", icon: <TbReportAnalytics /> },
    {
      path: "/reports",
      icon: <MdOutlineSettingsAccessibility />,
    },
    { path: "/apps", icon: <FaRegFileLines /> },
    { path: "/tasks", icon: <RiErrorWarningFill /> },
  ];

  const bottomIconsMenu = [
    { path: "/share", icon: <FaUserFriends /> },
    { path: "/account", icon: <BiSolidUser /> },
    { path: "/logout", icon: <MdOutlineLogout color="#d66b65" /> },
  ];

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.menu}>
        {topIconsMenu.map((item) => (
          <li key={item.path}>
            {/* Let's suppose we curretly have paths in the project: */}
            <Link to={item.path} className={`${styles.menuItem}`}>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.menu}>
        {bottomIconsMenu.map((item) => (
          <li key={item.path}>
            {/* Let's suppose we curretly have paths in the project: */}
            <Link to={item.path} className={`${styles.menuItem}`}>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
