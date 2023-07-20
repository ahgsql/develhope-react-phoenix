import ProductCard from "./ProductCard.jsx";
import products from "../../data/products.js";
import "./product.css";
import {
  faAngleLeft,
  faAngleRight,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adsVertical from "../../assets/adsVertical.png";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const Products = () => {
  const shuffledProduct0 = shuffleArray(products).slice(0, 5);
  const shuffledProduct1 = shuffleArray(products).slice(0, 6);
  const shuffledProduct2 = shuffleArray(products).slice(0, 6);

  return (
    <>
      <div className="productRow">
        <div className="productHeader">
          <h2 className="productHeader">
            <FontAwesomeIcon icon={faBolt} className="faBolt" />
            Top Deals today
            <FontAwesomeIcon icon={faBolt} className="faBolt" />
          </h2>
          <a href="#">
            Explore More <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
        <div className="productContainer">
          {shuffledProduct0.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              title={product.title}
              eKnowledge={product.eKnowledge}
              rating={product.rating}
              oldPrice={product.oldPrice}
              price={product.price}
              photoFull={product.photoFull}
              color={product.color}
              ratedPeople={product.ratedPeople}
            />
          ))}
          <img src={adsVertical} alt="" />
        </div>
        <div className="slideControllers">
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="productRow">
        <h2 className="productHeader">Top Electronics</h2>
        <div className="productContainer">
          {shuffledProduct1.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              title={product.title}
              eKnowledge={product.eKnowledge}
              rating={product.rating}
              oldPrice={product.oldPrice}
              price={product.price}
              photoFull={product.photoFull}
              color={product.color}
              ratedPeople={product.ratedPeople}
            />
          ))}
        </div>
        <div className="slideControllers">
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="productRow">
        <h2 className="productHeader">Best Offers</h2>
        <div className="productContainer">
          {shuffledProduct2.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              title={product.title}
              eKnowledge={product.eKnowledge}
              rating={product.rating}
              oldPrice={product.oldPrice}
              price={product.price}
              photoFull={product.photoFull}
              color={product.color}
              ratedPeople={product.ratedPeople}
            />
          ))}
        </div>
        <div className="slideControllers">
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </>
  );
};

export default Products;
