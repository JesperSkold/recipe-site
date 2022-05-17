import styled from "styled-components";
import { COLORS } from "../../global-styles/global-colors";

export const RecipeImg = styled.img`
	height: auto;
	width: 30rem;
	padding: 1rem;
	border-radius: 100%;

	@media (max-width: 1440px) {
		width: 18rem;
	}
`;

export const StyledMain = styled.main`
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${COLORS.primary};
	min-height: 100vh;
`;

export const Wrapper = styled.div`
	padding: 3rem 0;
`;

export const Description = styled.p`
	overflow-wrap: break-word;
	text-align: center;
	max-width: 30rem;

	@media (max-width: 500px) {
		width: 80vw;
	}
`;

export const DescriptionMeta = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const DescriptionDiv = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const DescriptionInfo = styled.div`
	background: ${COLORS.secondary};
	color: white;
	padding: 1rem;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	h1 {
		margin-top: 12px;
		margin-right: 10px;
	}
`;

export const IngredientUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	background: ${COLORS.secondary};
`;

export const IngredientLi = styled.li`
	padding: 1rem;
	max-width: 15rem;
	overflow-wrap: break-word;
	&:first-child {
		margin-top: 0;
	}
`;

export const IngredientInstructionContainer = styled.div`
	margin: 2rem 2rem;
	color: white;
	display: flex;

	@media(max-width:375px){
		flex-direction: column;
	}
`;

export const InstructionLi = styled.li`
	margin: 1rem 0;
	padding: 1rem;
	background: ${COLORS.secondary};
	overflow-wrap: break-word;
	max-width: 30rem;
	&:first-child {
		margin-top: 0;
	}
	&:nth-child(odd) {
		background: ${COLORS["secondary-variant"]};
	}
	@media(max-width:375px){
		margin: 1rem 0;
	}
`;
export const InstructionUl = styled.ul`
	list-style: none;

	@media(max-width:375px){
		padding: 0;
	}
`;
export const InstructionTitle = styled.h1`
	margin: -0.85rem 0 0 0;
	color: black;
	@media(max-width:375px){
		margin: 0;
	}
`;

export const RecipeTitle = styled.h1`
	text-align: center;
	font-size: 2.5rem;
`;

export const IngredientTitle = styled.h1`
	margin: 0;
	padding: 0;
	height: 3rem;
	color: black;
	background: ${COLORS.primary};
`;


export const RatingContainer = styled.div`
	text-align: center;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 1rem;
`;

export const RatingTitle = styled.h1``;

export const RatingSubTitle = styled.h2``;
