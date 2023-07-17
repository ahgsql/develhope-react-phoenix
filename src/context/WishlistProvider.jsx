import { createContext, useState, useEffect } from "react";

import React from "react";
let WishlistContext;
export default function WishlistProvider({ children }) {
  let check = localStorage.getItem("wishlist");
  let wishListState;
  if (check == null || undefined) {
    // In first place we need to create
    localStorage.setItem("wishlist", JSON.stringify([]));
    wishListState = [];
  } else {
    let wishListFromLocal = localStorage.getItem("wishlist");
    wishListState = JSON.parse(wishListFromLocal);
  }

  WishlistContext = createContext();
  const [wishlist, setWishList] = useState(wishListState);
  useEffect(() => {
    console.log("run");
    localStorage.setItem("wishlist", JSON.stringify([...wishlist]));
  }, [wishlist]);
  return (
    <WishlistContext.Provider value={{ wishlist, setWishList }}>
      {children}
    </WishlistContext.Provider>
  );
}
export { WishlistContext };
