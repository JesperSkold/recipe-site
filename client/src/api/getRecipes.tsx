export const getRecipes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes`)
  const recipes = await response.json()
  return recipes
}

export const getRecipeById = async (recipeId:string) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}`)
  const recipe = await response.json()
  return recipe
}