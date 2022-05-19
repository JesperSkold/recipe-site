import React, { useState, useEffect } from "react";
import { StyledAside, StyledH1, StyledUl, Category, HomeLink, RecipeLink, TextWrapper, StyledParagraph, MenuLabel, Icon } from "./style";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getAllRecipes } from "../../features/recipeSlice";
import MediaQuery from "react-responsive";
import { getAllCategories } from "../../features/categorySlice";
import { useSelector } from "react-redux";

const SideBar = () => {
	const params = useParams();
	const { categoryName } = useParams();
	const [click, setClick] = useState(false);
	const dispatch = useDispatch<AppDispatch>();
	const {categories} = useSelector((state:RootState) => state.categories)

	useEffect(() => {
		dispatch(getAllCategories())
	}, []);

	return (
		<>
			<MediaQuery minWidth={835}>
				<StyledAside>
					<TextWrapper>
						<StyledH1>Kategorier</StyledH1>
						<StyledUl>
							{categories.length > 0 && Object.keys(categories[0]).map((category) => (
								<RecipeLink to={`/category/${category}`} key={category} paramcategory={categoryName} category={category}>
									<Category>
										{category.charAt(0).toUpperCase() + category.slice(1)} ({categories[0][category]})
									</Category>
								</RecipeLink>
							))}
						</StyledUl>
						<HomeLink to={"/"} onClick={() => dispatch(getAllRecipes())}>
							{Object.getOwnPropertyNames(params).length > 0 && <StyledParagraph>Visa alla</StyledParagraph>}
						</HomeLink>
					</TextWrapper>
				</StyledAside>
			</MediaQuery>
			<MediaQuery maxWidth={835}>
				<MenuLabel onClick={() => setClick(!click)} clicked={click}>
					<Icon clicked={click}>&nbsp;</Icon>
				</MenuLabel>
				{click && (
					<StyledAside hamburger={true}>
						<TextWrapper>
							<StyledH1 hamburger={true}>Kategorier</StyledH1>
							<StyledUl>
							{categories.length > 0 && Object.keys(categories[0]).map((category) => (
								<RecipeLink to={`/category/${category}`} key={category} paramcategory={categoryName} category={category}>
									<Category>
										{category.charAt(0).toUpperCase() + category.slice(1)} ({categories[0][category]})
									</Category>
								</RecipeLink>
							))}
							</StyledUl>
							<HomeLink to={"/"} onClick={() => dispatch(getAllRecipes())}>
								{Object.getOwnPropertyNames(params).length > 0 && <StyledParagraph>Visa alla</StyledParagraph>}
							</HomeLink>
						</TextWrapper>
					</StyledAside>
				)}
			</MediaQuery>
		</>
	);
};

export default SideBar;
