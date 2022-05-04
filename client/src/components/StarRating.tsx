import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = () => {
	const [rating, setRating] = useState(0); // initial rating value
	// Catch Rating value

	const handleRating = (rate: number) => {
		setRating(rate);
		// other logic
	};
	return (
		<div className="App">
			<Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
		</div>
	);
};

export default StarRating;
