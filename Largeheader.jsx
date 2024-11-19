import React from "react";

function Largeheader() {
    var d = new Date();
    const month = d.getMonth() + 1;
    const style = {
        color: 'red', 
        backgroundColor: 'lightgreen', 
        width: '100%', 
        textAlign: 'center', 
        padding: '20px', 
    };
    
    if (month === 10 || month === 11 || month === 12) {
        style.color = 'pink';
    } else if (month === 2 || month === 1 || month === 3) {
        style.color = 'green';
    } else if (month === 6 || month === 4 || month === 5) {
        style.color = 'orange';
    } else if (month === 7 || month === 8 || month ===9) {  
        style.color = 'purple';
    } else {
        style.color = 'blue';
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <h1 style={style}>Deakin University</h1>
        </div>
    );
}

export default Largeheader;
