import styled from "styled-components";
import { COLORS } from "../../global-styles/global-colors";
import { Link } from "react-router-dom";

export const StyledImg = styled.img`
	object-fit: cover;
	object-position: 50% 50%;
	height: 12rem;
	width: 20rem;
	border-radius: 1rem;
`;

export const RecipeLink = styled(Link)`
	align-self: center;
	text-decoration: none;
`

export const StyledArticle = styled.article`
	margin: 1rem;
	background-color: ${COLORS.primary};
	padding: 1rem;
	width: 40rem;
`;

export const ErrorMessage = styled.h1`
	width: 44rem;
	text-align: center;
`

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
	margin-left: 1.5rem;
`;

export const FlexColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledTitle = styled.h1`
	font-size: 1.5rem;
	overflow-wrap: break-word;
	width: 20rem;
	margin-left: 1rem;
	align-self: center;
`;

export const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
`;
