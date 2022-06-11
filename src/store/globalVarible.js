
import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    showUlOfType: true
}


const productsSlice = createSlice({
    name: 'globalvar',
    initialState,
    reducers: {
      addToCart: (state,action) => {
        
      },
      removeFromCart: (state,action) => {
        
      },
      setType: (state, action) => {
        state.type=action.payload

       
      },
    },
  })


export default productsSlice.reducer

export const {addToCart,removeFromCart,setType}=productsSlice.actions