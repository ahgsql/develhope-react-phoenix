import React from "react";
import { Link } from "react-router-dom";

export default function ProductSearchResult({ product }) {
  return (
    <div className="product-search-result">
      <Link
        to={"/product/" + product.productSlug}
        style={{ textDecoration: "none" }}
      >
        <div style={{ display: "flex" }}>
          <img src={product.productPhotoFull} alt="" height="25" />
          <span>{product.productTitle}</span>
        </div>

        <span>$ {product.productPrice}</span>
      </Link>
    </div>
  );
}
