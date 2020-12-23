import React from 'react';

function App() {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = '';
    let cssStyle = {};
    if (curDate >= 1 && curDate < 12) {
        greeting = 'GOOD NIGHT';
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
            <>

                <div>

                    <h1>Hello <a href="https://www.facebook.com/zarlish.zarlishpari.12" target="_blank"> SIR</a> , <span style={cssStyle}>{greeting}</span></h1>
                </div>
            </>

        </>
    )
};
export default App;