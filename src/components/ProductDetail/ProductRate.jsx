import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductRate({ rate }) {
  const arr = [];
  for (let i = 0; i < rate; i++) {
    arr.push(<FontAwesomeIcon icon={faStar} />);
  }

  return <div> {arr} </div>;
}
