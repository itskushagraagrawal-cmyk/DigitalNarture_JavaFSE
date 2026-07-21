import React from 'react';
import './OfficeSpace.css';

function OfficeSpace() {
    const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80"; // Placeholder office image
    const element = "Office Space";
    const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
    const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };
    
    let colors = [];
    if (ItemName.Rent <= 60000) {
        colors.push('textRed');
    } else {
        colors.push('textGreen');
    }

    return (
        <div>
            <h1>{element} , at Affordable Range</h1>
            {jsxatt}
            <h1>Name: {ItemName.Name}</h1>
            <h3 className={colors[0]}>Rent: Rs. {ItemName.Rent}</h3>
            <h3>Address: {ItemName.Address}</h3>
        </div>
    );
}

export default OfficeSpace;
