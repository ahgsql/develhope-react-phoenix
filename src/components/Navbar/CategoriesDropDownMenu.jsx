import React, {useRef} from "react";
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
import useClickOutside from "../../hooks/useClickOutside";

function CategoriesDropDownMenu({setDropDown}) {
 
   const categoriesRef = useRef();
 // useClickOutside(categoriesRef, ()=> setDropDown(false))
  
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
            <li>Collectibles</li>
            <li>Antiques</li>
            <li>Sports memorabilia</li>
            <li>Art</li>
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
            <li>Yard, Garden & Outdoor</li>
            <li>Crafts</li>
            <li>Home Improvement</li>
            <li>Pet Supplies</li>
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
            <li>Outdoor Sports</li>
            <li>Team Sports</li>
            <li>Exercise & Fitness</li>
            <li>Golf</li>
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
            <li>Computers & Tablets</li>
            <li>Camera & Photo</li>
            <li>TV, Audio & Surveillance</li>
            <li>Cell Phone & Accessories</li>
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
            <li>GPS & Security Devices</li>
            <li>Radar & Laser Detectors</li>
            <li>Care & Detailing</li>
            <li>Scooter Parts & Accessories</li>
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
            <li>Radio Control</li>
            <li>Kids Toys</li>
            <li>Action Figures</li>
            <li>Dolls & Bears</li>
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
            <li>Women</li>
            <li>Men</li>
            <li>Jewelry & Watches</li>
            <li>Shoes</li>
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
            <li>Guitar</li>
            <li>Pro Audio Equipment</li>
            <li>String</li>
            <li>Stage Lighting & Effects</li>
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
            <li>Video Games & Consoles</li>
            <li>Health & Beauty</li>
            <li>Baby</li>
            <li>Business & Industrial</li>
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
