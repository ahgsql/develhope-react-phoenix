import React from 'react'
import tyDate from "./tyDate.css"

export default function TyDate() {
    let currentYear = new Date().getFullYear()
    return (
        <div className='contenedor'>
            <div className="fecha">
                <p>All rights reserved. |  {currentYear} © Random Group Int8 Develhope.  </p>
                
            </div>
            <div className="version">v1.13.0</div>
        </div>
    )
}
