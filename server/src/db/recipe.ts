import { ParsedQs } from "qs"
import Recipe from "../models/recipe"

export const getRecipes = async () => {
  const recipes = await Recipe.find({})
  return recipes
}

export const getRecipesByQuery = async (searchQuery:string) => {
  const recipes = await Recipe.find({title:{ $regex: `${searchQuery}`, $options: 'i' }})
  return recipes
}

export const getRecipesById = async (id:string) => {
  const recipes = await Recipe.find({"_id": id})
  return recipes
}