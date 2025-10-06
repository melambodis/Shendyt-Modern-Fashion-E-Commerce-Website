import styles from "./UserMenu.module.css";
import { PiHeart, PiShoppingCartLight } from "react-icons/pi";
import Button from "../Button/Button";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const button = [
  { icon: <PiHeart />, label: "Wishlist", path: "/wishlist", badg: true },
  {
    icon: <PiShoppingCartLight />,
    label: "Cart",
    path: "/CartPage",
    badg: true,
  },
  { icon: <CiUser />, label: "Profile", path: "/signupPage" },
];

const UserMenu = ({ displayType = "icon", location = "" }) => {
  const cartcount = useSelector((state) => state.product.cartproduct.length);
  const wishCount = useSelector((state) => state.product.wishlist.length);
  return (
    <div
      className={
        location === "Navbar" ? styles.userMenusidbar : styles.userMenuTopBar
      }
    >
      {button.map((btn, i) => (
        <Link to={btn.path} key={i}>
          <Button
            aria-label="Toggle menu"
            icon={displayType === "icon" && btn.icon}
            iconPosition="center"
            iconSize="icon-2xl"
            iconColor="secondary-color-Ho"
            disabled={false}
            loading={false}
          >
            {/* {btn.badg && (
              <span className={styles.badg}>
                {btn.label === "Wishlist" && wishCount}
              </span>
            )}
            {btn.badg && (
              <span className={styles.badg}>
                {btn.label === "Cart" && cartcount}
              </span>
            )} */}
            {btn.badg && (
              <span className={styles.badg}>
                {btn.label === "Wishlist"
                  ? wishCount
                  : btn.label === "Cart"
                  ? cartcount
                  : ""}
              </span>
            )}
          </Button>
        </Link>
      ))}
    </div>
  );
};
export default UserMenu;
