import React, { useState, useRef, useEffect } from "react";
import "./Topbar.css";
import logo from "../../assets/logo.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import products from "../../data/products";
import InputWithIcon from "./InputWithIcon.jsx";
import RightNavButtons from "./RightNavButtons";
import ProductSearchResult from "./ProductSearchResult";
import clickOutside from "../../hooks/useClickOutside";
import { useAuth } from "../../context/AuthProvider";

import { BrowserRouter, Link } from "react-router-dom";
import { getProductsSearch } from "../../hooks/getProduct";
import { useDebugger } from "../../context/DebuggerProvider";
export default function Topbar({ setTheme }) {
  const { user, login, logout, loginCheck } = useAuth();
  //loginCheck();
  const changeTheme = () => {
    let theme = document.querySelector("body").getAttribute("theme");
    setTheme(theme == "dark" ? "light" : "dark");
  };
  const { debugMsg, resetDebugMessage, setDebugMsg, createDebugMessage } =
    useDebugger();
  useEffect(() => {
    createDebugMessage([
      {
        type: "system",
        title: "Checking User",
        value: user ? "User Logged In as " + user.userName : "Not Logged In",
      },
    ]);
  }, [user]);

  const [search, setSearch] = useState("");
  const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const resultRef = useRef();

  clickOutside(resultRef, () => setSearchResultsOpen(false));
  var timeout = useRef();

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(handleSearch, 500);
  }, [search]);

  const handleSearch = async () => {
    let results = await getProductsSearch(search);
    setSearchResult(results);
  };

  return (
    <section className="topbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo-container">
          <img className="logo" src={logo}></img>
          <span>{"phoenix"}</span>
        </div>
      </Link>

      <div className="search" ref={resultRef}>
        <InputWithIcon
          iconname={faMagnifyingGlass}
          setSearch={setSearch}
          setSearchResultsOpen={setSearchResultsOpen}
        />
        {search.length > 0 && searchResultsOpen && (
          <div className="searchResult">
            {searchResult.length > 0
              ? searchResult.map((e, i) => {
                  return <ProductSearchResult key={i} product={e} />;
                })
              : "No Results"}
          </div>
        )}
      </div>
      <div className="right-nav">
        <RightNavButtons changeTheme={changeTheme} />
      </div>
    </section>
  );
}
