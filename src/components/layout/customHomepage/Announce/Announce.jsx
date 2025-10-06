import styles from "./Announce.module.css"

const Announce = ({ children, variant }) => {
  return (
    <section className={` ${styles[variant]}`}>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default Announce;
