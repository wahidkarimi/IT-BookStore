import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: false
}



 export const fetchBooks = createAsyncThunk('book/fetchBooks', async()=>{
  const res = await fetch("https://api.itbook.store/1.0/new") 
  const data = await res.json()
  return data
});

export const fetchSearchedBook = createAsyncThunk('book/fetchSearchedBook', async(searchString) => {
  const res = await fetch(`https://api.itbook.store/1.0/search/${searchString}`) 
  const data = await res.json()
  console.log(data)
  return data
});

export const fetchBookDetailes = createAsyncThunk('book/fetchBookDetailes', async(searchString) => {
  const res = await fetch(`https://api.itbook.store/1.0/books/${searchString}`) 
  const data = await res.json();
  console.log(data)
  return data;
})



export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchBooks.pending]: (state, action) =>{
      state.loading = true
    },
    [fetchBooks.fulfilled]: (state, action) =>{
      state.loading = false
      state.data = action.payload
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loading = true
    },
    [fetchSearchedBook.pending]: (state, action) =>{
      state.loading = true
    },
    [fetchSearchedBook.fulfilled]: (state, action) =>{
      state.loading = false
      state.data = action.payload
    },
    [fetchSearchedBook.rejected]: (state, action) => {
      state.loading = true
    },
    [fetchBookDetailes.pending]: (state, action) =>{
      state.loading = true
    },
    [fetchBookDetailes.fulfilled]: (state, action) =>{
      state.loading = false
      state.data = action.payload
    },
    [fetchBookDetailes.rejected]: (state, action) => {
      state.loading = true
    }
  }
})



export default bookSlice.reducer;