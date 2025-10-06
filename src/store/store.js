


import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/product/slice/cartSlice";
export const store = configureStore({
    reducer: {
        product: productsSlice,
    },
})
// store.subscribe(() => {
//   console.log("Cart Products:", store.getState().product.cartproduct);
// });
// store.subscribe(() => {
//   console.log("discount :", store.getState().product.Price.discount);
//   console.log("totalCart :", store.getState().product.Price.totalCart);
//   console.log("finalcount :", store.getState().product.Price.finalcount);
// });
