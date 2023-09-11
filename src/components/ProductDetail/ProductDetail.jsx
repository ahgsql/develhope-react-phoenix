import {useParams, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import "./ProductDetail.css";
import ProductRate from "./ProductRate";
import {WishlistContext} from "../../context/WishlistProvider";
import Button from "../common/Button";
import BigImages from "./BigImages";
import Comment from "./Comment.jsx";
import Input from "./Input.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import getProduct from "../../hooks/getProduct";
import getProductComments from "../../hooks/getProductComments.js";
import {useCart} from "../../context/CartProvider";

export default function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [comments, setComments] = useState([]);
    const [inCart, setIncart] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const {
        cartItems,
        toggleCartOpen,
        isCartOpen,
        addProductToCart,
        isProductInCart,
    } = useCart();

    useEffect(() => {
        setProduct(null);
        setComments([]);
        (async () => {
            let product = await getProduct(id);
            if (product) {
                product.productImg.unshift({url: product.productPhotoFull});
                setProduct(product);
                let search = cartItems.some((i) => i._id == product._id);
                setIncart(search);
                console.log(product);
            }
        })();
        (async () => {
            let comments = await getProductComments(id);
            setComments(comments);
            console.log(comments);
        })();
    }, [id]);

    let {wishlist, setWishList} = useContext(WishlistContext);
    // if (product === null) {
    //   return <h1>Loading..</h1>;
    // }
    return (
        <>
            <div className="product-detail-main-container">
                <div className="product-detail-breadcrumb">
                    Tech {">"} PC {">"} Accessories {">"} Mouse
                </div>

                <div className="product-detail-image-container ">
                    <div className="product-detail-small-images ">
                        {product ? (
                            product.productImg.map((e, i) => {
                                return <img src={e.url} key={i}/>;
                            })
                        ) : (
                            <Skeleton height={60} width={60}/>
                        )}
                    </div>
                    <div className="product-detail-featured-image">
                        {product ? (
                            <BigImages images={[product.productPhotoFull]}/>
                        ) : (
                            <Skeleton height={300}/>
                        )}
                    </div>
                </div>
                <div className={product ? "product-detail-features-container" : ""}>
                    <div style={{textAlign: "left"}}>
                        {product ? (
                            <ProductRate rate={product.productRating}/>
                        ) : (
                            <Skeleton/>
                        )}
                        {product ? product.ratedPeople + " People rated and reviewed" : ""}
                    </div>
                    <span style={{fontSize: 30, fontWeight: "bolder", textAlign: "left"}}>
                        {product ? product.productTitle : <Skeleton/>}
                    </span>
                    <span>
                        {product ? (
                            <span className="best-seller">
                                Best Seller #{Math.floor(Math.random() * 10)} in RCommerce
                                statistics
                            </span>
                        ) : (
                            <Skeleton/>
                        )}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <span style={{fontSize: 36, fontWeight: "bolder"}}>
                            {product ? product.productPrice : <Skeleton/>}
                        </span>
                        <span style={{ fontSize: 30, fontWeight: "normal", textDecoration: "line-through",}}>
                            {product ? product.productPrice * 2 : <Skeleton/>}
                        </span>{" "}
                        <span style={{fontSize: 24, fontWeight: "bolder", color: "orange"}}>
                            {product ? "  50% off" : <Skeleton/>}
                        </span>
                    </span>
                    <span style={{fontSize: 24,width:"100%", textAlign: "left"}}>
                        {product ? product.productDescription : <Skeleton count={4}/>}
                    </span>
                    <Button onClick={() => addProductToCart(product)} bgColor="#4050ff">
                        {isProductInCart(product ? product._id : 1)
                            ? "Already In Cart (+1)"
                            : "Add To Cart"}
                    </Button>
                </div>
                <Button style={{marginBottom:"20px"}} onClick={() => setWishList([...wishlist, parseInt(id)])}>
                    {wishlist.includes(parseInt(id))
                        ? "Already in Wishlist"
                        : "Add to wishlist"}
                </Button>
            </div>
            {product ? (
                <Input id={product._id} setComments={setComments} oldComments={comments}/>
            ) : null}
            {product ? (
                <Comment comments={comments}/>
            ) : (
                <Skeleton style={{width: "1300px"}} count={10}/>
            )}
        </>
    );
}
