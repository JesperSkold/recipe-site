import styled from "styled-components";
import { COLORS } from "../../global-styles/global-colors";

export const Wrapper = styled.div`
	margin: auto;
	width: 35vw;
		
	@media (max-width:500px){
		width: 70vw;
	}

`;

export const CommentsH1 = styled.h1`
	align-self: flex-start;
	text-decoration: underline;
`;

export const ThanksH1 = styled.h1`
text-align:center
`

export const CommentTextArea = styled.textarea`
	width: 100%;
	height: 10rem;
	padding: 1rem;
	box-sizing: border-box;
`;

export const CommentNameInput = styled.input`
	padding: 1rem 1rem;
	width: 130%;
`;


export const CommentForm = styled.form`
	margin: 1rem 0;
	width: inherit;
`;

export const CommentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width:500px){
		flex-direction: column;
		text-align: center;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
	margin-top: .5rem;
`;

export const CommentUl = styled.ul`
	margin: 0;
	padding: 0;
	width: inherit;
	list-style: none;
`;

export const CommentLi = styled.li`
	background: ${COLORS.secondary};
	color: white;
	padding: 1rem;
	margin: 1rem 0;
	overflow-wrap: break-word;
	background: ${COLORS.secondary};
	&:nth-child(odd) {
		background: ${COLORS["secondary-variant"]};
	}
`;

export const CommentName = styled.h2``;

export const CommentDate = styled.p``;

export const CommentText = styled.p``;

export const ErrorUl = styled.ul`
	display: flex;
	flex-direction: column;
`

export const ErrorLi = styled.li`
	color: red;
`