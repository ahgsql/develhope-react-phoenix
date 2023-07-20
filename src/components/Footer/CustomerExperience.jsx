import light_30 from "./assets/light_30.png";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import customerExperience from "./customerExperience.css"

import React from 'react'

export default function CustomerExperience() {
    return (
        <>
            <div className="container">
                <img width={"305px"} height={"250px"} src={light_30} alt="" />
                <div className="texto">
                    <p className="first-paragraph">Want to have the <span className="negrita">ultimate customer experience?</span> </p>
                    <p className="second-paragraph">Become a <span style={{ color: "#3874ff" }}>member</span> today!</p>
                    <Button bgColor="#3874ff" radius={8} style={{ fontFamily: "Nunito Sans", fontSize: 20, padding: "10px 30px" }} >Sign up <FontAwesomeIcon icon={faAngleRight} /> </Button>

                </div>
            </div>
        </>
    )
}
