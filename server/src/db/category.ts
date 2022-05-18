import Recipe from "../models/recipe";

export const getCategories = async () => {
	const categoryCount = await Recipe.aggregate([
		{
			$unwind: "$category",
		},
		{
			$group: {
				_id: "$category",
				count: { $sum: 1 },
			},
		},
		{
			$sort: {
				count: -1,
				_id: -1,
			},
		},
		{
			$group: {
				_id: null,
				counts: {
					$push: { k: "$_id", v: "$count" },
				},
			},
		},
		{
			$replaceRoot: {
				newRoot: { $arrayToObject: "$counts" },
			},
		},
	]);
	return categoryCount;
};

export const getRecipeByCategoryName = async (categoryName: string) => {
	const recipes = await Recipe.find({ category: categoryName });
	return recipes;
};

export const getRecipeByCategoryQuery = async (searchQuery: string, categoryName: string) => {
	const recipes = await Recipe.find({ category: categoryName, title: { $regex: `${searchQuery}`, $options: "i" } });
	return recipes;
};
