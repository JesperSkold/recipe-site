import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRecipes } from "../api/getRecipes"
import { Recipe } from "../interfaces/recipe";

export const getAllRecipes = createAsyncThunk(
  "/",
  async () => {
    return await getRecipes()
  }
)

interface RecipesState {
  recipes: Recipe[],
  loading: 'idle' | 'pending' | 'succeeded' | 'rejected'
}

const initialState = {
  recipes: [],
  loading: "idle",
} as RecipesState

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.pending, (state, action) => {
      state.loading = "pending"
    })
    builder.addCase(getAllRecipes.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.recipes = action.payload
    })
    builder.addCase(getAllRecipes.rejected, (state, action) => {
      state.loading = "rejected"
    })
  }
})


export default recipeSlice.reducer