import React, { useState } from "react";

import "./ProductDetail.css";
import { Rating } from "react-simple-star-rating";
import axios from "axios";

export default function ProductRate({ initalRating, slug }) {
  const [ratingValue, setRatingValue] = useState(Math.round(initalRating));

  const handleRating = (rate) => {
    axios({
      method: "put",
      url: import.meta.env.VITE_BASE_URL + "/api/products/rate/" + slug,
      data: {
        rate: rate,
      },
    }).then(function (response) {
      const result = Math.round(response.data.rating);
      setRatingValue(result);
      // console.log(response.data.rating);
      //  console.log(ratingValue);
    });
    setRatingValue(rate);
  };

  return (
    <Rating
      onClick={handleRating}
      initialValue={ratingValue}
      onPointerLeave={() => setRatingValue(ratingValue)}
    />
  );
}
