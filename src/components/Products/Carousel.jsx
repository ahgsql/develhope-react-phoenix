import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBolt } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard.jsx";
import adsVertical from "../../assets/adsVertical.png";
import adsHorizontal from "../../assets/adsHorizontal.png";
import PropTypes from "prop-types";
import "./Carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { getRandomPhotoFull } from "../../data/products.js";
import Skeleton from "react-loading-skeleton";
const Carousel = ({ products, isTop, header, ads }) => {
  const adsImageSource = ads ? adsVertical : adsHorizontal;
  // console.log(adsImageSource);
  // TODO:Change it to real carousel.
  return (
    <>
      <div className="productRow">
        <div className="productHeader">
          {isTop ? (
            <h2 className="headerText">
              <FontAwesomeIcon icon={faBolt} className="faBolt" />
              {header}
              <FontAwesomeIcon icon={faBolt} className="faBolt" />
            </h2>
          ) : (
            <h2 className="headerText">{header}</h2>
          )}
          <div className="exploreLink">
            {isTop ? (
              <a href="#">
                Explore More <FontAwesomeIcon icon={faAngleRight} />
              </a>
            ) : (
              <a href=""></a>
            )}
          </div>
        </div>
        <div className="productContainer">
          {products.length > 0
            ? products.map((product) => (
                <ProductCard
                  id={product._id}
                  slug={product.productSlug}
                  key={product._id}
                  title={product.productTitle}
                  eKnowledge={"TEST"}
                  rating={Math.round(product.productRating)}
                  oldPrice={product.productPrice * 2}
                  price={product.productPrice}
                  // photoFull={product.photoFull}
                  photoFull={product.productPhotoFull}
                  color={5}
                  ratedPeople={product.ratedPeople}
                />
              ))
            : [...Array(isTop ? 5 : 6)].map((e, i) => {
                return (
                  <div
                    key={i}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Skeleton key={1} height={250} />
                    <Skeleton key={2} />
                    <Skeleton key={3} count={3} />
                  </div>
                );
              })}
          {isTop && <img className="ads" src={adsImageSource} alt="" />}
        </div>
      </div>
    </>
  );
};

Carousel.propTypes = {
  products: PropTypes.array.isRequired,
  isTop: PropTypes.bool.isRequired,
  ads: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
};

export default Carousel;
