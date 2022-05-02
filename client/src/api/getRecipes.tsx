export const getRecipes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes`)
  const recipes = await response.json()
  return recipes
}