import styles from "./ProductCart.module.css";
import { FaTrash } from "react-icons/fa";

const Cart = ({
  image,
  details,
  title,
  price,
  quantity,
  subtotal,
   onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
        <section className={styles.productList}>
            <div  className={styles.productCard}>
              <img src={image} />
              <div className={styles.details}>
                <h3>{title}</h3>
                <p>{details}</p>
                <p className={styles.price}>{price}</p>
                <div className={styles.controls}>
                  <button onClick={onIncrease}>-</button>
                  <span>{quantity}</span>
                  <button onClick={onDecrease}>+</button>
                </div>
                <p className={styles.subtotal}>{subtotal}</p>
              </div>
              <button onClick={onRemove} className={styles.removeBtn} >
                <FaTrash />
              </button>
            </div>
        </section>
  );
};
export default Cart;
