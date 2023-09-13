import React, { useEffect, useState, useRef } from "react";
import "./chatArea.css";
import axios from "axios";
import Pusher from "pusher-js";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthProvider";
export default function LiveChatFeature({ style, innerRef }) {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");

  const { user } = useAuth();

  let bind = false;
  let historyRef = useRef();
  useEffect(() => {
    const pusher = new Pusher("cc9492824097dabab1e1", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("liveChat");
    if (!bind) {
      channel.bind("admin-message-to-" + user?.userName, function (data) {
        setHistory((prevhistory) => [
          ...prevhistory,
          { from: "admin", message: data.message },
        ]);
        scrollToLast();
      });
      bind = true;
    }
  }, [user]);

  const scrollToLast = () => {
    const scrollHeight = historyRef.current?.scrollHeight;
    const height = historyRef.current?.clientHeight;
    const maxScrollTop = scrollHeight - height;
    historyRef.current.scrollTop = historyRef.current?.scrollHeight + 1000;
  };

  const sendMessage = async () => {
    if (message.trim().length > 0) {
      await axios.post(import.meta.env.VITE_BASE_URL + "/api/chat/message", {
        from: "customer",
        message,
        userName: user?.userName,
      });
      setHistory((prevhistory) => [
        ...prevhistory,
        { from: "customer", message },
      ]);
      setMessage("");
      scrollToLast();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  return (
    <>
      <div ref={innerRef} className="chat-area" style={{ ...style }}>
        <div className="contact bar">
          <div className="pic stark"></div>
          <div className="name">Customer Representative</div>
        </div>
        <div className="chat-history" ref={historyRef}>
          {history.map((message, i) => {
            return (
              <div className={message.from + "-msg message"} key={i}>
                {" "}
                <div className="messageLabel">
                  {message.from == "admin" ? "Customer Service" : "You"}:
                </div>
                <div className="messageBody">{message.message}</div>
              </div>
            );
          })}
        </div>
        <div
          className="chat-input"
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            alignContent: "baseline",
          }}
        >
          <input
            type="text"
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            bgColor="#7fe1d9"
            style={{
              maxWidth: "90px",
              minWidth: "50px",
              borderRadius: "5px",
              padding: 0,
            }}
            onClick={sendMessage}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </div>
      </div>
    </>
  );
}
