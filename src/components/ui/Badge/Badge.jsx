import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Badge.module.css";

/**
 * Badge component with customizable text, variant, size, and optional icon.
 */
const Badge = ({ text, variant = "primary", size = "medium", icon, className }) => {
  return (
    <span
      className={clsx(
        styles.badge,
        styles[variant],
        styles[size],
        className
      )}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.element,
  className: PropTypes.string,
};

Badge.defaultProps = {
  variant: "primary",
  size: "medium",
  icon: null,
  className: "",
};

export default Badge;
