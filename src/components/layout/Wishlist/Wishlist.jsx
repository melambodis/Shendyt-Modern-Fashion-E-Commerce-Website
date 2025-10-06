import styles from "./Wishlist.module.css";
const Wishlist = ({ products, onAddToCart, onRemove }) => {
  return (
    <section className={styles.Container}>
      <h2 className={styles.title}>My Wishlist</h2>
      <div className={styles.grid}>
        {products.length > 0 ? (
          products.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productPrice}>${item.price}</p>
              </div>
              <div className={styles.actions}>
                <button
                  className={styles.addButton}
                  onClick={() => onAddToCart(item)}
                >
                  Add to Cart
                </button>
                <button
                  className={styles.removeButton}
                  onClick={() => onRemove(item)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))
        ) : (
          <p className={styles.empty}>Your wishlist is empty</p>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
