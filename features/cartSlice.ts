
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartState { productId: string; count: number }

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartState[]>) => {
        state = action.payload;
        return state;
    },
    
    addToCart: (state, action: PayloadAction<CartState> ) => {
        if (state.find((item: CartState) => item.productId === action.payload.productId)) {
            state.map((item: CartState) => {
                if (item.productId === action.payload.productId) {
                    item.count += 1;
                }
            });
        } else {
            state.push(action.payload);
        }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
        state.map((item: CartState) => { 
        if (item.productId === action.payload) {
            state.splice(state.indexOf(item), 1);
        }
        });
    }

}
});

export const { setCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;