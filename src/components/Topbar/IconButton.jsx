import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ iconname, onClick, className }) {
  return (
    <button className="circleBtn">
      <FontAwesomeIcon
        className={className}
        icon={iconname}
        onClick={onClick}
      />
    </button>
  );
}
