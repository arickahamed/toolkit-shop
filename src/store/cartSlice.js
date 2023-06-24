const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        allProducts: [],
        cartItems: [],
        uniqueQuantity: 0,
        uniquePrice: 0,
        totalPrice: 0,
    },
    reducers: {
        addAllProducts(state, action) {
            state.allProducts.push(action.payload);
        },
        add(state, action) {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if(!itemInCart) {
                state.cartItems.push({...action.payload, quantity: 1})
                state.uniqueQuantity += 1;
            }
            state.totalPrice += action.payload.price;
        },
        remove(state, action) {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = removeItem;
            state.uniqueQuantity --;
            state.totalPrice -= action.payload.price;
        },
    },
});

export const { addAllProducts, add, remove } = cartSlice.actions;
export default cartSlice.reducer; 