import React from "react";
import Column from "./Column";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
export default function ColumnContainer() {
  const column1Title = "About Phoenix";
  const column1Items = ["Careers","Affiliate Program","Privacy Policy","Terms & Conditions"];
  const column2Title = "Stay Connected";
  const column2Items = [
    <li style={{ fontSize: "13px" }}>Blog</li>,
    <li style={{ fontSize: "13px" }}>
      <FontAwesomeIcon icon={faFacebook} style={{ color: "blue" }} />
      Facebook
    </li>,
    <li style={{ fontSize: "13px" }}>Twitter</li>,
  ];
  const column3Title = "Customer Service";
  const column3Items = ["Help Desk", "Support, 24/7", "Community of Phoenix"];
  const column4Title = "Payment Method";
  const column4Items = ["Cash on Delivery","Online Payment","PayPal","Installment"];

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: " rgb(239, 242, 246)",
        padding: "50px",
        marginTop: "50px",
      }}
    >
      <div
        style={{ width: "405.328px", height: "124.25px", marginRight: "90px" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={logo} alt="phoenix logo" width={27} height={26.58} />
          <p style={{ fontSize: "26.18px" }}>phoenix</p>
        </div>
        <p style={{ fontSize: "12.8px", textAlign: "left" }}>
          Phoenix is an admin dashboard template with fascinating features and
          amazing layout. The template is responsive to all major browsers and
          is compatible with all available devices and screen sizes.
        </p>
      </div>
      <Column title={column1Title} items={column1Items} />
      <Column title={column2Title} items={column2Items} />
      <Column title={column3Title} items={column3Items} />
      <Column title={column4Title} items={column4Items} />
    </div>
  );
}
