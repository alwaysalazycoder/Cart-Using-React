import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer({
    cartItems : [],subTotal : 0,shipping : 0, tax : 0,total : 0
},{

    addToCart : (state,action)=>{
        const item = action.payload;
        const isItemExist = state.cartItems.find(i => i.name === item.name);

        if(isItemExist){
            state.cartItems.forEach(i=>{
                if(i.name === item.name){
                    i.quantity+=1;
                }
            })
                }
        else{
            state.cartItems.push(item)
        }
    },
    decrement : (state,action)=>{
        const item = state.cartItems.find((i)=>i.name === action.payload);
        if(item.quantity > 1) {
            state.cartItems.forEach((i)=> {
                if(i.name === item.name){
                    i.quantity -= 1;
                }
            })
        }
    },
    deleteFromCart : (state,action)=> {
        state.cartItems = state.cartItems.filter((i)=> i.name !== action.payload);
    },
    
})