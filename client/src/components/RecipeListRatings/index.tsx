import React from "react";
import {StyledRating} from "./style"
interface Rating {
	rating: number
}
const Ratings = ({ rating }:Rating) => {
	switch (rating) {
		case 1:
			return <StyledRating>★☆☆☆☆</StyledRating>;

		case 2:
			return <StyledRating>★★☆☆☆</StyledRating>;

		case 3:
			return <StyledRating>★★★☆☆</StyledRating>;

		case 4:
			return <StyledRating>★★★★☆</StyledRating>;

		case 5:
			return <StyledRating>★★★★★</StyledRating>;
		default:
			return <StyledRating>☆☆☆☆☆</StyledRating>;
	}
};

export default Ratings;
