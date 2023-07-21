import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import TeamMember from "./TeamMember";
export default function TeamModal({ style, setModalOpen }) {
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
        <h1>Random Group Team Members</h1>
        <TeamMember github="thaliagit" />
        <TeamMember github="Oaks93" />
        <TeamMember github="mhborazan" />
        <TeamMember github="AlptekinOcakdan" />
        <TeamMember github="ahgsql" />
      </div>
    </div>
  );
}
