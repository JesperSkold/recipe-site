import express from "express"
import {getCategories, getRecipeByCategoryName, getRecipeByCategoryQuery, getCategoryCount} from "../db/category"
const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await getCategories()
  res.json(categories)
})

router.get('/:categoryName/recipes', async (req, res) => {
  const categoryName = req.params.categoryName
  if (req.query.search) {
    const searchQuery = req.query.search as string
		const recipes = await getRecipeByCategoryQuery(searchQuery, categoryName);
		res.json(recipes);
  }else{
    const recipes = await getRecipeByCategoryName(categoryName)
    res.json(recipes)
  }
})

router.get('/:categoryName/count', async (req, res) => {
  const categoryName = req.params.categoryName
  const categoryCount = await getCategoryCount(categoryName)
  res.json(categoryCount.length)
})

export default router