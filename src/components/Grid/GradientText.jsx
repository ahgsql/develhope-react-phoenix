import React from "react";
import "./grid.css";

export default function GradientText({
  text = "Gradient Text",
  color1 = "pink",
  color2 = "purple",
  degree = 90,
}) {
  const style = {
    backgroundImage: `linear-gradient(${degree}deg, ${color1}, ${color2})`,
  };
  return (
    <span className="gradient-text" style={style}>
      {text}
    </span>
  );
}
