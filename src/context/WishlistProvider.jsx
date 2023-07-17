import { createContext, useState } from "react";

import React from "react";
let WishlistContext;
export default function WishlistProvider({ children }) {
  WishlistContext = createContext();
  const [wishlist, setWishList] = useState([]);
  return (
    <WishlistContext.Provider value={{ wishlist, setWishList }}>
      {children}
    </WishlistContext.Provider>
  );
}
export { WishlistContext };
