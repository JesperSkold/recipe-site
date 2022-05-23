import React, { useEffect, useRef } from "react";
import { StyledSearchBar } from "./style";
import { getAllRecipesByCategoryQuery } from "../../features/recipeSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

const SearchBar = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { categoryName } = useParams();
	const searchInput = useRef<HTMLInputElement>(null);
	let placeHolderText: string;

	if (categoryName) {
		placeHolderText = `Sök i kategorin ${categoryName}...`;
	} else {
		placeHolderText = `Sök bland alla kategorier...`;
	}

	useEffect(() => {
		if (searchInput.current !== null) {
			searchInput.current.value = "";
		}
	}, [categoryName]);

	return (
		<StyledSearchBar
			placeholder={placeHolderText}
			onChange={(e) => dispatch(getAllRecipesByCategoryQuery({ categoryName, searchTerm: e.target.value }))}
			ref={searchInput}
		></StyledSearchBar>
	);
};

export default SearchBar;
