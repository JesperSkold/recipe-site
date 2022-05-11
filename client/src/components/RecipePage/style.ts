import styled from "styled-components";
import { COLORS } from "../../global-styles/global-colors";

export const RecipeImg = styled.img`
height:auto;
width: 30rem;
padding: 1rem;
border-radius: 100%;
`;

export const StyledMain = styled.main`
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* width: 60rem; */
	background: ${COLORS.primary};
	min-height: 100vh;
`;

export const Wrapper = styled.div`
	padding: 3rem;
`;

export const Description = styled.p`
	overflow-wrap: break-word;
	text-align: center;
	width: 30rem;
`;

export const DescriptionMeta = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const DescriptionDiv = styled.div`
	display: flex;
`;

export const DescriptionInfo = styled.div`
	background: ${COLORS.secondary};
	color: white;
	padding: 1rem;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	h1{
		margin-top: 12px;
		margin-right: 10px;
	}
`;

export const IngredientUl = styled.ul`
	list-style: none;
	/* padding: 1rem; */
	padding: 0;
	margin: 0;
	background: ${COLORS.secondary};
`;

export const IngredientLi = styled.li`
/* margin-top:1rem; */
padding: 1rem;
width: 15rem;
overflow-wrap: break-word;
&:first-child{
		margin-top: 0;
	}
`;

export const IngredientInstructionContainer = styled.div`
	padding: 0 2rem 2rem 2rem;
	color: white;
	display: flex;
`;

export const InstructionLi = styled.li`
	margin: 1rem;
	padding: 1rem;
	background: ${COLORS.secondary};
  overflow-wrap: break-word;
  width: 30rem;
	&:first-child{
		margin-top: 0;
	}
	&:nth-child(odd) {
		background: ${COLORS["secondary-variant"]};
	}
`;
export const InstructionUl = styled.ul`
	list-style: none;
`;


export const RecipeTitle = styled.h1`
	text-align: center;
  font-size: 2.5rem;
`;

export const SubTitle = styled.h1`
	padding: 0;
	margin: 0;
`;

export const IngredientTitle = styled.h1`
margin: 0;
padding: 0;
height: 3rem;
color: black;
background: ${COLORS.primary};
`

export const InstructionTitle = styled.h1`
margin: -.7rem 0 0 1rem;
color: black;
`

export const SubTitleContainer = styled.div`
	display: flex;
	padding: 0 2rem;
	/* gap: 8.5rem; */
`;


export const RatingContainer = styled.div`
text-align: center;
border-top: 1px solid black;
border-bottom: 1px solid black;
padding: 1rem;
`

export const RatingTitle = styled.h1`
`

export const RatingSubTitle = styled.h2``