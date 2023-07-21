import React, { useState } from "react";
import useColorLuminance from "../../hooks/useColorLuminance";
import "./common.css";

export default function Button({
  radius = 40,
  bgColor = "#ffa500",
  children,
  style,
}) {
  const [isHovered, setIsHovered] = useState(false);
  var bgHoverColor = useColorLuminance(bgColor, -0.2);
  const buttonStyle = {
    borderRadius: `${radius}px`,
    backgroundColor: `${isHovered ? bgHoverColor : bgColor}`,
    ...style,
  };

  return (
    <button
      className="button"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
