import React, { useEffect } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
export default function FloatingButton() {
  let time;
  useEffect(() => {
    time = new Date();
  }, []);
  function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " seconds";
    else if (minutes < 60) return minutes + " Mins";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days";
  }
  const handleButtonClick = () => {
    let time2 = new Date();

    let timeElapsed = time2 - time;
    let message =
      "Hello, I was in your web page for like " +
      msToTime(timeElapsed) +
      " and wanted to contact with you.";
    window.open(
      `https://api.whatsapp.com/send?phone=34635436266&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };
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
      onClick={handleButtonClick}
      bgColor="#fff"
    >
      <FontAwesomeIcon size="lg" icon={faWhatsapp} /> &nbsp; Click To Chat{" "}
      <FontAwesomeIcon style={{ color: "#009400" }} size="xs" icon={faCircle} />
    </Button>
  );
}
