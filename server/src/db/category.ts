// import Category from "../models/category"
import Recipe from "../models/recipe"

export const getCategories = async () => {
  // const categories = await Recipe.find({}, {category:true, "_id": false})
  const categories = await Recipe.find().distinct("category")
  return categories
}

export const getRecipeByCategoryName = async (categoryName:string) => {
  const recipes = await Recipe.find({category:categoryName})
  return recipes
} 

export const getRecipeByCategoryQuery = async (searchQuery: string, categoryName:string) => {
  const recipes = await Recipe.find({category:categoryName, title:{ $regex: `${searchQuery}`, $options: 'i' }})
  return recipes
}

export const getCategoryCount = async (categoryName:string) => {
  const categoryCount = await Recipe.find({category:categoryName}, {category:true, "_id":false})
  return categoryCount
}
//abstrahera ut till recipecategory directory?