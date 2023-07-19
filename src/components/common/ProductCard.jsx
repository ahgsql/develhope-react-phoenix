import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProductCard = (props) => {
    return (
        <div className="productCard">
            <div className="productImage">
                <button className="wishlistButton"></button>
                <img src={props.photoFull} alt=""/>
            </div>
            <div className="productDescription">
                <h4 className="productName"><a href="#">{props.title}</a></h4>
                <div className="productRating">
                    {[...Array(props.rating)].map((index) => (
                        <FontAwesomeIcon id={index + 1} key={index} icon="fa-solid fa-star"/>
                    ))}
                </div>
                <p className="extraKnowledge">{props.eKnowledge}</p>
                <span className="text-muted oldProductPrice">{props.oldPrice}</span>
                <h3 className="productPrice">{props.price}</h3>
                <span className="text-muted colorCount">{props.color}</span>
            </div>
        </div>
    );
};

export default ProductCard;