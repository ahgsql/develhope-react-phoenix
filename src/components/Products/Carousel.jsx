import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faBolt} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard.jsx";
import adsVertical from "../../assets/adsVertical.png";
import PropTypes from "prop-types";

const Carousel = ({products, isTop, header}) => {
    return (
        <>
            <div className="productRow">
                <div className="productHeader">
                {isTop ? (
                    <h2 className="headerText">
                        <FontAwesomeIcon icon={faBolt} className="faBolt"/>
                        {header}
                        <FontAwesomeIcon icon={faBolt} className="faBolt"/>
                    </h2>
                ) : (
                    <h2 className="headerText">{header}</h2>
                )}
                <div className="exploreLink">
                    {isTop ? (
                        <a href="#">
                            Explore More <FontAwesomeIcon icon={faAngleRight}/>
                        </a>
                    ) : (
                        <a href=""></a>
                    )}
                </div>
            </div>
                <div className="productContainer">
                    {products.map((product) => (
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
                    {isTop ? (
                        <img className="ads" src={adsVertical} alt=""/>
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        </>
    );
};

Carousel.propTypes = {
    products: PropTypes.array.isRequired,
    isTop: PropTypes.bool.isRequired,
    header: PropTypes.string.isRequired,
};

export default Carousel;
