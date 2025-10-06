import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
const Hero = () => {
  const images = [
    "/Baner/2Q(1).jpeg",
    "/Baner/2Q(3).jpeg",
    "/Baner/9k= (2).jpeg",
    "/Baner/Gemini_Generated_Image_wjtcm3wjtcm3wjtc.jpeg",
    "/Baner/PSTLS-APR14-MOB-EN---002.jpg",
    "/Baner/SUMMR-APR10-MOB-EN---001.jpg",
  ];
  return (
    <section
      className={styles.hero}
      aria-label="New arrivals hero"
      style={{ backgroundImage: `url(${images[4]})` }}
    >
      <div className={styles.heroOverlay} />
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Discover your new favorite outfit
          </h1>
          <p className={styles.heroSubtitle}>
            Modern styles, sustainable materials, and effortless fit.
          </p>
          <div className={styles.heroActions}>
            <Button
              variant="primary"
              size="xlarge"
              iconSize="small"
              children={"Shop New Arrivals"}
            />
            <a href="#featured" className={styles.heroSecondary}>
              Browse featured
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
