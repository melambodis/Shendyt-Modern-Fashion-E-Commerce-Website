// src/components/UI/AdvancedCard.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Button from "..//Button/Button.jsx";
import { FaHeart, FaShoppingCart, FaEye, FaRegHeart } from "react-icons/fa";
import clsx from "clsx";
import { CiHeart } from "react-icons/ci";

/**
 * Advanced Card for large fashion e-commerce project
 */
const Card = ({
  title,
  subtitle,
  image,
  alt = "",
  children,
  footerActions = [],
  badges = [],
  variant = "default",
  size = "medium",
  hoverEffect = "lift",
  layout = "grid",
  className = "",
  style = {},
  ...rest
}) => {
  const styleCard = clsx(
    styles.card,
    styles[variant],
    styles[size],
    styles[layout],
    styles[hoverEffect],
    className
  );
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className={styleCard} style={style} {...rest}>
      <div className={styles.imageWrapper}>
        {!imgLoaded && <div className={styles.skeleton} />}
        {image && (
          <img
            src={image}
            alt={alt || title}
            className={styles.image}
            onLoad={() => setImgLoaded(true)}
          />
        )}
        {badges.length > 0 && (
          <div className={styles.badges}>
            {badges.map((badge, idx) => (
              <span key={idx} className={styles.badge}>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.children}>{children}</div>}
      </div>

      {footerActions.length > 0 && (
        <div className={styles.footer}>
          {footerActions.map((action, idx) => (
            <Button
              key={idx}
              variant={action.variant}
              className={action.className}
              size={action.size}
              icon={action.icon}
              iconPosition={action.iconPosition}
              iconSize={action.iconSize}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
  footerActions: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      onClick: PropTypes.func,
    })
  ),
  badges: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["default", "outlined", "elevated", "hover-shadow"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  hoverEffect: PropTypes.oneOf(["lift", "shadow", "scale", null]),
  clickable: PropTypes.bool,
  layout: PropTypes.oneOf(["grid", "list"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Card;
