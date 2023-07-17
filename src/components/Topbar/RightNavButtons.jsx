import React from "react";
import IconButton from "./IconButton";
import {
  faBell,
  faHeart,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

export default function RightNavButtons({ changeTheme }) {
  return (
    <>
      <IconButton
        iconname={faSun}
        className="circle bgOrange hover"
        onClick={() => changeTheme()}
      />
      <IconButton iconname={faHeart} className="circle" />
      <IconButton iconname={faBell} className="circle" />
      <IconButton iconname={faUser} className="circle" />
    </>
  );
}
