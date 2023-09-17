import React from "react";
import images from "./index";
import "./styleCategories.css";
import { Link, useLocation } from "react-router-dom";
import categories from "./categorydata";
export default function Categories() {
  const { pathname } = useLocation();
  let activeShortUrl = pathname.split("/").pop();
  let categories2 = categories.filter((category) => !category.upperMenu);
  return (
    <div className="mainCategories">
      <ul className="categories-ul">
        {categories2.map((category, i) => (
          <Link
            to={"/category/" + category.shortUrl}
            style={{ textDecoration: "none" }}
          >
            <li key={i} className="category-li">
              <div
                className={
                  "category-li-container " +
                  (category.shortUrl == activeShortUrl ? "category-active" : "")
                }
              >
                <img
                  className="svg"
                  src={images[category.title.toLowerCase()]}
                />
              </div>
              {category.title}
            </li>{" "}
          </Link>
        ))}
      </ul>
    </div>
  );
}
