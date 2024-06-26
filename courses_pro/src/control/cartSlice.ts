import { createSlice } from '@reduxjs/toolkit'
import courseItems from '../CourseItems'

export type stateType = {
    cartItems : Array<{
        id: number,
        title: string,
    }>,
    quantity:number,
    total:number
}


const initialState : stateType= {
    cartItems:courseItems,
    quantity:4,
    total:0
};


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cartItems = []
        },
        removeItem:(state,action) => {
            // action icinde payload var
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase:(state,action) => {
            console.log(23123)
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.quantity += 1;
        },
        decrease:(state,action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.quantity -= 1;
        },
        calculateTotal:(state) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
                total += item.quantity * item.price;
                quantity += item.quantity;
            });
            state.quantity = quantity;
            state.total = total;
        }
    }
});


export const {clearCart,removeItem,increase,decrease,calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;