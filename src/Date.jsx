import React from 'react';


function Date() {
    const curDate = new Date();
    curDate = curDate.getHours();
    const greeting = '';
    const cssStyle = {};
    if (curDate >= 1 && curDate < 12) {
        greeting = 'GOOD MORNING';
        cssStyle.color = 'green';
    }
    else if (curDate >= 12 && curDate < 20) {
        greeting = 'good evening';
        cssStyle.color = 'yellow';
    }
    else {
        greeting = 'good night';
        cssStyle.color = 'black';
    }
    return (
        <>

        <div>

            <h1>Hello sir , <span style={cssStyle}>{greeting}</span></h1>
        </div>
        </>
    )
};
export default Date;