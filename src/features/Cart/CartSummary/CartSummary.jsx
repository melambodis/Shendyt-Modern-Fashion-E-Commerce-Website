import React from "react";
import styles from "./CartSummary.module.css";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const totalPrice = useSelector((state) => state.product.price);

  return (
    <aside className={styles.summary}>
      <h2>Order Summary</h2>
      <div className={styles.row}>
        <span>Subtotal</span>
        <span>{totalPrice.totalcount}</span>
      </div>
      <div className={styles.row}>
        <span>Shipping</span>
        <span>20$</span>
      </div>
      <div className={styles.row}>
        <span>discount</span>
        <span>
          {totalPrice.discount === 0 ? totalPrice.message : totalPrice.discount}
        </span>
      </div>
      <div className={`${styles.row} ${styles.totalRow}`}>
        <span>Total</span>
        <span>{totalPrice.finalcount}</span>
      </div>
      <div className={styles.coupon}>
        <input type="text" placeholder="Coupon code" />
        <button>Apply</button>
      </div>
      <button className={styles.checkoutBtn}>Proceed to Checkout</button>
      <a href="/shop" className={styles.continue}>
        Continue Shopping
      </a>
    </aside>
  );
};

export default CartSummary;
