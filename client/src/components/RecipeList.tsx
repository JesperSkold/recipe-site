import React, {useState, useEffect} from 'react'
import { getRecipes } from '../api/getRecipes'
import { Recipe } from '../interfaces/recipe'

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    const getAllRecipes = async () => {
      const recipes = await getRecipes()
      setRecipes(recipes)
    }
    getAllRecipes()
  }, [])
  return (
    <ul>{recipes.map(recipe => <li key={recipe._id}>{recipe.title}</li>)}</ul>
  )
}

export default RecipeList