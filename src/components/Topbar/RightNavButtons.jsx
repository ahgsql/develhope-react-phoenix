import React, { useContext, useState, useRef } from "react";
import IconButton from "./IconButton";
import {
  faBell,
  faHeart,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import WishlitItem from "./WishlitItem";
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
import { useWishlist } from "../../context/WishlistProvider";

export default function RightNavButtons({ changeTheme }) {
  const { user, login, logout, loginCheck } = useAuth();
  const [wishListOpen, setWishListOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const wishlistResultDivRef = useRef();
  const { wishlist } = useWishlist();

  useClickOutside(wishlistResultDivRef, () => setWishListOpen(false));
  const searchResultDivRef = useRef();
  useClickOutside(searchResultDivRef, () => toggleCartOpen(false));
  const { cartItems, toggleCartOpen, isCartOpen, removeProductFromCart } =
    useCart();

  let WishListItems = [];

  if (wishlist?.products?.length > 0) {
    WishListItems = wishlist.products.map((product) => (
      <WishlitItem id={product.id} title={product.title} />
    ));
  }

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
      {user ? (
        <>
          {" "}
          <span style={{ fontSize: 15, marginRight: "20px" }}>
            {" "}
            {user.userName}
          </span>{" "}
          <Button
            onClick={() => logout()}
            className="team-btn"
            radius={5}
            bgColor="#8b49f4"
            style={{
              width: "20%",
              padding: "5px",
              fontSize: 14,
              maxHeight: "30",
            }}
          >
            {"Logout"}
          </Button>
        </>
      ) : (
        ""
      )}

      {isCartOpen && <Cart newRef={searchResultDivRef} />}
      {!user ? (
        <Button
          onClick={() => setModalOpen(true)}
          className="team-btn"
          radius={5}
          bgColor="#8b49f4"
          style={{ width: "50%", padding: "1px" }}
        >
          {"Sign In"}
        </Button>
      ) : (
        ""
      )}
      <SignInModal
        style={{
          visibility: modalOpen ? "visible" : "hidden",
          opacity: modalOpen ? 1 : 0,
        }}
        setModalOpen={setModalOpen}
      />
      {wishListOpen && (
        <div className="wishListDiv" ref={wishlistResultDivRef}>
          {!user
            ? "You Need To Login"
            : WishListItems.length < 1
            ? "No Items In Wishlist"
            : WishListItems}
        </div>
      )}
    </>
  );
}
