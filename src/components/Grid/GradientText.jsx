import React from "react";

export default function GradientText({
  fontSize = 50,
  text = "Gradient Text",
  color1 = "pink",
  color2 = "purple",
  degree = 90,
}) {
  const style = {
    fontSize: `${fontSize}px`,
    backgroundImage: `linear-gradient(${degree}deg, ${color1}, ${color2})`,
    backgroundClip: "text",
    webkitTextFillColor: "transparent",
    webkitBackgroundClip: "text",
    fontWeight: "inherit",
  };
  return <span style={style}>{text}</span>;
}
