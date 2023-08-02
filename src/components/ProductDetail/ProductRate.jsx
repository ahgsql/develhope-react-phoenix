import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductDetail.css";

export default function ProductRate({ rate }) {
  const arr = [];
  for (let i = 0; i < rate; i++) {
    arr.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className="faStar"
        style={{ color: "orange !important" }}
      />
    );
  }

  return <div> {arr} </div>;
}
