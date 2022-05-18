import express from "express";
import { getCategories, getRecipeByCategoryName, getRecipeByCategoryQuery} from "../db/category";
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const categories = await getCategories();
		res.status(200).json(categories);
	} catch (err) {
		next(err);
	}
});

router.get("/:categoryName/recipes", async (req, res, next) => {
  try{
    const categoryName = req.params.categoryName;
    if (req.query.search) {
      const searchQuery = req.query.search as string;
      const recipes = await getRecipeByCategoryQuery(searchQuery, categoryName);
      res.status(200).json(recipes);
    } else {
      const recipes = await getRecipeByCategoryName(categoryName);
      res.status(200).json(recipes);
    }
  } catch(err) {
    next(err)
  }
});

export default router;
