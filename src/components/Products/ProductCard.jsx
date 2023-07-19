import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartSolid,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { WishlistContext } from "../../context/WishlistProvider.jsx";

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
  const { wishlist, setWishList } = useContext(WishlistContext);
  const [className, setClassName] = useState("wishlistButton");
  const handleAddToWishlist = () => {
    if (!wishlist.includes(id)) {
      // Add the product to the wishlist state
      setWishList((prevWishlist) => [...prevWishlist, id]);
    }
    // Toggle isHovered state when clicking the button
    setIsHovered((prevIsHovered) => !prevIsHovered);

    // Toggle the className based on isHovered state
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
          <FontAwesomeIcon icon={isHovered ? faHeartSolid : faHeartRegular} />
        </button>
        <img src={photoFull} alt="" />
      </div>
      <div className="productDescription">
        <h4 className="productName">
          <a href="#">{title}</a>
        </h4>
        <div className="productRating">
          {[...Array(rating)].map((index, i) => (
            <FontAwesomeIcon key={i} icon={faStar} />
          ))}
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

// Add PropTypes validation
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
