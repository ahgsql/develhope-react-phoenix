import React from 'react'
import tyDate from "./tyDate.css"

export default function TyDate() {
    let currentYear = new Date().getFullYear()
    return (
        <div className='contenedor'>
            <div className="fecha">
                <p>Thank you for creating with Phoenix|{currentYear} ©</p>
                <a href="https://themewagon.com/">Themewagon</a>
            </div>
            <div className="version">v1.13.0</div>
        </div>
    )
}
