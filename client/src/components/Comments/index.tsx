import React, { useEffect, useState } from "react";
import { CommentDate, CommentLi, CommentName, CommentNameInput, CommentsH1, CommentText, CommentTextArea, CommentUl, CommentWrapper, CommentForm, SendButton, Wrapper } from "./style";
import { getCommentsById } from "../../api/getRecipes";
import { Comment } from "../../interfaces/recipe";
const Comments = ({recipeId}:any) => {
  const [comments, setComments] = useState<Comment[]>([])
  useEffect(() => {
    const getAllCommentsById = async () => {
      const comments = await getCommentsById(recipeId)
      
      setComments(comments)
    }
    getAllCommentsById()
  }, [])
  
	return (
		<Wrapper>
			<CommentsH1>Kommentarer</CommentsH1>
			<CommentTextArea placeholder="Din kommentar"></CommentTextArea>
			<CommentForm>
				<CommentNameInput placeholder="Ditt namn"></CommentNameInput>
				<SendButton>Skicka</SendButton>
			</CommentForm>
			<CommentUl>
        {comments.length > 0 && comments.map((comment) => (
				<CommentLi key={comment._id}>
					<CommentWrapper>
						<CommentName>{comment.name}</CommentName>
						<CommentDate>{comment.createdAt.slice(0,-14)}</CommentDate>
					</CommentWrapper>
					<CommentText>{comment.comment}</CommentText>
				</CommentLi>
        ))}
			</CommentUl>
		</Wrapper>
	);
};

export default Comments;
