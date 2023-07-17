const ProductCard = () => {
    return (
        <div className="productCard">
            <div className="productImage">
                <button className="wishlistButton"></button>
                <img src="#" alt=""/>
            </div>
            <div className="productDescription">
                <h4 className="productName"><a href="#"></a></h4>
                <div className="productRating">
                    <svg height="25" width="23" className="star rating" data-rating="1">
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
                    </svg>
                    <span className="text-muted ratingCount">(67 people rated)</span>
                </div>
                <p className="extraKnowledge">dbrand skin available</p>
                <span className="text-muted oldProductPrice"></span>
                <h3 className="productPrice"></h3>
                <span className="text-muted colorCount">2 colors</span>
            </div>
        </div>
    );
};

export default ProductCard;