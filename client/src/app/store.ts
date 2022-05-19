import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipeSlice"
import categoryReducer from "../features/categorySlice"

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    categories: categoryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch