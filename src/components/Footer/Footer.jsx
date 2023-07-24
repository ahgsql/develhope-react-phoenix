import React from "react";
import CustomerExperience from "./CustomerExperience";
import ColumnContainer from "./ColumnContainer";
import TyDate from "./TyDate";
import Team from "../Misc/Team";
import SignUpModal from "./SignUpModal";

export default function Footer() {
  return (
    <>
      <CustomerExperience />
      <Team />
      <ColumnContainer />
      <hr />
      <TyDate />
    </>
  );
}
