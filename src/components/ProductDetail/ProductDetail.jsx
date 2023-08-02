import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import "./ProductDetail.css";
import ProductRate from "./ProductRate";

export default function ProductDetail() {
  const { id } = useParams();
  let product = getProductById(parseInt(id));
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
        <div className="product-detail-featured-image ">
          <img src={product.photoFull} />
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
    </div>
  );
}
