import React from "react";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation();
  console.log(state);
  return <div>Checkout</div>;
}
