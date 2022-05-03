import React, { useState, useEffect } from "react";
import { getCategories } from "../../api/getCategory";
import { Categories } from "../../interfaces/category";
import { StyledAside, StyledH1, StyledUl, StyledLi } from "./style";

const SideBar = () => {
	const [category, setCategory] = useState<Categories[]>([]);

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
					<StyledLi key={category._id}>{category.category}</StyledLi>
				))}
			</StyledUl>
		</StyledAside>
	);
};

export default SideBar;
