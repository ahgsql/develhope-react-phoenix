import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthProvider";

import { faXmarkCircle, faRefresh } from "@fortawesome/free-solid-svg-icons";
export default function SignInModal({ style, setModalOpen }) {
  const { user, login, logout, loginCheck } = useAuth();
  const [username, setUsername] = useState("testuser");
  const [password, setPassword] = useState("AliHaydar!?_1");
  const handleLogin = () => {
    login(username, password);
  };
  return (
    <div className="modal-window" style={{ ...style }}>
      <div>
        <button
          type="button"
          title="Close"
          onClick={() => setModalOpen(false)}
          className="modal-close"
        >
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
        <div>
          {user ? (
            <div>
              <p>Welcome {user.userName}</p>
            </div>
          ) : (
            <div>
              <p>You are not logged in.</p>
              <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <br />
              <input
                placeholder="Pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br />
              <button onClick={handleLogin}>Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
