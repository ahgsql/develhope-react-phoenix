import React, { useState } from "react";
import Button from "../common/Button";
import "./Team.css";
import TeamModal from "./TeamModal";
export default function Team() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="team-section">
      <Button
        onClick={() => setModalOpen(true)}
        className="team-btn"
        radius={4}
        bgColor="#8b49f4"
        style={{ width: "100%", maxWidth: "70%" }}
      >
        See Team
      </Button>
      <TeamModal
        style={{
          visibility: modalOpen ? "visible" : "hidden",
          opacity: modalOpen ? 1 : 0,
        }}
        setModalOpen={setModalOpen}
      />
    </section>
  );
}
