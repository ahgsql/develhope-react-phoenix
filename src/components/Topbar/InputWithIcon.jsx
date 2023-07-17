import React from "react";
import "./Topbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function InputWithIcon({
  iconname,
  setSearch,
  setSearchResultsOpen,
}) {
  return (
    <div className="wrapper">
      <FontAwesomeIcon className="icon" icon={iconname} />
      <input
        className="input"
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setSearchResultsOpen(true)}
      ></input>
    </div>
  );
}
