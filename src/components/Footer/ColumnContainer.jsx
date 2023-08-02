import React from "react";
import Column from "./Column";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./columContainer.css";
export default function ColumnContainer() {
  const column1Title = "About Phoenix";
  const column1Items = [
    <li key={1} style={{ fontSize: "13px" }}>
      Careers
    </li>,
    <li key={2} style={{ fontSize: "13px" }}>
      Affiliate Program
    </li>,
    <li key={3} style={{ fontSize: "13px" }}>
      Privacy Policy
    </li>,
    <li key={4} style={{ fontSize: "13px" }}>
      Terms & Conditions
    </li>,
  ];
  const column2Title = "Stay Connected";
  const column2Items = [
    <li key={1} style={{ fontSize: "13px" }}>
      {" "}
      <FontAwesomeIcon
        icon={faBlog}
        size="lg"
        style={{ color: "#6188cc" }}
      />{" "}
      &nbsp; Blog
    </li>,
    <li key={2} style={{ fontSize: "13px" }}>
      <FontAwesomeIcon icon={faFacebook} style={{ color: "blue" }} /> &nbsp;
      Facebook
    </li>,
    <li key={3} style={{ fontSize: "13px" }}>
      <FontAwesomeIcon icon={faTwitter} style={{ color: "#1d9bf0" }} /> &nbsp;
      Twitter
    </li>,
  ];
  const column3Title = "Customer Service";
  const column3Items = [
    <li key={1} style={{ fontSize: "13px" }}>
      Help Desk
    </li>,
    <li key={2} style={{ fontSize: "13px" }}>
      Support, 24/7
    </li>,
    <li key={3} style={{ fontSize: "13px" }}>
      Community of Phoenix
    </li>,
  ];
  const column4Title = "Payment Method";
  const column4Items = [
    <li key={1} style={{ fontSize: "13px" }}>
      Cash on Delivery
    </li>,
    <li key={2} style={{ fontSize: "13px" }}>
      Online Payment
    </li>,
    <li key={3} style={{ fontSize: "13px" }}>
      PayPal
    </li>,
    <li key={4} style={{ fontSize: "13px" }}>
      Installment
    </li>,
  ];

  return (
    <div
      className="footerBar"
      style={{
        display: "flex",
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
