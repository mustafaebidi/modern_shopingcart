
import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from './favoriteSlice'

import productsSlice from "./productsSlice"

export const store = configureStore({
  reducer: {products:productsSlice,favoriteSlice:favoriteSlice},
})

export default store