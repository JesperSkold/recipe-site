const calcAvgRating = (rating: number[]) => {
  return Math.round(rating.reduce((a: number, b: number) => a + b, 0) / rating.length);
};

export default calcAvgRating