import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  let product = getProductById(parseInt(id));
  return <></>;
}
