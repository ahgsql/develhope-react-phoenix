import React from "react";

export default function Card({
  children,
  flexDirection,
  featured = false,
  bg = { type: "color", value: "white" },
}) {
  let cardbg;
  if (bg.type == "color") {
    cardbg = { backgroundColor: bg.value };
  }
  if (bg.type == "gradient") {
    cardbg = { background: bg.value };
  }
  if (bg.type == "image") {
    cardbg = {
      backgroundImage: `url("${bg.value}")`,
      backgroundRepeat: " no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    };
  }
  return (
    <div
      className={featured ? "card featured-card" : "card"}
      style={{ ...cardbg, flexDirection }}
    >
      {children}
    </div>
  );
}
