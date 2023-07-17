import React from "react";
import { getProductById } from "../../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function WishlitItem({ id }) {
  let product = getProductById(id);
  return (
    <div className="wishlist-item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ paddingRight: 10, color: "crimson" }}
        />
        <span>{product.title}</span>
      </div>
    </div>
  );
}
