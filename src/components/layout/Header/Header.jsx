import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import NavItems from "../../../data/Links";
import { useState } from "react";
import TopBar from "../Topbar/Topbar";
import Announce from "../customHomepage/Announce/Announce";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.Header}>
      {menuOpen && <div className={styles.overlay}></div>}
      {/* <div className={styles.announce} role="status" aria-live="polite">
        Free shipping on orders over $50 — limited time.
      </div> */}
      <Announce
        variant={"announceheader"}
        children={" Free shipping on orders over $50 — limited time."}
      />
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar link={NavItems} menuOpen={menuOpen} />
    </header>
  );
}
