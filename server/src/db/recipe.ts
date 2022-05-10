import Recipe from "../models/recipe";

export const getRecipes = async () => {
	const recipes = await Recipe.find({});
	return recipes;
};

export const getRecipesByQuery = async (searchQuery: string) => {
	const recipes = await Recipe.find({ title: { $regex: `${searchQuery}`, $options: "i" } });
	return recipes;
};

export const getRecipesById = async (id: string) => {
	const recipes = await Recipe.find({ _id: id });
	return recipes;
};

export const getCommentsById = async (id: string) => {
  const comments = await Recipe.find({_id: id}, {comments:true, _id:false})
  return comments
}

export const postRecipeRating = async (id: string, rating: number) => {
	return await Recipe.findByIdAndUpdate(id, { $push: { ratings: [rating]}}, {new:true});
};

export const postRecipeComment = async (id: string, comment: any) => {
	return await Recipe.findByIdAndUpdate(id, { $push: { comments: comment }}, {new:true});
};
