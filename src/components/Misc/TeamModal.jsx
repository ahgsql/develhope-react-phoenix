import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faRefresh } from "@fortawesome/free-solid-svg-icons";

import TeamMember from "./TeamMember";
export default function TeamModal({ style, setModalOpen }) {
  const [key, setKey] = useState(0);

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
        <h1>
          Random Group Team Members{" "}
          <button onClick={() => setKey(key + 1)}>
            <FontAwesomeIcon icon={faRefresh} />
          </button>
        </h1>
        <div key={key}>
          <TeamMember github="thaliagit" />
          <TeamMember github="Oaks93" />
          <TeamMember github="mhborazan" />
          <TeamMember github="AlptekinOcakdan" />
          <TeamMember github="ahgsql" />
        </div>
      </div>
    </div>
  );
}
