import React from "react";
import styles from "./WishlistPage.module.css";
import Wishlist from "../../components/layout/Wishlist/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import {
  addproduct,
  removwishlist,
} from "../../features/product/slice/cartSlice";
const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.product.wishlist);
  const dispatch = useDispatch();
  const AddTocart = (item) => {
    dispatch(addproduct(item));
    dispatch(removwishlist(item));
  };
  const Removwishlist = (item) => {
    dispatch(removwishlist(item));
  };
  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Your Wishlist</h1>
      </header>
      <section className={styles.content}>
        <Wishlist
          products={wishlistItems}
          onAddToCart={AddTocart}
          onRemove={Removwishlist}
        />
      </section>
    </main>
  );
};
export default WishlistPage;
