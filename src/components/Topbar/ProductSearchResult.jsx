import React from "react";

export default function ProductSearchResult({ product }) {
  return (
    <div className="product-search-result">
      <div style={{ display: "flex" }}>
        <img src={product.photo} alt="" height="25" />
        <span>{product.title}</span>
      </div>

      <span>$ {product.price}</span>
    </div>
  );
}
