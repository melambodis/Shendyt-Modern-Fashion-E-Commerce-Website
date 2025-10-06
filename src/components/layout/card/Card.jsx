import React, { useState } from "react";
import styles from "./card.module.css";
import clsx from "clsx";
import Button from "../../ui/Button/Button";
const Card = ({
  title,
  subtitle,
  image,
  altImage,
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
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styleCard} style={style} {...rest}>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {!imgLoaded && <div className={styles.skeleton} />}
        {image && (
          <>
            <img
              src={image}
              alt={alt}
              className={`${hovered ? styles.hideMain : styles.showMain} ${
                styles.mainImage
              }`}
              onLoad={() => setImgLoaded(true)}
            />
            <img
              src={altImage}
              alt={alt}
              className={`${hovered ? styles.showAlt : styles.hideAlt} ${
                styles.altImage
              }`}
              onLoad={() => setImgLoaded(true)}
            />
          </>
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
export default Card;
