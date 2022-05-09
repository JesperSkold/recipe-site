import React, { useState, useEffect } from "react";
import { getRecipeById } from "../../api/getRecipes";
import { Recipe } from "../../interfaces/recipe";
import { useParams } from "react-router-dom";
import StarRating from "../StarRating";
import Ratings from "../RecipeListRatings";
import Comments from "../Comments";
import {
	RecipeImg,
	StyledMain,
	Description,
	IngredientLi,
	IngredientUl,
	InstructionLi,
	InstructionUl,
	DescriptionDiv,
	RecipeTitle,
	DescriptionMeta,
	DescriptionInfo,
	Wrapper,
	IngredientInstructionContainer,
	SubTitle,
	SubTitleContainer,
	RatingContainer,
	RatingTitle,
	RatingSubTitle,
} from "./style";

const RecipePage = () => {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState<Recipe[]>([]);
	const [showRating, setShowRating] = useState(true);
	
	const calcAvgRating = (rating: number[]) => {
		return Math.round(rating.reduce((a: any, b: any) => a + b, 0) / rating.length);
	};

	useEffect(() => {
		const getSingleRecipe = async () => {
			const recipe = await getRecipeById(recipeId!);
			setRecipe(recipe);
		};
		getSingleRecipe();
	}, [recipeId]);

	return (
		<>
			{recipe.length > 0 && (
				<StyledMain>
					<Wrapper>
						<RecipeTitle>{recipe[0].title}</RecipeTitle>{" "}
						<DescriptionDiv>
							<DescriptionMeta>
								<Description>{recipe[0].description}</Description>
								<DescriptionInfo>
									<Ratings rating={calcAvgRating(recipe[0].ratings)}></Ratings> | {recipe[0].ingredients.length} ingredienser | {recipe[0].timeInMins}
								</DescriptionInfo>
							</DescriptionMeta>
							<RecipeImg src={recipe[0].imageUrl}></RecipeImg>
						</DescriptionDiv>
					</Wrapper>
					<SubTitleContainer>
						<SubTitle>Ingredienser</SubTitle>
						<SubTitle>Gör så här!</SubTitle>
					</SubTitleContainer>
					<IngredientInstructionContainer>
						<IngredientUl>
							{recipe[0].ingredients.map((ingredient) => (
								<IngredientLi key={ingredient.ingredient}>
									{ingredient.amount} {ingredient.unit} {ingredient.ingredient}
								</IngredientLi>
							))}
						</IngredientUl>
						<InstructionUl>
							{recipe[0].instructions.map((instruction) => (
								<InstructionLi key={instruction}>{instruction}</InstructionLi>
							))}
						</InstructionUl>
					</IngredientInstructionContainer>
					{showRating ? (
						<RatingContainer>
							<RatingTitle>Vad tyckte du om receptet?</RatingTitle>
							<RatingSubTitle>Klicka på en stjärna för att ge ditt betyg</RatingSubTitle>
							<StarRating setShowRating={setShowRating} showRating={showRating}></StarRating>
						</RatingContainer>
					) : (
						<RatingContainer>
							<RatingTitle>Tack för ditt betyg!</RatingTitle>
						</RatingContainer>
					)}
					<Comments recipeId={recipe[0]._id}></Comments>
				</StyledMain>
			)}
		</>
	);
};

export default RecipePage;
