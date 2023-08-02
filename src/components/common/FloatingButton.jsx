import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function FloatingButton() {
  return (
    <Button
      style={{
        color: "#005eff",
        fontWeight: "bold",
        position: "fixed",
        bottom: "40px",
        right: "50px",
        boxShadow: "1px 1px 15px 15px rgba(148, 148, 148, 0.15)",
      }}
      onClick={() =>
        window.open(
          `https://api.whatsapp.com/send?phone=34635436266&text=${encodeURIComponent(
            "Hello from React App."
          )}`,
          "_blank" // <- This is what makes it open in a new window.
        )
      }
      bgColor="#fff"
    >
      <FontAwesomeIcon size="lg" icon={faWhatsapp} /> &nbsp; Click To Chat
    </Button>
  );
}
