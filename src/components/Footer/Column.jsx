import React from 'react';
import './column.css';

const Column = ({ title, items }) => {
    return (
        <div className="column">
            <h3><p>{title}</p></h3>
            <ul className="custom-list">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Column;
