import React from 'react';
import './column.css';

const Column = ({ title, items }) => {
    return (
        <div className="column">
            <p style={{fontSize:"16px"}}>{title}</p>
            <ul className="custom-list">
                {items.map((item, index) => (
                    <li key={index} style={{fontSize:"12.8px"}}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Column;
