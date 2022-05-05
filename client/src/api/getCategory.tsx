export const getCategories = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category`)
  const recipes = await response.json()
  return recipes
}

export const getCategoryCount = async (categoryName: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category/${categoryName}/count`)
  const count = await response.json()
  return count
}