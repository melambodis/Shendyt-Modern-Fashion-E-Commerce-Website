import useIsMobile from "../../../hooks/useIsMobile";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import UserMenu from "../../ui/UserMenu/UserMenu";

const Navbar = ({ Logo, sticky, link = [], menuOpen, ...rest }) => {
  const isMobile = useIsMobile(768);

  const renderLinks = () => (
    <ul className={`${styles.NavLink} ${menuOpen ? styles.open : " "}`}>
      {link.map(({ label, href }) => (
        <li className={styles.menu} key={label}>
          <NavLink
            to={href}
            className={({ isActive }) =>
              isActive
                ? `${styles.NavlinkHeading} ${styles.active}` // هنا active من CSS Module
                : styles.NavlinkHeading
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
      {isMobile && <UserMenu displayType="children" location="Navbar" />}
    </ul>
  );

  return (
    <nav
      className={`${styles.navbar} ${sticky ? styles.sticky : ""}`}
      {...rest}
    >
      <div className="container">
        <div className={styles.Navcontent}>
          <div className={styles.Logo}>
            {typeof Logo === "string" && (
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
            )}
          </div>
          {renderLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
