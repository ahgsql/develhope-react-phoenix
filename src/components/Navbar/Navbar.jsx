import React from "react";
import burgerMenu from "../../assets/burger-menu.svg";
import "./styleNavbar.css";
export default function Navbar() {
  const navbarMenu = [
    "Home",
    "My Favourite Stores",
    "Products",
    "Wishlist",
    "Shipping Info",
    "Be a vendor",
    "Track order",
    "Checkout",
  ];
  return (
    <div className="mainNav">
      <div className="mainNav-left-side">
        <div className="toggle-menu-area">
          <img className="burger-menu" src={burgerMenu} />
        </div>
        <div className="category-area">Category</div>
      </div>
      <div className="mainNav-right-side">
        <ul className="menu-list">
          {navbarMenu.map((el) => (
            <li>
              <div className="menu-li">{el}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
