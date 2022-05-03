import React from "react";
import { useParams } from "react-router-dom";

const RecipePage = () => {
	const {recipeId} = useParams();
	console.log(recipeId);
	return <div>{recipeId}</div>;
};

export default RecipePage;
