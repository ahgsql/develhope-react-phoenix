import React from "react";
import light_30 from "./assets/light_30.png";
import footer from "./footer.css"
export default function Footer() {

  return (
    <>
      <div className="contenedor">
        <img width={"305px"} height={"250px"} src={light_30} alt="" />
        <div className="texto">
          <h3>Want to have the <strong>ultimate customer experience?</strong> </h3>
          <h1>Become a <span style={{ color: "blue" }}>member</span> today!</h1>
          <button style={{ backgroundColor: "blue", borderRadius: "5px" }}>Sing up </button>
        </div>
      </div>
    </>
  );
}
