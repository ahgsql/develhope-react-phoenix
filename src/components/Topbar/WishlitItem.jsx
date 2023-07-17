import React from "react";
import { getProductById } from "../../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
export default function WishlitItem({
  id,
  setWishList,
  wishlist,
  setWishListOpen,
}) {
  let product = getProductById(id);
  return (
    <div className="wishlist-item">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          style={{ paddingRight: 10, color: "crimson" }}
        />
        <span>{product.title}</span>
        <i
          className="wishlist-remove"
          onClick={() => {
            setWishList(wishlist.filter((i) => i !== id));
          }}
        >
          <FontAwesomeIcon
            icon={faXmarkCircle}
            style={{ pointerEvents: "none" }}
          />
        </i>
      </div>
    </div>
  );
}
