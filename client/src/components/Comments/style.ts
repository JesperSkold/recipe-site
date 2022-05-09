import styled from "styled-components";
import { COLORS } from "../../global-styles/global-colors";

export const Wrapper = styled.div`
  margin: auto;
	width: 40rem;
	padding: 0 5rem 5rem 2rem;
`;

export const CommentsH1 = styled.h1`
	align-self: flex-start;
`;

export const CommentTextArea = styled.textarea`
	width: inherit;
  padding: 1rem;
	box-sizing: border-box;
`;

export const CommentNameInput = styled.input`
	width: 24.5rem;
	padding: 1rem 1rem;
`;

export const SendButton = styled.button`
	padding: 1rem 0;
	width: 13.2rem;
`;

export const CommentForm = styled.form`
	margin: 1rem 0;
`;

export const CommentWrapper = styled.div`
	/* display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40rem; */
`;

export const InputWrapper = styled.div``;

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
