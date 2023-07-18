import React from 'react'
import Column from './Column'


export default function ColumnContainer() {
    const column1Title = 'About Phoenix';
    const column1Items = ["Careers", "Affiliate Program", "Privacy Policy", "Terms & Conditions"];
    const column2Title = 'Stay Connected';
    const column2Items = ["Blogs","Facebook","Twitter"];
    const column3Title = 'Customer Service';
    const column3Items = ["Help Desk", "Support, 24/7", "Community of Phoenix"];
    const column4Title = 'Payment Method';
    const column4Items = ["Cash on Delivery", "Online Payment", "PayPal", "Installment"];

    return (
        <div style={{display:"flex"}} >
            <Column title={column1Title} items={column1Items} />
            <Column title={column2Title} items={column2Items} />
            <Column title={column3Title} items={column3Items} />
            <Column title={column4Title} items={column4Items} />
        </div>
    )
}
