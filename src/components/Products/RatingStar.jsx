import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function RatingStar({ rating }) {
  return (
    <>
      {[...Array(rating)].map((index, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
    </>
  );
}
