import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { WishlistContext } from "../../context/WishlistProvider.jsx";
import RatingStar from "./RatingStar.jsx";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

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
  const { wishlist, setWishList } = useContext(WishlistContext);
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
    <Link to={"/product/" + slug} style={{ textDecoration: "none" }}>
      <div className="productCard">
        <div className="productImage">
          <button
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleAddToWishlist(title)}
          >
            <FontAwesomeIcon icon={isHovered ? faHeartSolid : faHeartRegular} />
          </button>
          <img src={photoFull} alt="" />
        </div>
        <div className="productDescription">
          <h4 className="productName">
            <span style={{ fontWeight: "bold" }}>{title}</span>
          </h4>
          <div className="productRating">
            <Rating initialValue={rating} readonly={true} size={20} />
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
    </Link>
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
