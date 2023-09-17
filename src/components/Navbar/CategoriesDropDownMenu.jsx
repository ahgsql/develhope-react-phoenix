import React, { useRef } from "react";
import "./styleCategoriesDropDownMenu.css";
import collectibles from "../../assets/collectibles.svg";
import homeAndGarden from "../../assets/home&garden.svg";
import sportingGoods from "../../assets/sporting goods.svg";
import electronics from "../../assets/electronics.svg";
import autoParts from "../../assets/auto parts.svg";
import toysAndHobbies from "../../assets/toys&hobbies.svg";
import fashion from "../../assets/fashion.svg";
import musicalInstruments from "../../assets/musicalInstruments.svg";
import otherCategories from "../../assets/other categories.svg";
import useClickOutside2 from "../../hooks/useClickOutside2";
import categories from "../Categories/categorydata";
import { Link } from "react-router-dom";
function CategoriesDropDownMenu({ setDropDown, menuRef }) {
  const categoriesRef = useRef();
  // useClickOutside(categoriesRef, ()=> setDropDown(false))
  useClickOutside2(categoriesRef, menuRef, () => setDropDown(false));

  let collectiblesArray = categories.filter(
    (c) => c.upperMenu == "Collectibles & Art"
  );
  let homeAndGardenArray = categories.filter(
    (c) => c.upperMenu == "Home & Garden"
  );
  let sportingGoodsArray = categories.filter(
    (c) => c.upperMenu == "Sporting Goods"
  );
  let electronicsArray = categories.filter((c) => c.upperMenu == "Electronics");
  let autoPartsAndAccessoriesArray = categories.filter(
    (c) => c.upperMenu == "Auto Parts & Accessories"
  );
  let toysAndHobbiesArray = categories.filter(
    (c) => c.upperMenu == "Toys & Hobbies"
  );
  let fashionArray = categories.filter((c) => c.upperMenu == "Fashion");
  let musicalInstrumentsAndGearArray = categories.filter(
    (c) => c.upperMenu == "Musical Instruments & Gear"
  );
  let otherCategoriesArray = categories.filter(
    (c) => c.upperMenu == "Other Categories"
  );

  return (
    <div className="main-container" ref={categoriesRef}>
      <div className="categories-top-side">
        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={collectibles} alt="" />
            <p>
              <b>Collectibles & Art</b>
            </p>
          </div>
          <ul className="flex-ul">
            {collectiblesArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={homeAndGarden} alt="" />
            <p>
              <b>Home & Garden</b>
            </p>
          </div>
          <ul className="flex-ul">
            {homeAndGardenArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={sportingGoods} alt="" />
            <p>
              <b>Sporting Goods</b>
            </p>
          </div>
          <ul className="flex-ul">
            {sportingGoodsArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={electronics} alt="" />
            <p>
              <b>Electronics</b>
            </p>
          </div>
          <ul className="flex-ul">
            {electronicsArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={autoParts} alt="" />
            <p>
              <b>Auto Parts & Accessories</b>
            </p>
          </div>
          <ul className="flex-ul">
            {autoPartsAndAccessoriesArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={toysAndHobbies} alt="" />
            <p>
              <b>Toys & Hobbies</b>
            </p>
          </div>
          <ul className="flex-ul">
            {toysAndHobbiesArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={fashion} alt="" />
            <p>
              <b>Fashion</b>
            </p>
          </div>
          <ul className="flex-ul">
            {fashionArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={musicalInstruments} alt="" />
            <p>
              <b>Musical Instruments & Gear</b>
            </p>
          </div>
          <ul className="flex-ul">
            {musicalInstrumentsAndGearArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="category-list-container">
          <div className="list-title-container">
            <img className="title-svg" src={otherCategories} alt="" />
            <p>
              <b>Other Categories</b>
            </p>
          </div>
          <ul className="flex-ul">
            {otherCategoriesArray.map((subcategory) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/category/" + subcategory.shortUrl}
              >
                <li> {subcategory.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="see-all-categories-bottom">
        <a href="">See all categories</a>
      </div>
    </div>
  );
}

export default CategoriesDropDownMenu;
