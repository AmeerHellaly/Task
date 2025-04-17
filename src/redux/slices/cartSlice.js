import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product=action.payload;
            const existingItem=state.items.find(item=>item.id===product.id);
            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
                state.items.push({
                    id:product.id,
                    name:product.name,
                    price:product.price,
                    image:product.image,
                    quantity:1
                })
            }
        },

    }
})
export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer
