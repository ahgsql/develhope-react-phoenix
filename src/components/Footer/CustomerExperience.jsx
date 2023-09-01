import light_30 from "./assets/light_30.png";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import customerExperience from "./customerExperience.css";
import React, { useEffect } from "react";
import SignUpModal from "./SignUpModal";
import { useState } from "react";

export default function CustomerExperience() {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="imageContainer"></div>
        <div className="texto">
          <p className="first-paragraph">
            Want to have the{" "}
            <span className="negrita">ultimate customer experience?</span>{" "}
          </p>
          <p className="second-paragraph">
            Become a <span style={{ color: "#3874ff" }}>member</span> today!
          </p>
          {user ? (
            <Button
              bgColor="#3874ff"
              radius={8}
              style={{
                fontFamily: "Nunito Sans",

              }}
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
              }}
            >
              Sign Out {"("} {user.displayName} {")"}
            </Button>
          ) : (
            <Button
              bgColor="#3874ff"
              radius={8}
              style={{
                fontFamily: "Nunito Sans",
                fontSize: "1rem", 
                whiteSpace: "nowrap",                
                textAlign: "center",                               
              }}
              onClick={() => setVisible(true)}
            >
              Sign up <FontAwesomeIcon icon={faAngleRight} />{" "}
            </Button>
          )}
          <SignUpModal
            setUser={setUser}
            visible={visible}
            setVisible={setVisible}
            onHide={() => setVisible(false)}
          />
        </div>
      </div>
    </>
  );
}
