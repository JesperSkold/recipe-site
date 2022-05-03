import styled from "styled-components";

export const StyledImg = styled.img`
	height: auto;
	width: 20rem;
	border-radius: 1rem;
`;

export const StyledArticle = styled.article`
	margin: 1rem;
  background-color:#FEE2C5;
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
`;

export const StyledRating = styled.h1`
font-size: 1.5rem;
`

export const RecipeButton = styled.button`
margin-left: 20rem;
height: 2.5rem;
align-self: center;
background-color:#125B50;
color: white;
border-radius: 1rem;
&:hover {
	cursor: pointer;
	background: none;
	color: black;
}
`