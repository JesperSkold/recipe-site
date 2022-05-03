import React from "react";
import SearchBar from "../SearchBar";
import SideBar from "../SideBar";
import RecipeList from "../RecipeList";
import { StyledWrapper, StyledMain } from "./style";

const HomePage = () => {
	return (
		<StyledWrapper>
			<SideBar></SideBar>
			<StyledMain>
				<SearchBar></SearchBar>
				<RecipeList></RecipeList>
			</StyledMain>
		</StyledWrapper>
	);
};

export default HomePage;
