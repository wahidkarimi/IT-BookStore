import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../Featuers/book/BookSlice'


export const store = configureStore({
  reducer: {
     book:  bookReducer
  },
})