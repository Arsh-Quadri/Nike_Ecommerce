import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartState: false,
    cartItems: [],
};

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;

        },
        setAddItemToCart: (state, action) => {
            state.cartItems.push(action.payload)
        }
    }
});

export const { setOpenCart, setCloseCart, setAddItemToCart } = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export default cartSlice.reducer;
