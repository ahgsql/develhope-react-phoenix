
import React from "react";
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SignUpForm from "./SignUpForm";
import signUpform from "./signUpform.css"


export default function SignUpModal({ visible = false, onHide }) {

    return (

        <Dialog header="Introduce your info" visible={visible} style={{ width: '75vw', height:"100vw" }} onHide={onHide}>
            <SignUpForm className="m-0" />
        </Dialog>

    )
}