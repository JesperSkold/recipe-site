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

export const getRecipesByCategoryName = async (categoryName:string) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category/${categoryName}/recipes`)
  const recipe = await response.json()
  return recipe
}

export const getRecipeByQuery = async (categoryName: string | undefined, searchTerm: string) => {
  if (categoryName) {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category/${categoryName}/recipes/?search=${searchTerm}`)
    const recipe = await response.json()
    return recipe
  }else{
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/?search=${searchTerm}`)
    const recipe = await response.json()
    return recipe
  }
}

export const getCommentsById = async (recipeId: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/comments`)
  const comments = await response.json()
  return comments
}