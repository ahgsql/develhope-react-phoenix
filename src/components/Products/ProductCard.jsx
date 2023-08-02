import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import {
    faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import {useContext, useState} from "react";
import {WishlistContext} from "../../context/WishlistProvider.jsx";
import RatingStar from "./RatingStar.jsx";

const ProductCard = ({
                         id,
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
    const {wishlist, setWishList} = useContext(WishlistContext);
    const [className, setClassName] = useState("wishlistButton");
    const handleAddToWishlist = () => {
        if (!wishlist.includes(id)) {
            setWishList((prevWishlist) => [...prevWishlist, id]);
        }
        setIsHovered((prevIsHovered) => !prevIsHovered);

        if (className === "wishlistButton") {
            setClassName("clickedWishlistButton");
        } else {
            setClassName("wishlistButton");
        }
    };
    return (
        <div className="productCard">
            <div className="productImage">
                <button
                    className={className}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => handleAddToWishlist(title)}
                >
                    <FontAwesomeIcon icon={isHovered ? faHeartSolid : faHeartRegular}/>
                </button>
                <img src={photoFull} alt=""/>
            </div>
            <div className="productDescription">
                <h4 className="productName">
                    <a href="#" style={{fontWeight: "bold"}}>
                        {title}
                    </a>
                </h4>
                <div className="productRating">
                    <RatingStar rating={rating}/>
                    <span>({ratedPeople} people rated)</span>
                </div>
                <p className="extraKnowledge">{eKnowledge}</p>
                <div className="prices">
                    <span className="text-muted oldProductPrice">${oldPrice}</span>
                    <span className="productPrice">${price}</span>
                </div>
                <span className="text-muted colorCount">{color} colors</span>
            </div>
        </div>
    );
};


ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
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
