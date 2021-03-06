import styled from "styled-components";
import { COLORS } from "../../global-styles/global-colors";
import { Link } from "react-router-dom";

export const StyledImg = styled.img`
	object-fit: cover;
	object-position: 50% 50%;
	height: 12rem;
	max-width: 12rem;
	border-radius: 1rem;
	@media (max-width:768px){
		align-self: center;
		margin-bottom: 1rem;
}
`;

export const RecipeLink = styled(Link)`
	align-self: center;
	text-decoration: none;
`

export const StyledArticle = styled.article`
	margin: 1rem;
	background-color: ${COLORS.primary};
	padding: 1rem;
	max-width: 40rem;
`;

export const ErrorMessage = styled.h1`
	max-width: 44rem;
	text-align: center;
`

export const StyledSection = styled.section`
`;

export const TitleRatingBox = styled.div`
	display: flex;

@media (max-width:768px){
	flex-direction: column;
	text-align: center;
}
`;

export const StyledTitle = styled.h1`
	font-size: 1.5rem;
	overflow-wrap: break-word;
	margin-left: 1rem;
	align-self: center;

	@media (max-width:768px){
		margin:1rem 0 0 0;
}
`;
export const FlexDiv = styled.div`
	display: flex;
	@media(max-width:768px){
		 flex-direction: column;
		 align-items: center;
	 }
`;

export const StyledDescription = styled.p`
	overflow-wrap: break-word;
	margin: 0 1rem 0 1rem;
	@media (max-width:768px){
		text-align: center;
	 }
`;

export const RecipeInfo = styled.h1`
	@media (max-width:768px){
		text-align: center;
	 }
`;

export const FlexColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;


export const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
	@media (max-width:768px){
		flex-direction: column;
	 }
`;
