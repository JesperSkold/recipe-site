import express from "express";
import { getRecipes, getRecipesById, getRecipesByQuery, postRecipeRating, postRecipeComment, getCommentsById } from "../db/recipe";
const router = express.Router();

router.get("/", async (req, res) => {
	if (req.query.search) {
    const searchQuery = req.query.search as string
		const recipes = await getRecipesByQuery(searchQuery);
		res.json(recipes);
	} else {
		const recipes = await getRecipes();
		res.json(recipes);
	}
});

router.get("/:recipeId/comments", async (req, res) => {
	const id = req.params.recipeId
  const comments = await getCommentsById(id)
  res.json(comments[0].comments)
})

router.get("/:recipeId", async (req, res) => {
  const id = req.params.recipeId
  const recipes = await getRecipesById(id)
  res.json(recipes)
});


router.post("/:recipeId/comments", async (req, res) => {
	const id = req.params.recipeId
	const updatedRecipe = await postRecipeComment(id, req.body)
	res.json(updatedRecipe)
})

router.post("/:recipeId/:rating", async (req, res) => {
	const id = req.params.recipeId
	const rating = Number(req.params.rating)
	const updatedRecipe = await postRecipeRating(id, rating)
	res.json(updatedRecipe)
})


export default router;
