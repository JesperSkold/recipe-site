export const postComment = async (recipeId: string, comment: any) => {
const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/comments`, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: comment.name,
			comment: comment.comment
		}),
	})
  return response.json()
};
