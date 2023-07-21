import React from "react";
import CustomerExperience from "./CustomerExperience";
import ColumnContainer from "./ColumnContainer";
import TyDate from "./TyDate";
import Team from "../Misc/Team";

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
