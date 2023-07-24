
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SignUpForm from "./SignUpForm";


export default function SignUpModal({ visible = false, onHide }) {

    return (

        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={onHide}>
            <SignUpForm className="m-0" />
        </Dialog>

    )
}
