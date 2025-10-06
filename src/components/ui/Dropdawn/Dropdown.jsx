import styles from "./Dropdown.module.css";
// المكون الخاص بالـ Item (Child)
const DropdownItem = ({ item }) => (
  <li>
    <a href={item.href || "#"}>{item.label || item}</a>
  </li>
);

// المكون الخاص بالـ Section (Parent يحتوي على Children)
const DropdownSection = ({ drop }) => (
  <div className={styles.section}>
    <h4 className="heading-3">
      <span><drop.icon /></span>
      {drop.title}
    </h4>
    <ul>
      {drop.items?.map((item, indx) => (
        <DropdownItem key={`${item}${indx}`} item={item} />
      ))}
    </ul>
  </div>
);

// المكون الخاص بالـ Menu (Parent يحتوي على Sections)
const DropdownMenu = ({ link }) => (
  <li className={styles.menu}>
    <h3 className={styles.NavlinkHeading}>{link.label}</h3>
    <div className={styles.dropdownSection}>
      {link.dropdown?.map((drop, indx) => (
        <DropdownSection key={`${drop.title}${indx}`} drop={drop} />
      ))}
    </div>
  </li>
);

// المكون الرئيسي Dropdown (Parent يحتوي على Menus)
const Dropdown = ({ links }) => (
  <>
    {links
      .filter((link) => link.dropdown?.length > 0)
      .map((link, indx) => (
        <DropdownMenu key={`${link.label}${indx}`} link={link} />
      ))}
  </>
);

export default Dropdown;
