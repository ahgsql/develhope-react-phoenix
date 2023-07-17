import React, { useState, useRef, useEffect } from "react";
import "./Topbar.css";
import logo from "../../assets/logo.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import products from "../../data/products";
import InputWithIcon from "./InputWithIcon.jsx";
import RightNavButtons from "./RightNavButtons";
import ProductSearchResult from "./ProductSearchResult";
import clickOutside from "../../hooks/useClickOutside";
const changeTheme = () => {
  console.log("Theme Changing");
};
export default function Topbar() {
  const [search, setSearch] = useState("");
  const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  const resultRef = useRef();
  clickOutside(resultRef, () => setSearchResultsOpen(false));
  const searchList = products
    .filter((product) => {
      return (
        product.title
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        product.description
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      );
    })
    .map((product) => (
      <ProductSearchResult key={product.id} product={product} />
    ));
  return (
    <section className="topbar">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
        <span>{"phoneix"}</span>
      </div>
      <div className="search" ref={resultRef}>
        <InputWithIcon
          iconname={faMagnifyingGlass}
          setSearch={setSearch}
          setSearchResultsOpen={setSearchResultsOpen}
        />
        {search.length > 0 && searchResultsOpen && (
          <div className="searchResult">
            {searchList.length > 0 ? searchList : "No Results"}
          </div>
        )}
      </div>
      <div>
        <RightNavButtons changeTheme={changeTheme} />
      </div>
    </section>
  );
}
