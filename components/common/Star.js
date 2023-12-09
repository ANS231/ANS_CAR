// components/StarRating.js

import { useState, useEffect } from "react";

const StarRating = ({ rating }) => {
  const [stars, setStars] = useState("");

  useEffect(() => {
    const filledStars = "★".repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? "½" : "";
    const emptyStars = "☆".repeat(5 - Math.ceil(rating));

    const allStars = `${filledStars}${halfStar}${emptyStars}`;
    setStars(allStars);
  }, [rating]);

  return (
    <div className="star-rating">
      <span>{stars}</span>
    </div>
  );
};

export default StarRating;
