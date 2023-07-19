import React from "react";
import images from "./index";

export default function Categories() {
  const categories = [
    "Star",
    "Grocery",
    "Fashion",
    "Mobile",
    "Electronics",
    "Home",
    "Dining",
    "Gifts",
    "Tools",
    "Travel",
    "Others",
  ];
  
  console.log(images["tool"])
  return (
    <div className="mainCategories">
      <ul className="categories-ul">
        {categories.map((category) => (
          <li className="category-li">
            <div className="category-li-container">
              <img className="svg" src={images[category.toLowerCase()]} />
            </div>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
