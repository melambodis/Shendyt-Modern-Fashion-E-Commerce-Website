
import PropTypes from "prop-types";
import styles from "./Button.module.css";

// Simple Spinner Component
const Spinner = () => (
  <svg className={styles.spinner} viewBox="0 0 50 50">
    <circle
      className={styles.path}
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    />
  </svg>
);

const Button = ({
  children,
  variant = "",
  size = "",
  icon,
  iconPosition = "",
  iconSize = "",
  iconColor="",
  disabled = false,
  loading = false,
  onClick,

  id,
  className = "",
  type = "button",
  style = {},
  ...rest
}) => {
  const btnClasses = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <button
      id={id}
      type={type}
      className={btnClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      style={style}
      {...rest}
    >
      {loading && <Spinner />}
      {/* // لو في حالة تحميل، اعرض عنصر الـ Spinner */}

      {!loading && icon && iconPosition === "left" && (
        <span className={`${styles.iconLeft} ${styles[iconSize]} ${styles[iconColor]}`}>{icon}</span>
      )}
      {/* // لو مفيش تحميل، وفي أيقونة، ومكانها على الشمال، اعرض الأيقونة على اليسار */}

      {children && <span className={styles.label}>{children}</span>}
      {/* // دايمًا اعرض نص الزرار (children) */}

      {!loading && icon && iconPosition === "right" && (
        <span className={`${styles.iconRight} ${styles[iconSize]} ${styles[iconColor]}`}>{icon}</span>
      )}
      {/* // لو مفيش تحميل، وفي أيقونة، ومكانها على اليمين، اعرض الأيقونة على اليمين */}
      {!loading && icon && iconPosition === "center" && (
        <span className={`${styles.iconCenter} ${styles[iconSize]} ${styles[iconColor]}`}>
          {icon}
        </span>
      )}
      

      {/* // لو مفيش تحميل، وفي أيقونة، والزرار مخصص لأيقونة فقط، ومكانها وسط، اعرض الأيقونة في الوسط */}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node, // نص الزرار أو أي عناصر بداخله
  variant: PropTypes.oneOf([
    "wishlist",
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "outline",
    "ghost",
    "link",
    "dark",
    "light",
  ]), // أنواع الأزرار بناء على CSS
  size: PropTypes.oneOf([
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "fullWidth",
  ]), // الأحجام
  icon: PropTypes.node, // أيقونة يمكن تمريرها كـ React element
  iconPosition: PropTypes.oneOf(["left", "right", "center"]), // مكان الأيقونة
  iconSize: PropTypes.oneOf([
    "btn-square-xsmall",
    "btn-square-small",
    "btn-square-medium",
    "btn-square-large",
    "btn-square-xlarge",
  ]), // أحجام الأيقونات
  iconColor: PropTypes.oneOf([
    "primary-color",
    "secondary-color",
    "success-color",
    "danger-color",
    "warning-color",
    "info-color",
    "dark-color",
    "light-color",
  ]), // ألوان الأيقونات
  disabled: PropTypes.bool, // لتعطيل الزرار
  loading: PropTypes.bool, // لإظهار Spinner
  onClick: PropTypes.func, // دالة عند الضغط
  id: PropTypes.string, // id الزرار
  className: PropTypes.string, // كلاس إضافي
  type: PropTypes.oneOf(["button", "submit", "reset"]), // نوع الزرار
  style: PropTypes.object, // ستايل inline
};


export default Button;
