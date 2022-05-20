import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../api/getCategory"

export const getAllCategories = createAsyncThunk(
  "recipes/getAllCategories",
  async () => {
    return await getCategories()
  }
)

interface CategoryWithAmount {
	[key: string]: number
}

interface CategoryState {
  categories: CategoryWithAmount[],
  loading: 'idle' | 'pending' | 'succeeded' | 'rejected'
}

const initialState = {
  categories: [],
  loading: "idle",
} as CategoryState

export const categorySlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getAllCategories.pending, (state, action) => {
      state.loading = "pending"
    })
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.categories = action.payload
    })
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loading = "rejected"
    })
    
  }
})

export default categorySlice.reducer