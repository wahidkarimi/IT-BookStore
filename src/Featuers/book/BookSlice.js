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
  return data
});

export const fetchBookDetailes = createAsyncThunk('book/fetchBookDetailes', async(searchString) => {
  const res = await fetch(`https://api.itbook.store/1.0/books/${searchString}`) 
  const data = await res.json();
  return data;
})



export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBooks.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(fetchBooks.rejected, (state) => {
      state.loading = true
    })
    .addCase(fetchSearchedBook.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchSearchedBook.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(fetchSearchedBook.rejected, (state) => {
      state.loading = true
    })
    .addCase(fetchBookDetailes.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchBookDetailes.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(fetchBookDetailes.rejected, (state) => {
      state.loading = true
    })
  }
})



export default bookSlice.reducer;