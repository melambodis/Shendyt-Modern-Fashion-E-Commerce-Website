import Cart from "../../features/Cart/cart/Cart";
import CartSummary from "../../features/Cart/CartSummary/CartSummary";
import { removproduct } from "../../features/product/slice/cartSlice";
import styles from "./CartPage.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const products = useSelector((state) => state.product.cartproduct);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removproduct(id));
  };

  return (
    <div className={styles.cartPage}>
      <main className={styles.main}>
        <div className={styles.products}>
          {products.length > 0 ? (
            products.map((p) => (
              <Cart
                key={p.id}
                image={p.images?.[0] || "default.png"}
                details={p.details}
                title={p.name}
                color={p.color}
                price={p.price}
                quantity={p.quantity}
                subtotal={p.price * p.quantity}
                onRemove={() => handleRemove(p.id)}
              />
            ))
          ) : (
            <h1>No product found</h1>
          )}
        </div>
        <CartSummary />
      </main>
    </div>
  );
};

export default CartPage;
