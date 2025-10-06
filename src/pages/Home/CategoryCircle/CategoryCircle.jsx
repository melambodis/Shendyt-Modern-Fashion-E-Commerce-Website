import styles from "./CategoryCircle.module.css";

const CategoryCircle = ({ products }) => {
  return (
    <div className={styles.CircleWraper} >
      {products.map((p) => (
        <div key={p.id}>
          <div className={styles.circle}>
            <img src={p.images[0]} alt={p.title} />
            <span className={styles.overlay}>{p.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryCircle;
