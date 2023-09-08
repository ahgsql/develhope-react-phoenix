import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getProductById } from "../../data/products";
import "./ProductDetail.css";
import ProductRate from "./ProductRate";
import { WishlistContext } from "../../context/WishlistProvider";
import Button from "../common/Button";
import BigImages from "./BigImages";
import Comment from "./Comment.jsx";
import Input from "./Input.jsx";
import getProduct from "../../hooks/getProduct";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      let product = await getProduct(id);
      if (product) {
        setProduct(product);
        console.log(product);
      }
    })();
  }, []);

  console.log("ProductDetail Rendered");
  let { wishlist, setWishList } = useContext(WishlistContext);
  if (product === null) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      <div className="product-detail-main-container">
        <div className="product-detail-breadcrumb">
          Tech {">"} PC {">"} Accessories {">"} Mouse
        </div>

        <div className="product-detail-image-container ">
          <div className="product-detail-small-images ">
            {product.productImg.map((e, i) => {
              return <img src={e.url} key={i} />;
            })}
          </div>
          <div className="product-detail-featured-image">
            <BigImages images={product.productImg} />
          </div>
        </div>
        <div className="product-detail-features-container">
          <div style={{ textAlign: "left" }}>
            <ProductRate rate={product.productRating} />
            {product.ratedPeople} People rated and reviewed
          </div>
          <span
            style={{ fontSize: 30, fontWeight: "bolder", textAlign: "left" }}
          >
            {product.productTitle}
          </span>
          <span>
            <span className="best-seller">Best Seller #1</span> in RCommerce
            statistics.
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ fontSize: 36, fontWeight: "bolder" }}>
              ${product.productPrice}{" "}
            </span>
            <span
              style={{
                fontSize: 30,
                fontWeight: "normal",
                textDecoration: "line-through",
              }}
            >
              ${product.productPrice * 2}
            </span>{" "}
            <span
              style={{ fontSize: 24, fontWeight: "bolder", color: "orange" }}
            >
              {" "}
              50% off
            </span>
          </span>
          <span style={{ fontSize: 24, textAlign: "left" }}>
            {product.productDescription}
          </span>
          <Button onClick={() => console.log(1)} bgColor="#4050ff">
            Buy Now
          </Button>
        </div>
        <Button onClick={() => setWishList([...wishlist, parseInt(id)])}>
          {wishlist.includes(parseInt(id))
            ? "Already in Wishlist"
            : "Add to wishlist"}
        </Button>
      </div>
      <Input />
      <Comment productId={product.id} userId="1" />
    </>
  );
}
