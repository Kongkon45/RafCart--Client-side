import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
    name: "carts",
    initialState: {
        carts : []
    },
    reducers: {
        addCart: (state:any, action:any) => {
            const item = state.carts.find((cart:any) => cart._id === action.payload._id);
            if (item) {
                item.quantity ++
            }
            else {
                state.carts.push({...action.payload, quantity : 1})
            }
        },
        removeCart: (state:any, action:any) => {
            state.carts = state.carts.filter((cart:any)=>cart._id !== action.payload._id)
        }, 
        incrementQuantity: (state:any, action:any) => {
            const item = state.carts.find((cart:any) => cart._id === action.payload._id);
            if (item) {
                item.quantity ++
            }
        }, 
        decrementQuantity: (state:any, action:any) => {
            const item = state.carts.find((cart:any) => cart._id === action.payload._id);
            if (item && item.quantity > 1) {
                item.quantity --
            }
        }
    }
})

export const { addCart, removeCart, decrementQuantity, incrementQuantity } = cartsSlice.actions;
export default cartsSlice.reducer;