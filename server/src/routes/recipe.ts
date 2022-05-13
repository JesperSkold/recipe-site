import express from "express";
import Error from "../interfaces/error";
import { getRecipes, getRecipesById, getRecipesByQuery, postRecipeRating, postRecipeComment, getCommentsById } from "../db/recipe";
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		if (req.query.search) {
			const searchQuery = req.query.search as string;
			const recipes = await getRecipesByQuery(searchQuery);
			res.status(200).json(recipes);
		} else {
			const recipes = await getRecipes();
			res.status(200).json(recipes);
		}
	} catch (err) {
		next(err);
	}
});

router.get("/:recipeId/comments", async (req, res, next) => {
	try {
		const id = req.params.recipeId;
		const comments = await getCommentsById(id);
		res.status(200).json(comments[0].comments);
	} catch (err) {
		next(err);
	}
});

router.get("/:recipeId", async (req, res, next) => {
	try {
		const id = req.params.recipeId;
		const recipes = await getRecipesById(id);
		if (!recipes.length) {
			const err: Error = new Error(`Recipe with id ${id} not found`);
			err.status = 404;
			throw err;
		}
		res.status(200).json(recipes);
	} catch (err) {
		next(err);
	}
});

router.post("/:recipeId/comments", async (req, res, next) => {
	try {
		const id = req.params.recipeId;
		const updatedRecipe = await postRecipeComment(id, req.body);
		res.status(200).json(updatedRecipe);
	} catch (err) {
		next(err);
	}
});

router.post("/:recipeId/:rating", async (req, res, next) => {
	try {
		const id = req.params.recipeId;
		const rating = Number(req.params.rating);
		if (rating !== 1 && rating !== 2 && rating !== 3 && rating !== 4 && rating !== 5) {
			const err: Error = new Error(`Rating must be 1-5. Not ${rating}`);
			throw err;
		}
		const updatedRecipe = await postRecipeRating(id, rating);
		res.status(200).json(updatedRecipe);
	} catch (err) {
		next(err);
	}
});

export default router;
