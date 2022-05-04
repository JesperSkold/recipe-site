import React, { useState, useEffect } from "react";
import { getRecipes } from "../../api/getRecipes";
import { Recipe } from "../../interfaces/recipe";
import { Link } from "react-router-dom";
import Ratings from "../RecipeListRatings";
import {
	StyledImg,
	StyledArticle,
	FlexDiv,
	StyledDescription,
	StyledTitle,
	StyledRating,
	FlexColumnDiv,
	TitleRatingBox,
	StyledSection,
	RecipeInfo,
	RecipeButton,
	FooterWrapper,
} from "./style";

const RecipeList = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	
	const calcAvgRating = (rating: number[]) => {
		return Math.round(rating.reduce((a: any, b: any) => a + b, 0) / rating.length);
	};

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
									<Ratings rating={calcAvgRating(recipe.ratings)} />
							</TitleRatingBox>
							<StyledDescription>{recipe.description}</StyledDescription>
						</FlexColumnDiv>
					</FlexDiv>
					<FooterWrapper>
						<RecipeInfo>
							{recipe.ingredients.length} INGREDIENSER | {recipe.timeInMins}
						</RecipeInfo>
						<Link to={`/recipes/${recipe._id}`} style={{ alignSelf: "center" }}>
							<RecipeButton>Ta mig till receptet!</RecipeButton>
						</Link>
					</FooterWrapper>
				</StyledArticle>
			))}
		</StyledSection>
	);
};

export default RecipeList;
