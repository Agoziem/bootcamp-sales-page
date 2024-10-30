"use client";
import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type StarRatingProp = { rating: number };
const StarRating = ({ rating }: StarRatingProp) => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const starArray = [];
    let tempRating = rating;

    for (let i = 0; i < 5; i++) {
      if (tempRating >= 1) {
        starArray.push(<FaStar key={i} className={"text-gold"} />);
        tempRating -= 1;
      } else if (tempRating >= 0.5) {
        starArray.push(<FaStarHalfAlt key={i} className={"text-gold"} />);
        tempRating -= 0.5;
      } else {
        starArray.push(<FaRegStar key={i} className={"text-[#ccc]"} />);
      }
    }

    setStars(starArray);
  }, [rating]);

  return <div className={"flex text-lg"}>{stars}</div>;
};

export default StarRating;
