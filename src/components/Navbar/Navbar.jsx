import React, { useRef, useState } from "react";
import burgerMenu from "../../assets/burger-menu.svg";
import "./styleNavbar.css";
import CategoriesDropDownMenu from "./CategoriesDropDownMenu";
export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
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
  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };
  const ref2 = useRef();
  return (
    <div className="mainNav">
      <div className="mainNav-left-side" onClick={toggleDropDown} ref={ref2}>
        <div className="toggle-menu-area">
          <img className="burger-menu" src={burgerMenu} />
        </div>
        <div className="category-area">Category</div>
      </div>
      {dropDown && (
        <CategoriesDropDownMenu setDropDown={setDropDown} menuRef={ref2} />
      )}
      <div className="mainNav-right-side">
        <ul className="menu-list">
          {navbarMenu.map((el, i) => (
            <li key={i}>
              <div className="menu-li">{el}</div>
            </li>
          ))}
          <div className="more">More</div>
        </ul>
      </div>
    </div>
  );
}
