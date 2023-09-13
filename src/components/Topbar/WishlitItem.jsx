import React from "react";
import {getProductById} from "../../data/products";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faXmarkCircle} from "@fortawesome/free-solid-svg-icons";
import {useWishlist} from "../../context/WishlistProvider.jsx";

export default function WishlitItem({
                                        id,
                                        title,
                                    }) {
    let product = getProductById(id);
    const {removeProductFromWishlist} = useWishlist();
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
                    style={{paddingRight: 10, color: "crimson"}}
                />
                <span>{title}</span>
                <i
                    className="wishlist-remove"
                    onClick={() => removeProductFromWishlist(id)}
                >
                    <FontAwesomeIcon
                        icon={faXmarkCircle}
                        style={{pointerEvents: "none"}}
                    />
                </i>
            </div>
        </div>
    );
}
