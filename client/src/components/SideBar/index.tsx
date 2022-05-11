import React, { useState, useEffect } from "react";
import { getCategories } from "../../api/getCategory";
import { StyledAside, StyledH1, StyledUl, Category, HomeLink, RecipeLink, TextWrapper, StyledParagraph } from "./style";
import { useParams } from "react-router-dom";
import CategoryAmount from "../CategoryAmount";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getAllRecipes } from "../../features/recipeSlice";

const SideBar = () => {
	const params = useParams()
	const {categoryName} = useParams()
	const [category, setCategory] = useState<string[]>([]);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const getAllCategories = async () => {
			const categories = await getCategories();
			setCategory(categories);
		};
		getAllCategories();
	}, []);

	return (
		<StyledAside>
			<TextWrapper>
			<StyledH1>Kategorier</StyledH1>
			<StyledUl>
				{category.map((category) => (
					<RecipeLink to={`/category/${category}`} key={category} paramCategory={categoryName} category={category}>
						<Category>
							{category.charAt(0).toUpperCase() + category.slice(1)}
							<CategoryAmount category={category}></CategoryAmount>
						</Category>
					</RecipeLink>
				))}
			</StyledUl>
			<HomeLink to={"/"} onClick={() => dispatch(getAllRecipes())}>
				{Object.getOwnPropertyNames(params).length > 0 && <StyledParagraph>Visa alla</StyledParagraph>}
			</HomeLink>
			</TextWrapper>
		</StyledAside>
	);
};

export default SideBar;
