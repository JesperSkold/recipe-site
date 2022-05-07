import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRecipes, getRecipesByCategoryName, getRecipeByQuery } from "../api/getRecipes"
import { Recipe } from "../interfaces/recipe";

export const getAllRecipes = createAsyncThunk(
  "recipes/getAllRecipes",
  async () => {
    return await getRecipes()
  }
)

export const getAllRecipesByCategoryName = createAsyncThunk(
  "recipes/getAllRecipesByCategoryName",
  async (category:any) => {
    return await getRecipesByCategoryName(category)
  }
)

export const getAllRecipesByCategoryQuery = createAsyncThunk(
  "recipes/getAllRecipesByCategoryQuery",
  async (payload:any) => {
    const {categoryName, searchTerm} = payload
    console.log(categoryName, searchTerm);
    return await getRecipeByQuery(categoryName, searchTerm)
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

    builder.addCase(getAllRecipesByCategoryName.pending, (state, action) => {
      state.loading = "pending"
    })
    builder.addCase(getAllRecipesByCategoryName.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.recipes = action.payload
    })
    builder.addCase(getAllRecipesByCategoryName.rejected, (state, action) => {
      state.loading = "rejected"
    })

    builder.addCase(getAllRecipesByCategoryQuery.pending, (state, action) => {
      state.loading = "pending"
    })
    builder.addCase(getAllRecipesByCategoryQuery.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.recipes = action.payload
    })
    builder.addCase(getAllRecipesByCategoryQuery.rejected, (state, action) => {
      state.loading = "rejected"
    })
    
  }
})


export default recipeSlice.reducer