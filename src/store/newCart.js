import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "carts",
    initialState: initialState,
    reducers: {
        productAddedToCart: (carts, action) => {
            carts.push({
                id: ++lastId,
                name: action.payload.name,
                price: action.payload.price,
                quantity: action.payload.quantity,
                amount: action.payload.amount
            });
        },
        productRemovedFromCart: (carts, action) => {
            carts.filter(product => product.id !== action.payload.id);
        }
    }
});

export const { productAddedToCart, productRemovedFromCart } = slice.actions;
export default slice.reducer;
