import React from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SignUpForm from "./SignUpForm";
import signUpform from "./signUpform.css?inline";

export default function SignUpModal({
  visible = false,
  onHide,
  setUser,
  setVisible,
}) {
  return (
    <Dialog
      header="Introduce your info"
      dismissableMask={true}
      visible={visible}
      style={{ width: "75vw", height: "100vw" }}
      onHide={onHide}
    >
      <SignUpForm className="m-0" setUser={setUser} setVisible={setVisible} />
    </Dialog>
  );
}
