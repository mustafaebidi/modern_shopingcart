
import { createSlice } from '@reduxjs/toolkit'
import products from "../data.json"




const initialState = {
    items: products.items,
    "itemsInCart":[],
    type:"all"
}




const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addToCart: (state,action) => {
        return state

        
      },
      removeFromCart: (state,action) => {
        return state
        
      },
      setType: (state, action) => {
        state.type=action.payload

       
      },
    },
  })


export default productsSlice.reducer

export const {addToCart,removeFromCart,setType}=productsSlice.actions