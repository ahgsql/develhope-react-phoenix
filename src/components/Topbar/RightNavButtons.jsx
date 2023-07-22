import React, { useContext, useState, useRef } from "react";
import IconButton from "./IconButton";
import {
  faBell,
  faHeart,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { WishlistContext } from "../../context/WishlistProvider";
import WishlitItem from "./WishlitItem";
import useClickOutside from "../../hooks/useClickOutside";
export default function RightNavButtons({ changeTheme }) {
  let { wishlist, setWishList } = useContext(WishlistContext);
  const [wishListOpen, setWishListOpen] = useState(false);

  const wishlistResultDivRef = useRef();
  useClickOutside(wishlistResultDivRef, () => setWishListOpen(false));

  const WishListItems = wishlist
    .slice(0, 10)
    .map((itemid) => (
      <WishlitItem
        setWishList={setWishList}
        wishlist={wishlist}
        setWishListOpen={setWishListOpen}
        key={itemid}
        id={itemid}
      />
    ));

  return (
    <>
      <IconButton
        iconname={faSun}
        className="circle bgOrange hover"
        onClick={() => changeTheme()}
      />
      <IconButton
        iconname={faHeart}
        onClick={() => setWishListOpen(!wishListOpen)}
        className="circle"
      />
      <IconButton iconname={faBell} className="circle" />
      <IconButton
        onClick={() => setWishList([...wishlist, 3])}
        iconname={faUser}
        className="circle"
      />
      {wishListOpen && (
        <div className="wishListDiv" ref={wishlistResultDivRef}>
          {WishListItems.length < 1 ? "No Items In Wishlist" : WishListItems}
        </div>
      )}
    </>
  );
}
