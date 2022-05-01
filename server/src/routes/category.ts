import express from "express"
import {getCategories, getRecipeByCategoryId, getRecipeByCategoryQuery} from "../db/category"
const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await getCategories()
  res.json(categories)
})

router.get('/:categoryId/recipes', async (req, res) => {
  const id = req.params.categoryId
  if (req.query.search) {
    const searchQuery = req.query.search as string
		const recipes = await getRecipeByCategoryQuery(searchQuery, id);
		res.json(recipes);
  }else{
    const recipes = await getRecipeByCategoryId(id)
    res.json(recipes)
  }
})

// router.get('/:categoryId/recipes/?search', async (req, res) => {
//   console.log(req.params, "PARAMS");
//   console.log(req.query, "PARAMS");
  
// })

export default router