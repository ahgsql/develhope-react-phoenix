import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./chatArea.css";
import axios from "axios";
import LiveChatFeature from "./LiveChatFeature";

export default function FloatingButton() {
  const [liveChatOpen, setLiveChatOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "50px",
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <LiveChatFeature
          style={{
            visibility: liveChatOpen ? "visible" : "hidden",
            opacity: liveChatOpen ? 1 : 0,
            position: "fixed",
            bottom: "95px",
            right: "50px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        />

        <Button
          style={{
            color: "#005eff",
            fontWeight: "bold",
            // position: "fixed",
            // bottom: "40px",
            // right: "50px",
            boxShadow: "1px 1px 15px 15px rgba(148, 148, 148, 0.15)",
          }}
          onClick={() => setLiveChatOpen(!liveChatOpen)}
          bgColor="#fff"
        >
          <FontAwesomeIcon size="lg" icon={faWhatsapp} /> &nbsp; Click To Chat{" "}
          <FontAwesomeIcon
            style={{ color: "#009400" }}
            size="xs"
            icon={faCircle}
          />
        </Button>
      </div>
    </>
  );
}
