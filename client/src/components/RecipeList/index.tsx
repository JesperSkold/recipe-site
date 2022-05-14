import React, { useEffect } from "react";
import calcAvgRating from "../../utils/calculateAverageRating";
import { Link, useParams } from "react-router-dom";
import Ratings from "../RecipeListRatings";
import Button from "../Button"
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
	FooterWrapper,
	ErrorMessage,
	RecipeLink
} from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { getAllRecipes, getAllRecipesByCategoryName } from "../../features/recipeSlice";
import MediaQuery from "react-responsive";

const RecipeList = () => {
	const {categoryName} = useParams()
	const dispatch = useDispatch<AppDispatch>()
	const {recipes, loading} = useSelector((state:RootState) => state.recipes)
	
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
						<MediaQuery minWidth={769}>
						<StyledImg src={recipe.imageUrl} alt={`Picture of ${recipe.title}`} />
						</MediaQuery>
						<FlexColumnDiv>
							<TitleRatingBox>
								<StyledTitle>{recipe.title}</StyledTitle>
									<Ratings rating={calcAvgRating(recipe.ratings)} />
							</TitleRatingBox>
							<MediaQuery maxWidth={768}>
						<StyledImg src={recipe.imageUrl} alt={`Picture of ${recipe.title}`} />
						</MediaQuery>
							<StyledDescription>{recipe.description}</StyledDescription>
						</FlexColumnDiv>
					</FlexDiv>
					<FooterWrapper>
						<RecipeInfo>
							{recipe.ingredients.length} INGREDIENSER | {recipe.timeInMins}
						</RecipeInfo>
						<RecipeLink to={`/recipes/${recipe._id}`} >
							<Button>Ta mig till receptet!</Button>
						</RecipeLink>
					</FooterWrapper>
				</StyledArticle>
			)) : loading === "succeeded" ? <ErrorMessage>Här var det tomt!</ErrorMessage> : null}
		</StyledSection>
	);
};

export default RecipeList;
