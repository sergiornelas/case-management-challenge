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
  // Of course we can implement more paths in the future.
  const topIconsMenu = [
    { path: "/", icon: <MdOutlineFormatLineSpacing color="#423fbd" /> },
    { path: "/", icon: <MdOutlineAutoAwesomeMosaic /> },
    { path: "/", icon: <LuUserSearch /> },
    { path: "/", icon: <MdOutlinePersonAddAlt /> },
    { path: "/", icon: <MdAddBusiness /> },
    { path: "/", icon: <MdOutlineCalendarMonth /> },
    { path: "/", icon: <TbReportAnalytics /> },
    {
      path: "/",
      icon: <MdOutlineSettingsAccessibility />,
    },
    { path: "/", icon: <FaRegFileLines /> },
    { path: "/", icon: <RiErrorWarningFill /> },
  ];

  const bottomIconsMenu = [
    { path: "/", icon: <FaUserFriends /> },
    { path: "/", icon: <BiSolidUser /> },
    { path: "/", icon: <MdOutlineLogout color="#d66b65" /> },
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
