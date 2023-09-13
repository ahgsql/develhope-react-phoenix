import React, { useContext, useState, useRef } from "react";
import IconButton from "./IconButton";
import {
  faBell,
  faHeart,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
// import { WishlistContext } from "../../context/WishlistProvider";
// import WishlitItem from "./WishlitItem";
import useClickOutside from "../../hooks/useClickOutside";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthProvider";

import SignInModal from "./SignInModal";
import Cart from "./Cart";
import {
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartProvider";

export default function RightNavButtons({ changeTheme }) {
  const { user, login, logout, loginCheck } = useAuth();
  // let { wishlist, setWishList } = useContext(WishlistContext);
  const [wishListOpen, setWishListOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const wishlistResultDivRef = useRef();
  useClickOutside(wishlistResultDivRef, () => setWishListOpen(false));
  const searchResultDivRef = useRef();
  useClickOutside(searchResultDivRef, () => toggleCartOpen(false));
  const { cartItems, toggleCartOpen, isCartOpen, removeProductFromCart } =
    useCart();
  // const WishListItems = wishlist
  //   .slice(0, 10)
  //   .map((itemid) => (
  //     <WishlitItem
  //       setWishList={setWishList}
  //       wishlist={wishlist}
  //       setWishListOpen={setWishListOpen}
  //       key={itemid}
  //       id={itemid}
  //     />
  //   ));

    const WishListItems =["item1", "item2"];

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
        iconname={faShoppingCart}
        onClick={() => toggleCartOpen(!isCartOpen)}
        className="circle"
      />
      <text className="cartCount" onClick={() => toggleCartOpen(!isCartOpen)}>
        {cartItems.length}
      </text>
      {isCartOpen && <Cart newRef={searchResultDivRef} />}

      <Button
        onClick={() => (user ? logout() : setModalOpen(true))}
        className="team-btn"
        radius={5}
        bgColor="#8b49f4"
        style={{ width: "50%", padding: "1px" }}
      >
        {user ? "Logout (" + user.userName + ")" : "Sign In"}
      </Button>
      <SignInModal
        style={{
          visibility: modalOpen ? "visible" : "hidden",
          opacity: modalOpen ? 1 : 0,
        }}
        setModalOpen={setModalOpen}
      />
      {wishListOpen && (
        <div className="wishListDiv" ref={wishlistResultDivRef}>
          {WishListItems.length < 1 ? "No Items In Wishlist" : WishListItems}
        </div>
      )}
    </>
  );
}
