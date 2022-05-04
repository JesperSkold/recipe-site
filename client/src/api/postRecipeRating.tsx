export const postRecipeRating = async (recipeId: string, rating: number) => {
	await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/${rating}`, {
    method:'POST'
  });
};
