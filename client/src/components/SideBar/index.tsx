import React, { useState, useEffect } from "react";
import { getCategories } from "../../api/getCategory";
import { StyledAside, StyledH1, StyledUl, StyledLi } from "./style";
import CategoryAmount from "../CategoryAmount";

const SideBar = () => {
	const [category, setCategory] = useState<string[]>([]);

	useEffect(() => {
		const getAllCategories = async () => {
			const categories = await getCategories();
			setCategory(categories);
		};
		getAllCategories();
	}, []);

	return (
		<StyledAside>
			<StyledH1>Kategorier</StyledH1>
			<StyledUl>
				{category.map((category) => (
					<StyledLi key={category}>{category.charAt(0).toUpperCase() + category.slice(1)}<CategoryAmount category={category}></CategoryAmount></StyledLi>
				))}
			</StyledUl>
		</StyledAside>
	);
};

export default SideBar;
