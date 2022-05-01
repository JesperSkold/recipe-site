import Category from "../models/category"
import Recipe from "../models/recipe"

export const getCategories = async () => {
  const categories = await Category.find({})
  return categories
}

export const getRecipeByCategoryId = async (categoryId:string) => {
  const recipes = await Recipe.find({category:categoryId})
  return recipes
} 

export const getRecipeByCategoryQuery = async (searchQuery: string, categoryId:string) => {
  const recipes = await Recipe.find({category:categoryId, title:{ $regex: `${searchQuery}`, $options: 'i' }})
  return recipes
}

//abstrahera ut till recipecategory directory?