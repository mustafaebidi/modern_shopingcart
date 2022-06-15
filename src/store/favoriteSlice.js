
import { createSlice } from '@reduxjs/toolkit'




const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:{
      itemsInFavorite:[],
      "stateOfitem":false
    },
    reducers: {


        addToFavorite:(state,action)=>{

        },

        removeFromFavorite: (state,action) => {
            return state
            
        },


    },
})


export default favoriteSlice.reducer

export const {addToFavorite,removeFromFavorite}=favoriteSlice.actions