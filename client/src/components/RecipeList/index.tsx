import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Ratings from "../RecipeListRatings";
import {
	StyledImg,
	StyledArticle,
	FlexDiv,
	StyledDescription,
	StyledTitle,
	FlexColumnDiv,
	TitleRatingBox,
	StyledSection,
	RecipeInfo,
	RecipeButton,
	FooterWrapper,
	ErrorMessage
} from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { getAllRecipes, getAllRecipesByCategoryName } from "../../features/recipeSlice";

const RecipeList = () => {
	const {categoryName} = useParams()
	const dispatch = useDispatch<AppDispatch>()
	const {recipes} = useSelector((state:RootState) => state.recipes)
	
	const calcAvgRating = (rating: number[]) => {
		return Math.round(rating.reduce((a: any, b: any) => a + b, 0) / rating.length);
	};

	useEffect(() => {
		if (categoryName) {
			dispatch(getAllRecipesByCategoryName(categoryName))
		}else{
			dispatch(getAllRecipes())
		}
		}, [categoryName]);

		return (
		<StyledSection>
			{recipes.length > 0 ? recipes.map((recipe) => (
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
			)) : <ErrorMessage>Här var det tomt!</ErrorMessage>}
		</StyledSection>
	);
};

export default RecipeList;
