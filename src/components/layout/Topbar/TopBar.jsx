import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import Input from "../../ui/Input/Input";
import UserMenu from "../../ui/UserMenu/UserMenu";
import Button from "../../ui/Button/Button";
import { IoMdClose } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import Portal from "../../../portal/Portal";
import styles from "./TopBar.module.css";
import useIsMobile from "../../../hooks/useIsMobile";
export default function TopBar({ setMenuOpen, menuOpen }) {
  const isMobile = useIsMobile(768);
  return (
    <div className={`${styles.topBar}`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.Logo}>
            <Link to={"/home"}>
              <img src={"/logo.svg"} alt="Logo" />
            </Link>
          </div>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>
              <MdSearch />
            </span>
            <Input
              className={styles.Input}
              placeholder={"typeyour product"}
              id="search"
              type="search"
              disabled={false}
            />
          </div>

          {!isMobile && <div id="topbar-user"></div>}

          {!isMobile && (
            <Portal targetId="topbar-user">
              <div className={styles.userMenuWrap}>
                <UserMenu displayType="icon" />
              </div>
            </Portal>
          )}
          {isMobile && (
            <Button
              variant={menuOpen ? "light" : ""}
              size="btn-square-medium"
              aria-label="Toggle menu"
              iconColor="secondary-color"
              icon={menuOpen ? <IoMdClose /> : <RiMenuFill />}
              iconPosition="center"
              className={`${menuOpen ? styles.btnopen : ""} ${styles.BtNmedia}`}
              iconSize="icon-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
