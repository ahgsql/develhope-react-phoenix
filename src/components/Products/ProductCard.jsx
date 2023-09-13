import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Rating} from "react-simple-star-rating";
import {useWishlist} from "../../context/WishlistProvider";

const ProductCard = ({
                         id,
                         slug,
                         photoFull,
                         title,
                         rating,
                         eKnowledge,
                         oldPrice,
                         price,
                         color,
                         ratedPeople,
                     }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isInWishList, setIsInWishList] = useState(false);
    const [className, setClassName] = useState("wishlistButton");
    const {addProductToWishlist, wishlist, removeProductFromWishlist} =
        useWishlist();
    useEffect(() => {
        if (wishlist?.products?.length > 0) {
            if (wishlist.products.filter((p) => p.id == id).length > 0) {
                setClassName("clickedWishlistButton");
                setIsInWishList(true);
            }
            else {
                setClassName("wishlistButton");
                setIsInWishList(false);
            }
        }
    }, [wishlist]);
    return (
        <div className="productCard">
            <button
                className={className}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    if (isInWishList) {
                        removeProductFromWishlist(id);
                    } else {
                        addProductToWishlist(id);
                    }
                }}
            >
                <FontAwesomeIcon
                    icon={isHovered || isInWishList ? faHeartSolid : faHeartRegular}
                />
            </button>
            <Link to={"/product/" + slug} style={{textDecoration: "none"}}>
                <div className="productImage">
                    <img src={photoFull} alt=""/>
                </div>
                <div className="productDescription">
                    <h4 className="productName">
                        <span style={{fontWeight: "bold"}}>{title}</span>
                    </h4>
                    <div className="productRating">
                        <Rating initialValue={rating} readonly={true} size={20}/>
                        <span>({ratedPeople} people rated)</span>
                    </div>
                    <p className="extraKnowledge">{eKnowledge}</p>
                    <div className="prices">
                        <span className="text-muted oldProductPrice">${oldPrice}</span>
                        <span className="productPrice">${price}</span>
                    </div>
                    <span className="text-muted colorCount">{color} colors</span>
                </div>
            </Link>
        </div>
    );
};

ProductCard.propTypes = {
    photoFull: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    eKnowledge: PropTypes.string.isRequired,
    oldPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    color: PropTypes.number.isRequired,
    ratedPeople: PropTypes.number.isRequired,
};

export default ProductCard;
