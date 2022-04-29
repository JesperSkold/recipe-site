import Recipe from "../models/recipe"

export const getRecipes = async () => {
  const recipes = await Recipe.find({})
  return recipes
}