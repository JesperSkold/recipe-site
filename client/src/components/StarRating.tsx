import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { postRecipeRating } from "../api/postRecipeRating";
const StarRating = ({setShowRating}: any) => {
	const [rating, setRating] = useState(0); // initial rating value
// Catch Rating value
  const {recipeId} = useParams()

	const handleRating = async (rate: number) => {
		let convertRate = 0;
		switch (rate) {
			case 20:
				convertRate = 1;
				break;
			case 40:
				convertRate = 2;
				break;
			case 60:
				convertRate = 3;
				break;
			case 80:
				convertRate = 4;
				break;
			case 100:
				convertRate = 5;
		}
		setRating(rate);
    await postRecipeRating(recipeId!, convertRate)
    setShowRating(false)
	};
	return (
		<div className="App">
			<Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
		</div>
	);
};

export default StarRating;
