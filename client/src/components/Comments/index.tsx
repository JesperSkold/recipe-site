import React, { useEffect, useState } from "react";
import {
	CommentDate,
	CommentLi,
	CommentName,
	CommentNameInput,
	CommentsH1,
	CommentText,
	CommentTextArea,
	CommentUl,
	CommentWrapper,
	CommentForm,
	Wrapper,
	InputWrapper,
	ThanksH1,
	ErrorUl,
	ErrorLi,
} from "./style";
import { getCommentsById } from "../../api/getRecipes";
import { Comment } from "../../interfaces/recipe";
import { postComment } from "../../api/postComment";
import Button from "../Button";

interface Props {
	recipeId: string
}

const Comments = ({ recipeId }: Props) => {
	const [comments, setComments] = useState<Comment[]>([]);
	const [commentData, setCommentData] = useState({ name: "", comment: "" });
	const [sentComment, setSentComment] = useState(false);
	const [formErrors, setFormErrors] = useState<string[]>([]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setCommentData({ ...commentData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const errArr = [];
		if (!commentData.comment) {
			errArr.push("Du har inte skrivit en kommentar!");
		}
		if (commentData.comment.length > 1500) {
			errArr.push("Din kommentar är för lång!")
		}
		if (!commentData.name) {
			errArr.push("Var god och fyll i ditt namn!");
		}
		if (commentData.name.length > 50) {
			errArr.push("Ditt namn får inte vara längre än 50 bokstäver!")
		}
		setFormErrors(errArr);

		if (!errArr.length) {
			const commentedRecipe = await postComment(recipeId, commentData);
			if (commentedRecipe) {
				const lastComment = commentedRecipe.comments.pop();
				setComments([...comments, lastComment]);
				setSentComment(true);
			}
		}
	};

	useEffect(() => {
		const getAllCommentsById = async () => {
			const comments = await getCommentsById(recipeId);
			setComments(comments);
		};
		getAllCommentsById();
	}, []);

	return (
		<Wrapper>
			<CommentsH1>Kommentarer</CommentsH1>
			{!sentComment ? (
				<CommentForm onSubmit={handleSubmit}>
					<CommentTextArea placeholder="Din kommentar..." name="comment" onChange={(e) => handleChange(e)}></CommentTextArea>
					<InputWrapper>
						<CommentNameInput placeholder="Ditt namn..." name="name" onChange={(e) => handleChange(e)}></CommentNameInput>
						<Button style={"largerBtn"}>Skicka</Button>
					</InputWrapper>
				</CommentForm>
			) : (
				<ThanksH1>Tack för din kommentar {commentData.name}!</ThanksH1>
			)}
			{formErrors.length > 0 && <ErrorUl>
			{formErrors.map((error) => (
				<ErrorLi key={error}>{error}</ErrorLi>
			))}
			</ErrorUl> }
			<CommentUl>
				{comments.length > 0 &&
					comments.map((comment) => (
						<CommentLi key={comment._id}>
							<CommentWrapper>
								<CommentName>{comment.name}</CommentName>
								<CommentDate>{comment.createdAt.slice(0, -14)}</CommentDate>
							</CommentWrapper>
							<CommentText>{comment.comment}</CommentText>
						</CommentLi>
					))}
			</CommentUl>
		</Wrapper>
	);
};

export default Comments;
