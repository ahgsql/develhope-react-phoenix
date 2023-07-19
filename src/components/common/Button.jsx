import React, { Children, useState } from "react";
import useColorLuminance from "../../hooks/useColorLuminance";

export default function Button({
  radius = 40,
  bgColor = "#ffa500",
  children,
  style,
}) {
  const [isHovered, setIsHovered] = useState(false);
  var bgHoverColor = useColorLuminance(bgColor, -0.2);
  const buttonStyle = {
    height: "50px",
    maxWidth: "250px",
    borderRadius: `${radius}px`,
    backgroundColor: `${isHovered ? bgHoverColor : bgColor}`,
    color: "white",
    fontSize: "16px",
    textAlign: "center",
    cursor: "pointer",
    padding: "10px 20px",
    border: "none",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ...style,
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
