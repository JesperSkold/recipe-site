import React from "react";
import { StyledSearchBar } from "./style";
import { getAllRecipesByCategoryQuery } from "../../features/recipeSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

const SearchBar = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { categoryName } = useParams();
	const placeHolderText = `Sök bland ${categoryName || "alla"} recept...` 
	return (
		<StyledSearchBar
			placeholder={placeHolderText}
			onChange={(e) => dispatch(getAllRecipesByCategoryQuery({ categoryName, searchTerm: e.target.value }))} onBlur={(e) => e.target.value = ""}
		></StyledSearchBar>
	);
};

export default SearchBar;
