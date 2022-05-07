import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeLink = styled(Link)`
	color: white;
	text-decoration: none;
`;

export const RecipeLink = styled(Link)`
	color: white;
	text-decoration: none;
`;

export const TextWrapper = styled.div`
	position: fixed;
`

export const StyledParagraph = styled.p`
  font-size: 1.5rem;
`

export const StyledAside = styled.aside`
	background-color: #125b50;
	width: 12.5vw;
	padding: 0 1rem 0 1rem;
	min-height: 100vh;
	color: white;
`;

export const StyledH1 = styled.h1``;

export const StyledUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const Category = styled.li`
	margin-top: .5rem;
	&:hover {
		cursor: pointer;
	}
`;
