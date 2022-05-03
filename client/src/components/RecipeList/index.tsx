import React, { useState, useEffect } from "react";
import { getRecipes } from "../../api/getRecipes";
import { Recipe } from "../../interfaces/recipe";
import { Link } from "react-router-dom";
import { StyledImg, StyledArticle, FlexDiv, StyledDescription, StyledTitle, StyledRating, FlexColumnDiv, TitleRatingBox, StyledSection, RecipeInfo, RecipeButton } from "./style";

const RecipeList = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	useEffect(() => {
		const getAllRecipes = async () => {
			const recipes = await getRecipes();
			setRecipes(recipes);
		};
		getAllRecipes();
	}, []);
	return (
		<StyledSection>
			{recipes.map((recipe) => (
				<StyledArticle key={recipe._id}>
					<FlexDiv>
						<StyledImg src={recipe.imageUrl} alt={`Picture of ${recipe.title}`} />
						<FlexColumnDiv>
							<TitleRatingBox>
								<StyledTitle>{recipe.title}</StyledTitle>
								<StyledRating>{Math.round(recipe.ratings.reduce((a, b) => a + b, 0) / recipe.ratings.length)}/5</StyledRating>
							</TitleRatingBox>
							<StyledDescription>{recipe.description}</StyledDescription>
						</FlexColumnDiv>
					</FlexDiv>
					<FlexDiv>
						<RecipeInfo>
							{recipe.ingredients.length} INGREDIENSER | {recipe.timeInMins}
						</RecipeInfo>
						<Link to={`/recipes/${recipe._id}`}><RecipeButton>Ta mig till receptet!</RecipeButton></Link>
					</FlexDiv>
				</StyledArticle>
			))}
		</StyledSection>
	);
};

export default RecipeList;
