import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartproduct: [],
    wishlist: [],
    price: {
        discount: 0,
        totalcount: 0,
        finalcount: 0,
        message: ""
    },
}

const calculatePrice = (state) => {
    state.price.totalcount = state.cartproduct.reduce((sum, item) => {
        return sum + Number(item.price) * Number(item.quantity)
    }, 0)
}
const discount = (state) => {
    if (state.cartproduct.length >= 5) {
        state.price.discount = state.price.totalcount * 0.1;
    } else {
        state.price.discount = 0
        state.price.message = "Get 10% off when you buy five products"
    }
}
const finalcount = (state) => state.price.finalcount = state.price.totalcount - state.price.discount


export const productsSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        addproduct: (state, action) => {
            const item = state.cartproduct.find((p) => { return p.id === action.payload.id })
            item ? item.quantity += 1
                : state.cartproduct.push({ ...action.payload, quantity: 1 })

            calculatePrice(state);
            discount(state);
            finalcount(state);

        },
        removproduct: (state, action) => {
            state.cartproduct = state.cartproduct.filter(p => p.id !== action.payload);
            calculatePrice(state);
            discount(state);
            finalcount(state);
        },
        addwishlist: (state, action) => {
            const item = state.wishlist.find((p) => { return p.id === action.payload.id })
            !item && state.wishlist.push(action.payload)
        },
        removwishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(p => p.id !== action.payload.id);
        },
    }
})
export const { addproduct, removproduct, addwishlist, removwishlist } = productsSlice.actions
export default productsSlice.reducer;


