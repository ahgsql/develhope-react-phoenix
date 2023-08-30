import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getProductById } from "../../data/products";
import "./ProductDetail.css";
import ProductRate from "./ProductRate";
import { WishlistContext } from "../../context/WishlistProvider";
import Button from "../common/Button";
import BigImages from "./BigImages";
export default function ProductDetail() {
  const { id } = useParams();
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await fetch(`http://localhost:9000/api/products/`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => {
            console.log("Raw Response:", data);
            return data.json();
          })
          .then((data) => console.log("BACKEND data:", data));
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };
    fetchingData();
  }, []);

  let product = getProductById(parseInt(id));
  console.log("ProductDetail Rendered");
  let { wishlist, setWishList } = useContext(WishlistContext);
  return (
    <div className="product-detail-main-container">
      <div className="product-detail-breadcrumb">
        Tech {">"} PC {">"} Accessories {">"} Mouse
      </div>

      <div className="product-detail-image-container ">
        <div className="product-detail-small-images ">
          <img src={product.photo} />
          <img src={product.photo} />
          <img src={product.photo} />
        </div>
        <div className="product-detail-featured-image">
          <BigImages
            images={[product.photoFull, product.photoFull, product.photoFull]}
          />
        </div>
      </div>
      <div className="product-detail-features-container">
        <div style={{ textAlign: "left" }}>
          <ProductRate rate={product.rating} />
          {product.ratedPeople} People rated and reviewed
        </div>
        <span style={{ fontSize: 30, fontWeight: "bolder", textAlign: "left" }}>
          {product.title}
        </span>
        <span>
          <span className="best-seller">Best Seller #{product.id}</span> in
          RCommerce statistics.
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ fontSize: 36, fontWeight: "bolder" }}>
            ${product.price}{" "}
          </span>
          <span
            style={{
              fontSize: 30,
              fontWeight: "normal",
              textDecoration: "line-through",
            }}
          >
            ${product.price * 2}
          </span>{" "}
          <span style={{ fontSize: 24, fontWeight: "bolder", color: "orange" }}>
            {" "}
            50% off
          </span>
        </span>
        <span style={{ fontSize: 24, textAlign: "left" }}>
          {product.description}
        </span>
      </div>
      <Button onClick={() => setWishList([...wishlist, parseInt(id)])}>
        {wishlist.includes(parseInt(id))
          ? "Already in Wishlist"
          : "Add to wishlist"}
      </Button>
    </div>
  );
}
