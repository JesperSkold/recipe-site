import styled from "styled-components";
import { COLORS } from "../../styles/global-colors";

export const StyledImg = styled.img`
	height: auto;
	width: 20rem;
	border-radius: 1rem;
`;

export const StyledArticle = styled.article`
	margin: 1rem;
  background-color:${COLORS.primary};
	padding: 1rem;
  height: 15rem;
`;

export const StyledSection = styled.section``;

export const TitleRatingBox = styled.div`
	display: flex;
  width: 25rem;
`;

export const FlexDiv = styled.div`
	display: flex;
`;

export const StyledDescription = styled.p`
	width: 20rem;
	overflow-wrap: break-word;
	margin: 0 1rem 0 1rem;
`;

export const RecipeInfo = styled.h1`
  margin-left: 2.5rem;
`

export const FlexColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
  height: 10rem;
`;

export const StyledTitle = styled.h1`
font-size: 1.5rem;
overflow-wrap: break-word;
width: 20rem;
margin-left: 1rem;
align-self: center;
`;

export const StyledRating = styled.h1`
/* align-self: center; */
font-size: 1.5rem;
`

export const RecipeButton = styled.button`
height: 2.5rem;
background-color:${COLORS.secondary};
color: white;
border-radius: 1rem;
&:hover {
	cursor: pointer;
	background: none;
	color: black;
}
`

export const FooterWrapper = styled.div`
display: flex;
justify-content: space-between
`